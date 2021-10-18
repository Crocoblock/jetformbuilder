<?php


namespace Jet_Form_Builder\Gateways\Paypal\Actions;


class Paypal_Create_Webhook extends Paypal_Base_Action {

	public function action_slug() {
		return 'CREATE_WEBHOOK';
	}

	public function action_endpoint() {
		return 'v1/notifications/webhooks';
	}

	public function action_headers() {
		return array();
	}

	public function action_body() {
		return array();
	}
}