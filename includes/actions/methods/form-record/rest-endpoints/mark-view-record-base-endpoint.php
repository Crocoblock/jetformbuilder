<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Rest_Endpoints;

use Jet_Form_Builder\Actions\Methods\Form_Record\Models\Record_Model;
use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_View;
use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_View_Count;
use Jet_Form_Builder\Actions\Methods\Form_Record\Table_Views\Records_Table_View;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;

abstract class Mark_View_Record_Base_Endpoint extends Rest_Api_Endpoint_Base {

	public static function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	public function check_permission(): bool {
		return current_user_can( 'manage_options' );
	}

	abstract protected function is_viewed(): bool;

	public function run_callback( \WP_REST_Request $request ) {
		$body = $request->get_json_params();

		try {
			Record_View::update(
				array( 'is_viewed' => (int) $this->is_viewed() ),
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
					'message' => $exception->getMessage(),
				),
				503
			);
		}

		return new \WP_REST_Response(
			array(
				'message' => __( 'Successfully updated', 'jet-form-builder' ),
				'list'    => ( new Records_Table_View() )->prepare_list(),
			)
		);
	}
}
