<?php


namespace Jet_Form_Builder\Gateways\Paypal\Actions;


class Verify_Webhook_Signature extends Base_Action {

	public function action_slug() {
		return 'VERIFY_WEBHOOK_SIGNATURE';
	}

	public function action_endpoint() {
		return 'v1/notifications/verify-webhook-signature';
	}
}