<?php


namespace Jet_Form_Builder\Gateways\Paypal\Web_Hooks\Base;

use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Gateways\Paypal\Actions\Verify_Webhook_Signature_Action;
use Jet_Form_Builder\Gateways\Paypal\Events_Listeners_Manager;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;
use Jet_Form_Builder\Gateways\Paypal;

abstract class Event_Subscription_Base extends Rest_Api_Endpoint_Base {

	use Paypal\Actions\Traits\List_Webhook_Trait;

	abstract public function get_token( \WP_REST_Request $request );

	public static function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	public function run_callback( \WP_REST_Request $request ) {
		try {
			$token      = $this->get_token( $request );
			$webhook_id = $this->get_webhook_id_by_endpoint( static::get_rest_base(), $token );

			( new Verify_Webhook_Signature_Action() )
				->set_bearer_auth( $token )
				->set_params_from_request( $request )
				->set_webhook_id( $webhook_id )
				->set_webhook_event( file_get_contents('php://input') )
				->is_success();

			return $this->run_event( $request->get_json_params() );

		} catch ( Gateway_Exception $exception ) {
			return new \WP_REST_Response(
				$exception->getMessage(),
				503,
				array(
					'X-JFB-Paypal-Webhook-Message' => $exception->getMessage(),
					'X-JFB-Paypal-Webhook-Args'    => wp_json_encode( $exception->get_additional() ),
				)
			);
		}
	}

	/**
	 * @param $webhook_event
	 *
	 * @throws Gateway_Exception
	 */
	private function run_event( $webhook_event ): \WP_REST_Response {
		$event_type = $webhook_event['event_type'] ?? false;

		try {
			return Events_Listeners_Manager::instance()->get_event( $event_type )->on_catch_event( $webhook_event );
		} catch ( Repository_Exception $exception ) {
			throw new Gateway_Exception(
				"Undefined event type: $event_type",
				Events_Listeners_Manager::instance()->get_events_types_list()
			);
		}
	}

}
