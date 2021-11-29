<?php


namespace Jet_Form_Builder\Gateways\Paypal\Events_Handlers;


class Billing_Subscription_Cancelled extends Base\Billing_Subscription {

	public static function get_event_type() {
		return 'BILLING.SUBSCRIPTION.CANCELLED';
	}

}
