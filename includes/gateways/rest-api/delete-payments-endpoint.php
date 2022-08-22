<?php


namespace Jet_Form_Builder\Gateways\Rest_Api;


use Jet_Form_Builder\Db_Queries\Views\View_Base;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Query_Views\Payment_Count_View;
use Jet_Form_Builder\Gateways\Query_Views\Payment_View;
use Jet_Form_Builder\Gateways\Table_Views\Payments;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;
use Jet_Form_Builder\Rest_Api\Traits\Paginated_Args;

class Delete_Payments_Endpoint extends Rest_Api_Endpoint_Base {

	use Paginated_Args;

	public static function get_rest_base() {
		return 'payments/delete';
	}

	public static function get_methods() {
		return \WP_REST_Server::DELETABLE;
	}

	public function check_permission(): bool {
		return current_user_can( 'manage_options' );
	}

	public function run_callback( \WP_REST_Request $request ) {
		$body = $request->get_json_params();
		$view = new Payments();

		$args = View_Base::get_paginated_args( $this->get_paginate_args( $request ) );

		try {
			Payment_View::delete(
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

		return new \WP_REST_Response(
			array(
				'message' => __( 'Successfully removed', 'jet-form-builder' ),
				'list'    => $view->prepare_list( $list ),
				'total'   => Payment_Count_View::count( $args ),
			)
		);
	}
}