<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Rest_Api;

use Jet_Form_Builder\Blocks\Conditional_Block\Render_State;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;

class Delete_Render_States_Endpoint extends Rest_Api_Endpoint_Base {

	/**
	 * @return mixed
	 */
	public static function get_rest_base() {
		return 'render-states/delete';
	}

	/**
	 * @return mixed
	 */
	public static function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	public function check_permission(): bool {
		return current_user_can( 'manage_options' );
	}

	/**
	 * @param \WP_REST_Request $request
	 *
	 * @return mixed
	 */
	public function run_callback( \WP_REST_Request $request ) {
		$states           = Render_State::get_states();
		$success_response = new \WP_REST_Response(
			array(
				'message' => __( 'Successfully deleted', 'jet-form-builder' ),
			)
		);

		if ( ! count( $states ) ) {
			return $success_response;
		}

		$body      = $request->get_json_params();
		$to_delete = $body['list'] ?? array();

		foreach ( $states as $index => $current ) {
			if ( ! in_array( $current['value'], $to_delete, true ) ) {
				continue;
			}
			unset( $states[ $index ] );
		}

		Render_State::update_states( array_values( $states ) );

		return $success_response;
	}
}
