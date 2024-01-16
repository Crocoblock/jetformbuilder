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
		$action->set_license(
			md5( Http_Tools::get_server_ip_address() )
		);

		/**
		 * @TODO remove this before 3.3.0 release
		 *
		 * Use this only for tests
		 */
		if ( '#fake-ai' === $action->get_prompt() ) {
			return new \WP_REST_Response(
				array(
					'form' => '<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required=""><br><br>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required=""><br><br>
  
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required=""><br><br>
  
  <input type="submit" value="Register">
</form>',
				)
			);
		}

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
					'message' => $response['data']['data'] ?? __( 'Something went wrong', 'jet-form-builder' ),
					'data'    => $response,
				),
				400
			);
		}

		return new \WP_REST_Response(
			array(
				'form' => $response['data']['completion'],
			)
		);
	}
}
