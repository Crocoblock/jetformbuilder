<?php


namespace Jet_Form_Builder\Gateways\Paypal\Web_Hooks;

use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Paypal\Actions\Cancel_Subscription_Action;
use Jet_Form_Builder\Rest_Api\Dynamic_Rest_Url_Trait;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;
use Jet_Form_Builder\Gateways\Paypal;

class Action_Cancel_Subscription extends Rest_Api_Endpoint_Base {

	use Dynamic_Rest_Url_Trait;

	public static function get_rest_static_base() {
		return 'action-subscription/cancel/';
	}

	public static function get_rest_dynamic_base() {
		return '(?P<code>[\w\-]+)';
	}

	public static function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	public function run_callback( \WP_REST_Request $request ) {
		$body = $request->get_json_params();

		try {
			$action = ( new Cancel_Subscription_Action() )
				->set_bearer_auth( Paypal\Controller::get_token_by_form_id( $body['form_id'] ?? false ) )
				->set_body(
					array(
						'reason' => $body['reason'],
					)
				)
				->set_subscription_id( $request->get_param( 'code' ) )
				->request()
				->check_response_code();

		} catch ( Gateway_Exception $exception ) {
			return new \WP_REST_Response(
				array(
					'message' => $exception->getMessage(),
					'data'    => $exception->get_additional(),
				),
				500
			);
		}

		return new \WP_REST_Response(
			array(
				'message' => $action->response_message(
					__( 'Successfully cancelled subscription!', 'jet-form-builder' )
				),
			)
		);
	}
}
