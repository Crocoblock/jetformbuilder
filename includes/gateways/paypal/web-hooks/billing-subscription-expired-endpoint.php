<?php

namespace Jet_Form_Builder\Gateways\Paypal\Web_Hooks;

use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;

class Billing_Subscription_Expired_Endpoint extends Rest_Api_Endpoint_Base {

	public function get_rest_base() {
		return 'billing-subscription-expired-endpoint';
	}

	public function get_methods() {
		return 'GET';
	}

	public function get_callback( \WP_REST_Request $request ) {
		return (array) $request;
	}
}