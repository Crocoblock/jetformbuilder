<?php


namespace JFB_Modules\Ai\Rest_Api\Endpoints;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Classes\Http\Http_Tools;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use JFB_Components\Rest_Api\Rest_Api_Endpoint_Base;
use JFB_Modules\Ai\External_Api\Generate_Form_Action;

class Generate_Form_Endpoint extends Rest_Api_Endpoint_Base {

	public static function get_rest_base() {
		return 'ai/generate';
	}

	public static function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	public function run_callback( \WP_REST_Request $request ) {
		$action = new Generate_Form_Action();
		$action->set_prompt(
			$request->get_param( 'prompt' )
		);
		$action->set_license( $this->get_license() );

		try {
			$response = $action->send_request();
		} catch ( Gateway_Exception $exception ) {
			return new \WP_REST_Response(
				array(
					'message' => $exception->getMessage(),
					'data'    => $exception->get_additional(),
				),
				400
			);
		}

		if ( empty( $response['success'] ) || empty( $response['data']['completion'] ) ) {
			return new \WP_REST_Response(
				array(
					'message' => $response['data'] ?? __( 'Something went wrong', 'jet-form-builder' ),
					'data'    => $response,
				),
				400
			);
		}

		return new \WP_REST_Response(
			array(
				'form'  => $response['data']['completion'],
				'usage' => $response['data']['usage'],
				'limit' => $response['data']['limit'],
			)
		);
	}

	private function get_license(): string {
		$server_ip = Http_Tools::get_server_ip_address();

		// Define local IP address ranges
		$local_ip_ranges = array(
			'127.',       // Loopback
			'192.168.',   // Private network
			'10.',        // Private network
		);

		// Check if the server IP is within any of the local ranges
		foreach ( $local_ip_ranges as $range ) {
			if ( 0 === strpos( $server_ip, $range ) ) {
				return md5( $server_ip . site_url() ); // It's a local IP address
			}
		}

		return md5( $server_ip ); // It's not a local IP address
	}
}
