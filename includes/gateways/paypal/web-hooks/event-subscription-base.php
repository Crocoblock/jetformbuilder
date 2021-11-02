<?php


namespace Jet_Form_Builder\Gateways\Paypal\Web_Hooks;

use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Gateways\Paypal\Actions\Verify_Webhook_Signature_Action;
use Jet_Form_Builder\Gateways\Paypal\Events_Listeners_Manager;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;
use Jet_Form_Builder\Gateways\Paypal;

abstract class Event_Subscription_Base extends  Rest_Api_Endpoint_Base {

	use Paypal\Actions\Traits\List_Webhook_Trait;

	abstract public function get_token( \WP_REST_Request $request );

	public static function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	public function run_callback( \WP_REST_Request $request ) {
		try {
			$token         = $this->get_token( $request );
			$webhook_id    = $this->get_webhook_id_by_endpoint( static::get_rest_base(), $token );
			$webhook_event = $request->get_json_params();

			( new Verify_Webhook_Signature_Action() )
				->set_bearer_auth( $token )
				->set_webhook_id( $webhook_id )
				->set_webhook_event( $webhook_event )
				->set_params_from_request( $request )
				->is_success();

			$this->run_event( $webhook_event );

		} catch ( Gateway_Exception $exception ) {
			update_option(
				'rest_api_jfb_test_error',
				wp_json_encode(
					array(
						date( 'Y-m-d H:i:s', time() + 3 * HOUR_IN_SECONDS ),
						$exception->getMessage(),
						$exception->get_additional(),
					)
				)
			);

			return new \WP_Error(
				'paypal_token_empty',
				$exception->getMessage(),
				array( static::class . '::' . __FUNCTION__ )
			);
		}

		return rest_ensure_response( true );
	}

	/**
	 * @param $webhook_event
	 *
	 * @throws Gateway_Exception
	 */
	private function run_event( $webhook_event ) {
		$event_type = $webhook_event['event_type'] ?? false;

		try {
			Events_Listeners_Manager::instance()->get_event( $event_type )->on_catch_event( $webhook_event );
		} catch ( Repository_Exception $exception ) {
			throw new Gateway_Exception(
				"Undefined event type: $event_type",
				Events_Listeners_Manager::instance()->get_events_types_list()
			);
		}
	}

}
