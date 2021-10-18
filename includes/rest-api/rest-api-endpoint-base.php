<?php


namespace Jet_Form_Builder\Rest_Api;


abstract class Rest_Api_Endpoint_Base {

	public function get_namespace() {
		return 'jet-form-builder/v1';
	}

	abstract public function get_rest_base();

	abstract public function get_methods();

	public function get_callback( \WP_REST_Request $request ) {
		return array();
	}

	public function get_common_args() {
		return array();
	}

	public function get_overridden_args() {
		return array();
	}

	/**
	 * @return bool
	 */
	public function get_override() {
		return true;
	}

	/**
	 * @return callable
	 */
	public function get_permission_callback() {
		return '__return_true';
	}

}