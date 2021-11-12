<?php


namespace Jet_Form_Builder\Gateways\Paypal\Actions;

use Jet_Form_Builder\Gateways\Paypal\Actions\Traits;

class Suspend_Subscription_Action extends Base_Action {

	use Traits\With_Subscription_Id;

	protected $method = \WP_REST_Server::CREATABLE;

	public function action_slug() {
		return 'SUSPEND_SUBSCRIPTION';
	}

	public function action_endpoint() {
		return "v1/billing/subscriptions/{$this->get_subscription_id()}/suspend";
	}

	public function action_headers() {
		return array(
			'Content-Type' => 'application/json',
		);
	}

	public function accept_code(): int {
		return self::CODE_NO_CONTENT;
	}

}