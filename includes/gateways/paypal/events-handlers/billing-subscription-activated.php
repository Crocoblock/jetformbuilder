<?php


namespace Jet_Form_Builder\Gateways\Paypal\Events_Handlers;

class Billing_Subscription_Activated extends Base\Billing_Subscription_Change {

	public static function get_event_type() {
		return 'BILLING.SUBSCRIPTION.ACTIVATED';
	}
}
