<?php


namespace Jet_Form_Builder\Gateways\Paypal\Actions;

class List_Webhooks extends Base_Action {

	protected $method = 'GET';

	public function action_slug() {
		return 'LIST_WEBHOOKS';
	}

	public function action_endpoint() {
		return 'v1/notifications/webhooks';
	}


}
