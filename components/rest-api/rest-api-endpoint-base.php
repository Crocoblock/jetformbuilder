<?php


namespace JFB_Components\Rest_Api;

use JFB_Components\Rest_Api\Traits\Rest_Fetch_Endpoint;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Rest_Api_Endpoint_Base implements Rest_Fetch_Endpoint {

	final public static function get_namespace(): string {
		return 'jet-form-builder/v1';
	}

	abstract public static function get_rest_base();

	abstract public static function get_methods();

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
	public function get_override(): bool {
		return true;
	}

	/**
	 * @return bool
	 */
	public function check_permission(): bool {
		return true;
	}

	public static function rest_url( $scheme = 'rest' ) {
		$rest_base = static::get_rest_base();
		
		// Remove regex patterns for URL generation (WPML compatibility)
		// Replace (?P<name>pattern) with {name} placeholder
		$rest_base = preg_replace( '/\(\?P<([^>]+)>[^)]+\)/', '{$1}', $rest_base );
		
		return rest_url( '/' . static::get_namespace() . '/' . $rest_base, $scheme );
	}

	/**
	 * Implementation of \Jet_Form_Builder\Rest_Api\Traits\Rest_Fetch_Endpoint
	 */

	public function get_rest_url(): string {
		return static::rest_url();
	}

	public function get_rest_methods(): string {
		return static::get_methods();
	}

	public static function get_endpoint(): array {
		return ( new Rest_Endpoint( new static() ) )->to_array();
	}

}
