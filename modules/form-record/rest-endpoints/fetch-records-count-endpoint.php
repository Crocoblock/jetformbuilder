<?php


namespace JFB_Modules\Form_Record\Rest_Endpoints;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Db_Queries\Views\View_Base;
use JFB_Components\Rest_Api;
use JFB_Components\Rest_Api\Rest_Api_Endpoint_Base;
use JFB_Modules\Form_Record\Query_Views\Record_View_Count;

class Fetch_Records_Count_Endpoint extends Rest_Api_Endpoint_Base {

	use Rest_Api\Traits\Paginated_Args;

	public static function get_rest_base() {
		return 'records/count';
	}

	public static function get_methods() {
		return \WP_REST_Server::READABLE;
	}

	public function check_permission(): bool {
		return current_user_can( 'manage_options' );
	}

	public function run_callback( \WP_REST_Request $request ) {
		$args = View_Base::get_paginated_args( $this->get_paginate_args( $request ) );

		return new \WP_REST_Response(
			array(
				'total' => Record_View_Count::count( $args ),
			)
		);
	}
}
