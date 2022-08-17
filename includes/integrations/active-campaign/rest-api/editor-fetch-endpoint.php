<?php


namespace Jet_Form_Builder\Integrations\Active_Campaign\Rest_Api;


use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Integrations\Active_Campaign\Api\Retrieve_Custom_Fields_Action;
use Jet_Form_Builder\Integrations\Active_Campaign\Api\Retrieve_Lists_Action;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;

class Editor_Fetch_Endpoint extends Rest_Api_Endpoint_Base {

	public static function get_rest_base() {
		return 'activecampaign/editor';
	}

	public static function get_methods() {
		return \WP_REST_Server::READABLE;
	}

	public function check_permission(): bool {
		return current_user_can( 'manage_options' );
	}

	public function run_callback( \WP_REST_Request $request ) {
		$token = $request->get_header( 'API-TOKEN' );
		$url   = $request->get_header( 'API-URL' );

		try {
			/** @var Retrieve_Custom_Fields_Action $fields */
			$fields = ( new Retrieve_Custom_Fields_Action() )
				->set_base( $url )
				->set_token( $token )
				->request()
				->check_response_code();

		} catch ( Gateway_Exception $exception ) {
			return new \WP_REST_Response(
				array(
					'message' => $exception->getMessage(),
					'data'    => $exception->get_additional()
				)
			);
		}

		try {
			/** @var Retrieve_Lists_Action $lists */
			$lists = ( new Retrieve_Lists_Action() )
				->set_base( $url )
				->set_token( $token )
				->request()
				->check_response_code();

		} catch ( Gateway_Exception $exception ) {
			return new \WP_REST_Response(
				array(
					'message' => $exception->getMessage(),
					'data'    => $exception->get_additional()
				)
			);
		}

		return new \WP_REST_Response(
			array(
				'fields' => $fields->to_array(),
				'lists'  => $lists->to_array(),
			)
		);
	}
}