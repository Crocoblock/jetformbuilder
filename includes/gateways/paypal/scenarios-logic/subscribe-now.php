<?php


namespace Jet_Form_Builder\Gateways\Paypal\Scenarios_Logic;

use Jet_Form_Builder\Gateways\Paypal;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Paypal\Actions;
use Jet_Form_Builder\Gateways\Paypal\Events_Listeners_Manager;
use Jet_Form_Builder\Gateways\Paypal\Web_Hooks;
use Jet_Form_Builder\Gateways\Paypal\Scenarios_Connectors;

class Subscribe_Now extends Scenario_Logic_Base implements With_Resource_It {

	use Set_Status_Trait;
	use Actions\List_Webhook_Trait;
	use Scenarios_Connectors\Subscribe_Now;

	protected function query_token() {
		return esc_attr( $_GET['subscription_id'] ?? '' );
	}

	public function get_failed_statuses() {
		return array( 'CANCELLED', 'EXPIRED' );
	}

	/**
	 * @return void
	 * @throws Gateway_Exception
	 */
	public function process_before() {
		$this->set_gateway_data();

		/**
		 * Create subscription by /v1/billing/subscriptions
		 */
		$subscription = $this->create_resource();

		/**
		 * By default save subscription id & form data to inserted post meta
		 */
		$this->save_resource( $subscription );

		/**
		 * Redirect to Paypal for agree and subscribe
		 */
		$this->redirect_to_checkout( $subscription );
	}

	public function create_resource() {
		$subscription = ( new Actions\Subscribe_Now_Action() )
			->set_bearer_auth( $this->controller->get_order_token() )
			->set_app_context(
				array(
					'return_url' => $this->get_success_url(),
					'cancel_url' => $this->get_failed_url(),
				)
			)
			->set_plan_id( 'P-2RW14005CT679391XMFPMEWI' )
			->send_request();

		if ( empty( $subscription['id'] ) ) {
			throw new Gateway_Exception( $subscription['message'], $subscription );
		}

		return $subscription;
	}

	public function save_resource( $subscription ) {
		update_post_meta(
			$this->controller->get_order_id(),
			Paypal\Controller::GATEWAY_META_KEY,
			json_encode(
				array(
					'subscription_id' => $subscription['id'],
					'scenario'        => self::scenario_id(),
					'order_id'        => $this->controller->get_order_id(),
					'form_id'         => $this->get_action_handler()->form_id,
					'form_data'       => $this->get_action_handler()->request_data,
					'resource'        => $subscription,
					'provider'        => 'jet-form-builder',
				),
				JSON_UNESCAPED_UNICODE
			)
		);
	}


	/**
	 * @return mixed
	 * @throws Gateway_Exception
	 */
	public function process_after() {
		return ( new Actions\Show_Subscription_Details_Action() )
			->set_bearer_auth( $this->controller->get_current_token() )
			->set_subscription_id( $this->get_queried_token() )
			->send_request();
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function process_save() {
		$this->set_payment_status();
		$this->set_resource();
		$this->maybe_create_webhooks();
	}

	public function set_resource() {
		$payment = $this->controller->get_payment();

		$this->controller->data['resource'] = $payment;
	}

	/**
	 * @throws Gateway_Exception
	 */
	private function maybe_create_webhooks() {
		$endpoint   = $this->get_rest_api_endpoint();
		$token      = $this->controller->get_current_token();
		$webhook_id = $this->get_webhook_id_by_endpoint( $endpoint, $token );

		if ( $webhook_id ) {
			return;
		}

		$response = ( new Actions\Create_Webhook() )
			->set_bearer_auth( $this->controller->get_current_token() )
			->set_param_url( Web_Hooks\Paypal_Subscription_Global_Endpoint::rest_url() )
			->set_param_event_types( Events_Listeners_Manager::instance()->get_events_types_list() )
			->send_request();

		if ( empty( $response['id'] ) ) {
			throw new Gateway_Exception( 'Can\'t create webhook', $response );
		}

	}

	private function get_rest_api_endpoint() {
		if ( $this->controller->current_gateway( 'use_global' ) ) {
			return Web_Hooks\Paypal_Subscription_Global_Endpoint::get_rest_base();
		}

		return Web_Hooks\Paypal_Subscription_Form_Id_Endpoint::get_rest_base();
	}


}
