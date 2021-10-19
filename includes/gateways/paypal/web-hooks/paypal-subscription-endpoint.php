<?php

namespace Jet_Form_Builder\Gateways\Paypal\Web_Hooks;

use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;

class Paypal_Subscription_Endpoint extends Rest_Api_Endpoint_Base {

	public static function get_rest_base() {
		return 'paypal-subscription';
	}

	public function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	public function get_callback( \WP_REST_Request $request ) {
		update_option(
			'rest_api_jfb_test',
			wp_json_encode(
				array( date( 'Y-m-d H:i:s', time() + 3 * HOUR_IN_SECONDS ), $_POST )
			)
		);

		return rest_ensure_response( array() );
	}
}