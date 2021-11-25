<?php


namespace Jet_Form_Builder\Gateways\Paypal\Web_Hooks;

use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;
use Jet_Form_Builder\Gateways\Paypal;

class Fetch_Pay_Now_Editor extends Rest_Api_Endpoint_Base {

	public static function get_rest_base() {
		return 'paypal-base-fetch';
	}

	public static function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	public function check_permission(): bool {
		return true;
	}

	public function run_callback( \WP_REST_Request $request ) {
		$credits = $request->get_json_params();

		list( $client_id, $secret ) = array( $credits['client_id'] ?? '', $credits['secret'] ?? '' );

		try {
			Paypal\Controller::get_token_with_credits( $client_id, $secret );

		} catch ( Gateway_Exception $exception ) {
			return new \WP_REST_Response(
				array(
					'message' => $exception->getMessage(),
					'data'    => $exception->get_additional(),
				),
				500
			);
		}

		return new \WP_REST_Response(
			array(
				'message' => __( 'Access key saved successfully', 'jet-form-builder' ),
			)
		);
	}
}
