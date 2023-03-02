<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Rest_Endpoints;

use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_View;
use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_View_Count;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\Table_Views\Records_Table_View;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Db_Queries\Views\View_Base;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;
use Jet_Form_Builder\Rest_Api\Traits;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Mark_View_Record_Base_Endpoint extends Rest_Api_Endpoint_Base {

	use Traits\Paginated_Args;

	public static function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	public function check_permission(): bool {
		return current_user_can( 'manage_options' );
	}

	abstract protected function is_viewed(): bool;

	public function run_callback( \WP_REST_Request $request ) {
		$body = $request->get_json_params();
		$view = new Records_Table_View();

		$args = View_Base::get_paginated_args( $this->get_paginate_args( $request ) );

		$where = array(
			array(
				'type'   => 'in',
				'values' => array( 'id', $body['checked'] ?? array() ),
			),
		);

		try {
			Record_View::update(
				array( 'is_viewed' => (int) $this->is_viewed() ),
				$where
			);
		} catch ( Sql_Exception $exception ) {
			if ( ! $this->check_is_updated( $where ) ) {
				return new \WP_REST_Response(
					array(
						'message' => $exception->getMessage(),
						'data'    => $exception->get_additional(),
					),
					503
				);
			}
		}
		$list = $view->get_raw_list( $args );

		return new \WP_REST_Response(
			array(
				'message' => __( 'Successfully updated!', 'jet-form-builder' ),
				'list'    => $view->prepare_list( $list ),
				'total'   => Record_View_Count::count( $args ),
			)
		);
	}

	/**
	 * Return true if rows was updated successfully
	 *
	 * @param $where
	 *
	 * @return bool
	 */
	private function check_is_updated( $where ): bool {
		$where = array_merge(
			array(
				'is_viewed' => (int) ( ! $this->is_viewed() ),
			),
			$where
		);

		try {
			Record_View::find( $where )->query()->query_all();
		} catch ( Query_Builder_Exception $exception ) {
			return true;
		}

		return false;
	}
}
