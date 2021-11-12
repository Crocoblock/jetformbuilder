<?php


namespace Jet_Form_Builder\Gateways\Paypal\Actions;

use Jet_Form_Builder\Gateways\Paypal\Actions\Traits;

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

	public function action_body() {
		return array(
			'plan_id'             => $this->get_plan_id(),
			'application_context' => $this->get_app_context(),
		);
	}

	public function set_plan_id( $plan_id ) {
		$this->plan_id = $plan_id;

		return $this;
	}

	public function get_plan_id() {
		return $this->plan_id;
	}
}
