<?php

namespace Jet_Form_Builder\Gateways\Paypal\Web_Hooks;

use Jet_Form_Builder\Rest_Api\Rest_Api_Controller_Base;

class Rest_Api_Controller extends Rest_Api_Controller_Base {

	public function routes() {
		return array(
			new Paypal_Subscription_Form_Id_Endpoint(),
			new Paypal_Subscription_Global_Endpoint(),
		);
	}
}
