<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Rest_Endpoints;

use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_View_Count;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\Table_Views\Records_Table_View;
use Jet_Form_Builder\Db_Queries\Views\View_Base;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;
use Jet_Form_Builder\Rest_Api\Traits;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Fetch_Records_Page_Endpoint extends Rest_Api_Endpoint_Base {

	use Traits\Paginated_Args;

	public static function get_rest_base() {
		return 'records/fetch-page';
	}

	public static function get_methods() {
		return \WP_REST_Server::READABLE;
	}

	public function check_permission(): bool {
		return current_user_can( 'manage_options' );
	}

	public function run_callback( \WP_REST_Request $request ) {
		$view = new Records_Table_View();
		$args = View_Base::get_paginated_args( $this->get_paginate_args( $request ) );

		$records = $view->get_raw_list( $args );

		if ( ! $records ) {
			return new \WP_REST_Response(
				array(
					'message' => __( 'Records not found', 'jet-form-builder' ),
				),
				404
			);
		}

		return new \WP_REST_Response(
			array(
				'list'  => $view->prepare_list( $records ),
				'total' => Record_View_Count::count( $args ),
			)
		);
	}
}