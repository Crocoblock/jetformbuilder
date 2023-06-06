<?php

namespace JFB_Modules\Gateways\Rest_Api;

use JFB_Modules\Gateways\Paypal\Rest_Endpoints\Fetch_Pay_Now_Editor;
use JFB_Components\Rest_Api\Rest_Api_Controller_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Rest_Api_Controller extends Rest_Api_Controller_Base {

	public function routes(): array {
		return array(
			new Fetch_Pay_Now_Editor(),
			new Receive_Payments(),
			new Delete_Payments_Endpoint(),
			new Delete_Payment_Endpoint(),
		);
	}
}
