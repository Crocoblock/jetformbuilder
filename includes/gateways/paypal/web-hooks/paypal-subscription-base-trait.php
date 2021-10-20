<?php


namespace Jet_Form_Builder\Gateways\Paypal\Web_Hooks;


use Jet_Form_Builder\Exceptions\Gateway_Exception;

trait Paypal_Subscription_Base_Trait {

	abstract public function get_token( \WP_REST_Request $request );

	public function get_methods() {
		return \WP_REST_Server::READABLE;
	}

	public function get_callback( \WP_REST_Request $request ) {
		try {
			$token      = $this->get_token( $request );
			$webhook_id = $this->get_webhook_id_by_endpoint( self::get_rest_base(), $token );

		} catch ( Gateway_Exception $exception ) {
			return new \WP_Error(
				'paypal_token_empty',
				$exception->getMessage(),
				array( static::class . '::' . __FUNCTION__ )
			);
		}

		return rest_ensure_response( array( $token ) );
	}

}