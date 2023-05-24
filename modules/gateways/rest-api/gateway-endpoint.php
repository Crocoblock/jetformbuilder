<?php


namespace JFB_Modules\Gateways\Rest_Api;

use Jet_Form_Builder\Rest_Api\Dynamic_Rest_Url_Trait;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Gateway_Endpoint extends Rest_Api_Endpoint_Base {

	use Dynamic_Rest_Url_Trait;

	abstract public static function gateway_rest_base(): string;

	abstract public static function gateway_id(): string;

	public static function get_rest_base() {
		return '(?P<gateway>[\w\-]+)/' . static::gateway_rest_base();
	}

	public function get_common_args(): array {
		return array(
			'gateway' => array(
				'validate_callback' => function ( $param, $request, $key ) {
					return static::gateway_id() === $param;
				},
			),
		);
	}

}
