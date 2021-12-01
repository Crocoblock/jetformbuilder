<?php


namespace Jet_Form_Builder\Gateways\Paypal\Api_Actions;

class List_Webhooks extends Base_Action {

	protected $method = 'GET';

	public function action_slug() {
		return 'LIST_WEBHOOKS';
	}

	public function action_endpoint() {
		return 'v1/notifications/webhooks';
	}

	public function action_headers() {
		return array(
			'Content-Type' => 'application/json',
		);
	}


}
