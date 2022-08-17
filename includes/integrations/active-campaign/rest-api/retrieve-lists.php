<?php


namespace Jet_Form_Builder\Integrations\Active_Campaign\Rest_Api;


use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Integrations\Active_Campaign\Api\Retrieve_Lists_Action;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;

class Retrieve_Lists extends Rest_Api_Endpoint_Base {

	public static function get_rest_base() {
		return 'activecampaign/lists';
	}

	public static function get_methods() {
		return \WP_REST_Server::READABLE;
	}

	public function run_callback( \WP_REST_Request $request ) {
		$token = $request->get_header( 'API-TOKEN' );
		$url   = $request->get_header( 'API-URL' );

		try {
			/** @var Retrieve_Lists_Action $action */
			$action = ( new Retrieve_Lists_Action() )
				->set_base( $url )
				->set_token( $token )
				->request()
				->check_response_code();

			return new \WP_REST_Response(
				array(
					'lists' => $action->to_array(),
				)
			);
		} catch ( Gateway_Exception $exception ) {
			return new \WP_REST_Response(
				array(
					'message' => $exception->getMessage(),
					'data'    => $exception->get_additional()
				)
			);
		}
	}

}