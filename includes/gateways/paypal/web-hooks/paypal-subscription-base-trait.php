<?php


namespace Jet_Form_Builder\Gateways\Paypal\Web_Hooks;


use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Paypal\Actions\Verify_Webhook_Signature_Action;

trait Paypal_Subscription_Base_Trait {

	abstract public function get_token( \WP_REST_Request $request );

	public function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	public function get_callback( \WP_REST_Request $request ) {
		try {
			$token      = $this->get_token( $request );
			$webhook_id = $this->get_webhook_id_by_endpoint( self::get_rest_base(), $token );

			( new Verify_Webhook_Signature_Action() )
				->set_bearer_auth( $token )
				->set_webhook_id( $webhook_id )
				->set_params_from_request( $request )
				->is_success();

		} catch ( Gateway_Exception $exception ) {
			update_option(
				'rest_api_jfb_test_error',
				wp_json_encode( array(
					date( 'Y-m-d H:i:s', time() + 3 * HOUR_IN_SECONDS ),
					$exception->getMessage(),
					$exception->get_additional()
				) )
			);

			return new \WP_Error(
				'paypal_token_empty',
				$exception->getMessage(),
				array( static::class . '::' . __FUNCTION__ )
			);
		}

		return rest_ensure_response( array( $webhook_id ) );
	}

}