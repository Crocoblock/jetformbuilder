<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Rest_Endpoints;

use Jet_Form_Builder\Actions\Methods\Form_Record\Models\Record_Model;
use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_View;
use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_View_Count;
use Jet_Form_Builder\Actions\Methods\Form_Record\Table_Views\Records_Table_View;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Rest_Api\Dynamic_Rest_Url_Trait;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;

class Delete_Form_Record_Endpoint extends Rest_Api_Endpoint_Base {

	public static function get_rest_base() {
		return 'form-record/delete';
	}

	public static function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	public function run_callback( \WP_REST_Request $request ) {
		$body = $request->get_json_params();

		try {
			Record_View::delete( array(
				'type'   => 'in',
				'values' => array( 'id', $body['checked'] ?? array() )
			) );
		} catch ( Query_Builder_Exception $exception ) {
			return new \WP_REST_Response(
				array(
					'message' => __( 'Something went wrong on delete.', 'jet-form-builder' )
				),
				503
			);
		}

		//Record_Model::
		return new \WP_REST_Response(
			array(
				'message' => __( 'Successfully removed', 'jet-form-builder' ),
				'list'    => ( new Records_Table_View )->get_list(),
				'total'   => Record_View_Count::count()
			)
		);
	}
}
