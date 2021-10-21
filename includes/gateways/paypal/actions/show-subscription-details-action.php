<?php


namespace Jet_Form_Builder\Gateways\Paypal\Actions;


use Jet_Form_Builder\Exceptions\Gateway_Exception;

class Show_Subscription_Details_Action extends Base_Action {

	protected $method = 'GET';
	private $subscription_id;

	public function action_slug() {
		return 'SHOW_SUBSCRIPTION_DETAILS';
	}

	public function action_endpoint() {
		return "v1/billing/subscriptions/{$this->get_subscription_id()}";
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
		if ( ! $this->get_subscription_id() ) {
			throw new Gateway_Exception( '`subscription_id` is not set.' );
		}
	}
}