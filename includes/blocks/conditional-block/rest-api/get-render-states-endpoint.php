<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Rest_Api;


use Jet_Form_Builder\Blocks\Conditional_Block\Render_State;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;

class Get_Render_States_Endpoint extends Rest_Api_Endpoint_Base {

	/**
	 * @return mixed
	 */
	public static function get_rest_base() {
		return 'render-states/list';
	}

	/**
	 * @return mixed
	 */
	public static function get_methods() {
		return \WP_REST_Server::READABLE;
	}

	/**
	 * @param \WP_REST_Request $request
	 *
	 * @return mixed
	 */
	public function run_callback( \WP_REST_Request $request ) {
		$states = Render_State::get_states();

		foreach ( $states as $index => $current ) {
			$states[ $index ]['is_custom'] = true;
		}

		return new \WP_REST_Response(
			array(
				'items' => $states,
			)
		);
	}
}