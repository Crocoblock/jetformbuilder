<?php


namespace Jet_Form_Builder\Gateways\Paypal\Scenarios;


use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Paypal\Actions\Create_Webhook;
use Jet_Form_Builder\Gateways\Paypal\Actions\Delete_Webhook;
use Jet_Form_Builder\Gateways\Paypal\Actions\List_Webhooks;
use Jet_Form_Builder\Gateways\Paypal\Actions\Show_Subscription_Details_Action;
use Jet_Form_Builder\Gateways\Paypal\Actions\Subscribe_Now_Action;
use Jet_Form_Builder\Gateways\Paypal\Events_Listeners_Manager;
use Jet_Form_Builder\Gateways\Paypal\Web_Hooks\Paypal_Subscription_Endpoint;

class Scenario_Subscribe extends Scenario_Base {

	use Scenario_Set_Status_Trait;

	const SLUG = 'SUBSCRIBE_NOW';

	public function rep_item_id() {
		return self::SLUG;
	}

	protected function query_token() {
		return $_GET['subscription_id'] ?? false;
	}

	public function get_failed_statuses() {
		return array( 'CANCELLED', 'EXPIRED' );
	}

	/**
	 * @return mixed
	 * @throws Gateway_Exception
	 */
	public function process_before() {
		return ( new Subscribe_Now_Action() )
			->set_bearer_auth( $this->controller->get_order_token() )
			->set_app_context( array(
				'return_url' => $this->get_success_url(),
				'cancel_url' => $this->get_failed_url()
			) )
			->set_plan_id( 'P-2RW14005CT679391XMFPMEWI' )
			->send_request();
	}

	/**
	 * @return mixed
	 * @throws Gateway_Exception
	 */
	public function process_after() {
		return ( new Show_Subscription_Details_Action() )
			->set_method( 'GET' )
			->set_bearer_auth( $this->controller->get_token() )
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
		if ( $this->controller->get_webhooks() ) {
			return;
		}
		$response = ( new List_Webhooks() )
			->set_bearer_auth( $this->controller->get_token() )
			->send_request();

		if ( ! isset( $response['webhooks'] ) ) {
			throw new Gateway_Exception( 'Can\'t get webhooks list', $response );
		}

		$webhooks = $response['webhooks'] ?? array();
		$endpoint = Paypal_Subscription_Endpoint::rest_url();

		if ( $this->search_webhook_by_url( $webhooks, $endpoint ) ) {
			return;
		}

		$response = ( new Create_Webhook() )
			->set_bearer_auth( $this->controller->get_token() )
			->set_param_url( $endpoint )
			->set_param_event_types( Events_Listeners_Manager::instance()->get_events_types_list() )
			->send_request();

		if ( empty( $response['id'] ) ) {
			throw new Gateway_Exception( 'Can\'t create webhook', $response );
		}

	}

	public function search_webhook_by_url( $webhooks, $endpoint ) {
		foreach ( $webhooks as $webhook ) {
			$url = $webhook['url'] ?? '';

			if ( $url === $endpoint ) {
				return $webhook['id'];
			}
		}

		return false;
	}
}