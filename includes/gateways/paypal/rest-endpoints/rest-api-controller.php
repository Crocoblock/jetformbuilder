<?php

namespace Jet_Form_Builder\Gateways\Paypal\Web_Hooks;

use Jet_Form_Builder\Rest_Api\Rest_Api_Controller_Base;

class Rest_Api_Controller extends Rest_Api_Controller_Base {

	public function routes(): array {
		return apply_filters(
			'jet-form-builder/gateways/paypal/rest-api-endpoints',
			array(
				new Fetch_Pay_Now_Editor(),
			)
		);
	}
}
