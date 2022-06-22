<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Rest_Api;


use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;

class Add_Render_State_Endpoint_Option extends Rest_Api_Endpoint_Base {

	/**
	 * @return mixed
	 */
	public static function get_rest_base() {
		return 'render-states/add/option';
	}

	/**
	 * @return mixed
	 */
	public static function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	/**
	 * @param \WP_REST_Request $request
	 *
	 * @return mixed
	 */
	public function run_callback( \WP_REST_Request $request ) {
	}
}