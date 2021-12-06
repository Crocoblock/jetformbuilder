<?php


namespace Jet_Form_Builder\Gateways\Paypal\Api_Actions;

use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Paypal\Api_Actions\Traits;

class Show_Plan_Details_Action extends Base_Action {

	protected $method = 'GET';

	public function action_slug() {
		return 'SHOW_PLAN_DETAILS';
	}

	public function action_endpoint() {
		return 'v1/billing/plans/{plan_id}';
	}

	public function action_headers() {
		return array(
			'Content-Type' => 'application/json',
		);
	}
}
