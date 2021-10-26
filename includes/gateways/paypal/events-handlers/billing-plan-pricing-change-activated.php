<?php


namespace Jet_Form_Builder\Gateways\Paypal\Events_Handlers;

class Billing_Plan_Pricing_Change_Activated extends Event_Handler_Base {

	public function get_event_type() {
		return 'BILLING.PLAN.PRICING-CHANGE.ACTIVATED';
	}

}
