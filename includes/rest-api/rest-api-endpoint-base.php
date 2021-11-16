<?php


namespace Jet_Form_Builder\Rest_Api;

abstract class Rest_Api_Endpoint_Base {

	public static function get_namespace(): string {
		return 'jet-form-builder/v1';
	}

	abstract public static function get_rest_base();

	abstract static public function get_methods();

	abstract public function run_callback( \WP_REST_Request $request );

	public function get_common_args(): array {
		return array();
	}

	public function get_overridden_args(): array {
		return array();
	}

	/**
	 * @return bool
	 */
	public function get_override() {
		return true;
	}

	/**
	 * @return bool
	 */
	public function check_permission(): bool {
		return true;
	}

	public static function rest_url() {
		return rest_url( '/' . static::get_namespace() . '/' . static::get_rest_base(), 'https' );
	}

}
