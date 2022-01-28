<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Rest_Endpoints;

use Jet_Form_Builder\Actions\Methods\Form_Record\Models\Record_Model;
use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Form_Record_View;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Rest_Api\Dynamic_Rest_Url_Trait;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;

class Delete_Form_Record_Endpoint extends Rest_Api_Endpoint_Base {

	use Dynamic_Rest_Url_Trait;

	public static function get_rest_base() {
		return 'form-record/delete/(?P<id>[\d]+)/';
	}

	public static function get_methods() {
		return \WP_REST_Server::DELETABLE;
	}

	public function run_callback( \WP_REST_Request $request ) {
		$record_id = $request->get_param( 'id' );

		try {
			Form_Record_View::findById( $record_id );
		} catch ( Query_Builder_Exception $exception ) {
			return new \WP_REST_Response(
				array(
					'message' => $exception->getMessage(),
					'data'    => $record_id,
				),
				404
			);
		}

		//Record_Model::
	}
}
