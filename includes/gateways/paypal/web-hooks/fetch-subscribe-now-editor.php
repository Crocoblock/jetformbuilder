<?php


namespace Jet_Form_Builder\Gateways\Paypal\Web_Hooks;

use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Paypal\Actions\List_Subscription_Plans;

class Fetch_Subscribe_Now_Editor extends Fetch_Pay_Now_Editor {

	public static function get_rest_base() {
		return 'paypal-subscribe-now-fetch';
	}

	public function run_callback( \WP_REST_Request $request ) {

		try {
			$token = $this->get_token( $request );

			$action = ( new List_Subscription_Plans() )
				->set_bearer_auth( $token );

			$response = $action->get_plans_as_list();

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
				'message' => __( 'Access key saved successfully!', 'jet-form-builder' ),
				'data'    => $response,
			)
		);
	}

}
