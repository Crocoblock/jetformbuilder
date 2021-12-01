<?php


namespace Jet_Form_Builder\Gateways\Paypal\Api_Actions;

use Jet_Form_Builder\Gateways\Paypal\Api_Actions\Traits;

class Subscribe_Now_Action extends Base_Action {

	use Traits\App_Context_Trait;

	private $plan_id;

	const SLUG = 'SUBSCRIBE_NOW';

	public function action_slug() {
		return self::SLUG;
	}

	public function action_endpoint() {
		return 'v1/billing/subscriptions';
	}

	public function action_headers() {
		return array(
			'Content-Type' => 'application/json',
		);
	}
}
