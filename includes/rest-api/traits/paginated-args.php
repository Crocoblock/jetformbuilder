<?php


namespace Jet_Form_Builder\Rest_Api\Traits;

use Jet_Form_Builder\Db_Queries\Views\View_Base;

trait Paginated_Args {

	protected function get_paginate_args( \WP_REST_Request $request ) {
		$body = $request->get_query_params();

		return array(
			'limit'   => (int) ( $body['limit'] ?? 5 ),
			'sort'    => $body['sort'] ?? View_Base::FROM_HIGH_TO_LOW,
			'page'    => (int) ( $body['page'] ?? 1 ),
			'filters' => $body['filters'] ?? array()
		);
	}

}