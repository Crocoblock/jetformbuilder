<?php

namespace Jet_Form_Builder\Gateways\Paypal\Web_Hooks;

use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;
use Jet_Form_Builder\Gateways\Paypal;

class Paypal_Subscription_Endpoint extends Rest_Api_Endpoint_Base {

	public static function get_rest_base() {
		return 'paypal-subscription';
	}

	public function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	public function get_callback( \WP_REST_Request $request ) {
		$credits = Paypal\Controller::get_credentials();

		$secret    = $credits['secret'] ?? false;
		$client_id = $credits['client_id'] ?? false;


		return rest_ensure_response( array() );
	}
}