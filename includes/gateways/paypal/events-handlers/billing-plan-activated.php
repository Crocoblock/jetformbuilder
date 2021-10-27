<?php


namespace Jet_Form_Builder\Gateways\Paypal\Events_Handlers;

class Billing_Plan_Activated extends Event_Handler_Base {

	public static function get_event_type() {
		return 'BILLING.PLAN.ACTIVATED';
	}

}
