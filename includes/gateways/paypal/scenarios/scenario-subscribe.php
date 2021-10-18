<?php


namespace Jet_Form_Builder\Gateways\Paypal\Scenarios;


use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Paypal\Actions\Paypal_Create_Webhook;
use Jet_Form_Builder\Gateways\Paypal\Actions\Paypal_Show_Subscription_Details_Action;
use Jet_Form_Builder\Gateways\Paypal\Actions\Paypal_Subscribe_Now_Action;

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
		return ( new Paypal_Subscribe_Now_Action() )
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
		return ( new Paypal_Show_Subscription_Details_Action() )
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
		$webhooks = ( new Paypal_Create_Webhook() )
			->set_bearer_auth( $this->controller->get_token() );

	}
}