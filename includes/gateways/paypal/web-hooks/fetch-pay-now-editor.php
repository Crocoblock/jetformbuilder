<?php


namespace Jet_Form_Builder\Gateways\Paypal\Web_Hooks;


use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;

class Fetch_Pay_Now_Editor extends Rest_Api_Endpoint_Base {

	public static function get_rest_base() {
		// TODO: Implement get_rest_base() method.
	}

	static public function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	public function check_permission(): bool {
		return true;
	}

	public function run_callback( \WP_REST_Request $request ) {
		// TODO: Implement run_callback() method.
	}
}