<?php


namespace Jet_Form_Builder\Blocks\Ssr_Validation;


use Jet_Form_Builder\Blocks\Validation;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;

class Rest_Validation_Endpoint extends Rest_Api_Endpoint_Base {

	public static function get_rest_base() {
		return 'validate-field';
	}

	public static function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	public function run_callback( \WP_REST_Request $request ) {
		$body     = $request->get_json_params();
		$value    = $body['current'] ?? false;
		$callback = $body['callback'] ?? false;

		if ( false === $value || false === $callback ) {
			return new \WP_REST_Response(
				array(
					'message' => __( 'Field value or callback is empty', 'jet-form-builder' ),
				),
				400
			);
		}

		$result = Validation::instance()->callbacks->validate( $value, $callback );

		return new \WP_REST_Response(
			array(
				'result' => $result
			),
			200
		);
	}
}