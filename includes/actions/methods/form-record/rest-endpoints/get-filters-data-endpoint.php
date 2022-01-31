<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Rest_Endpoints;

use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;


class Get_Filters_Data_Endpoint extends Rest_Api_Endpoint_Base {

	public static function get_rest_base() {
		return 'records-table/get-filters-data';
	}

	public static function get_methods() {
		return \WP_REST_Server::READABLE;
	}

	public function check_permission(): bool {
		return current_user_can( 'manage_options' );
	}

	public function run_callback( \WP_REST_Request $request ) {
		// TODO: Implement run_callback() method.
	}
}