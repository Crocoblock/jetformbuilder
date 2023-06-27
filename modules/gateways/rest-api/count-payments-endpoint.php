<?php


namespace JFB_Modules\Gateways\Rest_Api;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Db_Queries\Views\View_Base;
use JFB_Components\Rest_Api;
use JFB_Modules\Gateways\Query_Views\Payment_Count_View;

class Count_Payments_Endpoint extends Rest_Api\Rest_Api_Endpoint_Base {

	use Rest_Api\Traits\Paginated_Args;

	public static function get_rest_base() {
		return 'payments/count';
	}

	public static function get_methods() {
		return \WP_REST_Server::READABLE;
	}

	public function run_callback( \WP_REST_Request $request ) {
		$args = View_Base::get_paginated_args( $this->get_paginate_args( $request ) );

		return new \WP_REST_Response(
			array(
				'total' => Payment_Count_View::count( $args ),
			)
		);
	}
}