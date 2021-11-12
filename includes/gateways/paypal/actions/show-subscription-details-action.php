<?php


namespace Jet_Form_Builder\Gateways\Paypal\Actions;

use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Paypal\Actions\Traits;

class Show_Subscription_Details_Action extends Base_Action {

	protected $method = 'GET';

	use Traits\With_Subscription_Id;

	public function action_slug() {
		return 'SHOW_SUBSCRIPTION_DETAILS';
	}

	public function action_endpoint() {
		return "v1/billing/subscriptions/{$this->get_subscription_id()}";
	}

	public function action_headers() {
		return array(
			'Content-Type' => 'application/json',
		);
	}
}
