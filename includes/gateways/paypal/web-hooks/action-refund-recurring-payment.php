<?php


namespace Jet_Form_Builder\Gateways\Paypal\Web_Hooks;

use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Rest_Api\Dynamic_Rest_Url_Trait;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;
use Jet_Form_Builder\Gateways\Paypal;
use Jet_Form_Builder\Gateways\Paypal\Scenarios_Views;

class Action_Refund_Recurring_Payment extends Rest_Api_Endpoint_Base {

	use Dynamic_Rest_Url_Trait;

	public static function get_rest_static_base(): string {
		return 'action-refund-recurring-payment/';
	}

	public static function get_rest_dynamic_base(): string {
		return '(?P<code>[\w\-]+)';
	}

	public static function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	public function run_callback( \WP_REST_Request $request ) {
		$body       = $request->get_json_params();
		$payment_id = $request->get_param( 'code' );

		try {
			/**
			 * Execute this action if there is an entry
			 * with this $payment_id in the database
			 */
			$payment      = Paypal\Prepared_Views::get_payment( $payment_id );
			$subscription = Paypal\Prepared_Views::get_subscription( $payment['related_id']['value'] );

		} catch ( Query_Builder_Exception $exception ) {
			return new \WP_REST_Response(
				array(
					'message' => $exception->getMessage(),
					'data'    => $exception->get_additional(),
				),
				404
			);
		}

		$form_id  = $subscription['_FORM_ID']['value'] ?? false;
		$payer_id = $subscription['subscriber']['value']['payer_id'] ?? false;

		try {
			$request = ( new Paypal\Api_Actions\Refund_Captured_Payment() )
				->set_url( $payment['refund_link']['value'] )
				->set_bearer_auth(
					Paypal\Controller::get_token_by_form_id( $form_id )
				)
				->set_invoice_id( $body['invoice_id'] ?? '' )
				->set_note_to_payer( $body['note_to_payer'] ?? '' );

			$request->refund();

		} catch ( Gateway_Exception $exception ) {
			return new \WP_REST_Response(
				array(
					'message' => $exception->getMessage(),
					'data'    => $exception->get_additional(),
					'file'    => $exception->getFile(),
					'line'    => $exception->getLine(),
				),
				503
			);
		}

		return new \WP_REST_Response(
			array(
				'message' => 'Success',
			)
		);
	}
}
