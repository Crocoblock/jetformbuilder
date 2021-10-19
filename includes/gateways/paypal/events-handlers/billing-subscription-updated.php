<?php


namespace Jet_Form_Builder\Gateways\Paypal\Events_Handlers;


class Billing_Subscription_Updated extends Event_Handler_Base {

	public function get_event_type() {
		return 'BILLING.SUBSCRIPTION.UPDATED';
	}

	public function on_catch_event() {
		// TODO: Implement on_catch_event() method.
	}
}