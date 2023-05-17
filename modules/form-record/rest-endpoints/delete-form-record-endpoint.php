<?php


namespace JFB_Modules\Form_Record\Rest_Endpoints;

use JFB_Modules\Form_Record\Query_Views\Record_View;
use JFB_Modules\Form_Record\Query_Views\Record_View_Count;
use JFB_Modules\Form_Record\Admin\Table_Views\Records_Table_View;
use Jet_Form_Builder\Db_Queries\Views\View_Base;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;
use Jet_Form_Builder\Rest_Api\Traits;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Delete_Form_Record_Endpoint extends Rest_Api_Endpoint_Base {

	use Traits\Paginated_Args;

	public static function get_rest_base() {
		return 'records-table/delete';
	}

	public static function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	public function check_permission(): bool {
		return current_user_can( 'manage_options' );
	}

	public function run_callback( \WP_REST_Request $request ) {
		$body = $request->get_json_params();
		$view = new Records_Table_View();

		$args = View_Base::get_paginated_args( $this->get_paginate_args( $request ) );

		try {
			Record_View::delete(
				array(
					array(
						'type'   => 'in',
						'values' => array( 'id', $body['checked'] ?? array() ),
					),
				)
			);
		} catch ( Query_Builder_Exception $exception ) {
			return new \WP_REST_Response(
				array(
					'message' => __( 'Something went wrong on delete.', 'jet-form-builder' ),
				),
				503
			);
		}
		$list = $view->get_raw_list( $args );

		// Record_Model::
		return new \WP_REST_Response(
			array(
				'message' => __( 'Successfully removed', 'jet-form-builder' ),
				'list'    => $view->prepare_list( $list ),
				'total'   => Record_View_Count::count( $args ),
			)
		);
	}
}
