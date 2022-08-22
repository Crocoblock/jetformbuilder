<?php

namespace Jet_Form_Builder\Gateways\Rest_Api;

use Jet_Form_Builder\Gateways\Paypal\Rest_Endpoints\Fetch_Pay_Now_Editor;
use Jet_Form_Builder\Rest_Api\Rest_Api_Controller_Base;

class Rest_Api_Controller extends Rest_Api_Controller_Base {

	public function routes(): array {
		return array(
			new Fetch_Pay_Now_Editor(),
			new Receive_Payments(),
			new Delete_Payment_Endpoint(),
		);
	}
}
