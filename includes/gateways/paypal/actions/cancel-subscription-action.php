<?php


namespace Jet_Form_Builder\Gateways\Paypal\Actions;

use Jet_Form_Builder\Gateways\Paypal\Actions\Traits;

class Cancel_Subscription_Action extends Base_Action {

	use Traits\With_Subscription_Id;

	protected $method = \WP_REST_Server::CREATABLE;

	public function action_slug() {
		return 'CANCEL_SUBSCRIPTION';
	}

	public function action_endpoint() {
		return "v1/billing/subscriptions/{$this->get_subscription_id()}/cancel";
	}

	public function accept_code(): int {
		return self::CODE_NO_CONTENT;
	}

}