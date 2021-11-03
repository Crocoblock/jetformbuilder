<?php


namespace Jet_Form_Builder\Gateways\Paypal\Events_Handlers;

class Billing_Subscription_Activated extends Base\Event_Handler_Base {

	public static function get_event_type() {
		return 'BILLING.SUBSCRIPTION.ACTIVATED';
	}
}
