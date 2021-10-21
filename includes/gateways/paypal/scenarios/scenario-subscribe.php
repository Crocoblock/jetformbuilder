<?php


namespace Jet_Form_Builder\Gateways\Paypal\Scenarios;


use Jet_Form_Builder\Gateways\Paypal;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Paypal\Actions\Create_Webhook;
use Jet_Form_Builder\Gateways\Paypal\Actions\List_Webhook_Trait;
use Jet_Form_Builder\Gateways\Paypal\Actions\Show_Subscription_Details_Action;
use Jet_Form_Builder\Gateways\Paypal\Actions\Subscribe_Now_Action;
use Jet_Form_Builder\Gateways\Paypal\Events_Listeners_Manager;
use Jet_Form_Builder\Gateways\Paypal\Web_Hooks\Paypal_Subscription_Form_Id_Endpoint;
use Jet_Form_Builder\Gateways\Paypal\Web_Hooks\Paypal_Subscription_Global_Endpoint;

class Scenario_Subscribe extends Scenario_Base implements Scenario_With_Resource_It {

	use Scenario_Set_Status_Trait;
	use List_Webhook_Trait;

	public static function scenario_id() {
		return 'SUBSCRIBE_NOW';
	}

	protected function query_token() {
		return $_GET['subscription_id'] ?? false;
	}

	public function get_failed_statuses() {
		return array( 'CANCELLED', 'EXPIRED' );
	}

	/**
	 * @return void
	 * @throws Gateway_Exception
	 */
	public function process_before() {
		$subscription = ( new Subscribe_Now_Action() )
			->set_bearer_auth( $this->controller->get_order_token() )
			->set_app_context( array(
				'return_url' => $this->get_success_url(),
				'cancel_url' => $this->get_failed_url()
			) )
			->set_plan_id( 'P-2RW14005CT679391XMFPMEWI' )
			->send_request();

		if ( empty( $subscription['id'] ) ) {
			throw new Gateway_Exception( $subscription['message'], $subscription );
		}

		update_post_meta(
			$this->controller->get_order_id(),
			Paypal\Controller::GATEWAY_META_KEY,
			json_encode( array(
				'subscription_id' => $subscription['id'],
				'scenario'        => self::rep_item_id(),
				'order_id'        => $this->controller->get_order_id(),
				'form_id'         => $this->get_action_handler()->form_id,
				'form_data'       => $this->get_action_handler()->request_data,
			), JSON_UNESCAPED_UNICODE )
		);

		$this->redirect_to_checkout( $subscription );
	}

	public function create_resource() {
		$subscription = ( new Subscribe_Now_Action() )
			->set_bearer_auth( $this->controller->get_order_token() )
			->set_app_context( array(
				'return_url' => $this->get_success_url(),
				'cancel_url' => $this->get_failed_url()
			) )
			->set_plan_id( 'P-2RW14005CT679391XMFPMEWI' )
			->send_request();

		if ( empty( $subscription['id'] ) ) {
			throw new Gateway_Exception( $subscription['message'], $subscription );
		}

		return $subscription;
	}


	/**
	 * @return mixed
	 * @throws Gateway_Exception
	 */
	public function process_after() {
		return ( new Show_Subscription_Details_Action() )
			->set_bearer_auth( $this->controller->get_current_token() )
			->set_subscription_id( $this->get_queried_token() )
			->send_request();
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function process_save() {
		$this->set_payment_status();
		$this->maybe_create_webhooks();
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

		$response = ( new Create_Webhook() )
			->set_bearer_auth( $this->controller->get_current_token() )
			->set_param_url( Paypal_Subscription_Global_Endpoint::rest_url() )
			->set_param_event_types( Events_Listeners_Manager::instance()->get_events_types_list() )
			->send_request();

		if ( empty( $response['id'] ) ) {
			throw new Gateway_Exception( 'Can\'t create webhook', $response );
		}

	}

	private function get_rest_api_endpoint() {
		if ( $this->controller->current_gateway( 'use_global' ) ) {
			return Paypal_Subscription_Global_Endpoint::get_rest_base();
		}

		return Paypal_Subscription_Form_Id_Endpoint::get_rest_base();
	}


}