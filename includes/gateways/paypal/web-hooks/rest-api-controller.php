<?php

namespace Jet_Form_Builder\Gateways\Paypal\Web_Hooks;

use Jet_Form_Builder\Rest_Api\Rest_Api_Controller_Base;

class Rest_Api_Controller extends Rest_Api_Controller_Base {

	public function routes(): array {
		return apply_filters(
			'jet-form-builder/gateways/paypal/rest-api-endpoints',
			array(
				new Event_Subscription_Form_Id_Endpoint(),
				new Event_Subscription_Global_Endpoint(),
				new Action_Cancel_Subscription(),
				new Action_Suspend_Subscription(),
				new Fetch_Pay_Now_Editor(),
				new Fetch_Subscribe_Now_Editor(),
				new Action_Refund_Recurring_Payment(),
				new Receive_Admin_Subscription_Details(),
				new Add_Subscription_Note(),
			)
		);
	}
}
