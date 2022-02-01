<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Rest_Endpoints;

use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;


class Fetch_Filters_Endpoint extends Rest_Api_Endpoint_Base {

	public static function get_rest_base() {
		return 'records-table/fetch-filters';
	}

	public static function get_methods() {
		return \WP_REST_Server::READABLE;
	}

	public function check_permission(): bool {
		return current_user_can( 'manage_options' );
	}

	public function run_callback( \WP_REST_Request $request ) {
		$forms = Tools::get_forms_list_for_js();
		$users = Tools::prepare_list_for_js(
			get_users( array(
				'number' => - 1,
				'fields' => array( 'ID', 'display_name' )
			) ),
			'ID',
			'display_name'
		);

		return new \WP_REST_Response(
			array(
				'filters' => array(
					'form' => array(
						'options' => $forms,
					),
					'user' => array(
						'options' => $users,
					),
				)
			)
		);
	}
}