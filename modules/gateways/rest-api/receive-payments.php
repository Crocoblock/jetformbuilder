<?php


namespace JFB_Modules\Gateways\Rest_Api;

use Jet_Form_Builder\Db_Queries\Views\View_Base;
use JFB_Components\Rest_Api;
use JFB_Modules\Gateways\Table_Views;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Receive_Payments extends Rest_Api\Rest_Api_Endpoint_Base {

	use Rest_Api\Traits\Paginated_Args;

	public static function get_rest_base() {
		return 'payments';
	}

	public static function get_methods() {
		return \WP_REST_Server::READABLE;
	}

	public function check_permission(): bool {
		return current_user_can( 'manage_options' );
	}

	public function get_table_view() {
		return new Table_Views\Payments();
	}

	public function run_callback( \WP_REST_Request $request ) {
		$view = $this->get_table_view();
		$args = View_Base::get_paginated_args( $this->get_paginate_args( $request ) );

		$payments = $view->get_raw_list( $args );

		if ( ! $payments ) {
			return new \WP_REST_Response(
				array(
					'message' => __( 'Payments not found', 'jet-form-builder' ),
				),
				404
			);
		}

		return new \WP_REST_Response(
			array(
				'list' => $view->prepare_list( $payments ),
			)
		);
	}
}
