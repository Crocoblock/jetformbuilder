<?php


namespace Jet_Form_Builder\Gateways\Paypal\Actions;


use Jet_Form_Builder\Exceptions\Gateway_Exception;

class Paypal_Capture_Subscribe_Action extends Paypal_Base_Action {

	use Paypal_App_Context_Trait;

	private $plan_id;
	private $subscription_id;

	public function action_slug() {
		return 'CAPTURE_SUBSCRIPTION';
	}

	public function action_endpoint() {
		return "v1/billing/subscriptions/{$this->get_subscription_id()}/capture";
	}

	public function action_headers() {
		return array();
	}

	public function action_body() {
		return array();
	}
	

	public function set_subscription_id( $subscription_id ) {
		$this->subscription_id = $subscription_id;

		return $this;
	}

	public function get_subscription_id() {
		return $this->subscription_id;
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function before_make_request() {
		if ( ! $this->get_subscription_id() || ! $this->get_plan_id() ) {
			throw new Gateway_Exception( 'order_id is not set.' );
		}
	}
}