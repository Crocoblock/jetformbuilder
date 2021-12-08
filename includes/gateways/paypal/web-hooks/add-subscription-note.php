<?php


namespace Jet_Form_Builder\Gateways\Paypal\Web_Hooks;


use Jet_Form_Builder\Gateways\Paypal\Prepared_Queries;
use Jet_Form_Builder\Gateways\Paypal\Prepared_Views;
use Jet_Form_Builder\Gateways\Paypal\Scenarios_Views\Subscribe_Now;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;

class Add_Subscription_Note extends Rest_Api_Endpoint_Base {

	public static function get_rest_base() {
		return 'paypal/add-subscription-note';
	}

	public static function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	public function check_permission(): bool {
		return current_user_can( 'manage_options' );
	}

	public function run_callback( \WP_REST_Request $request ) {
		$body = $request->get_json_params();

		$sub_id  = $body['sub_id'] ?? 0;
		$post_id = $body['order_id'] ?? 0;
		$text    = $body['note'] ?? '';

		if ( ! Prepared_Queries::add_notes_by_id( $post_id, $text ) ) {
			return new \WP_REST_Response(
				array(
					'message' => __( 'Something went wrong...', 'jet-form-builder' )
				),
				503
			);
		}

		return new \WP_REST_Response(
			array(
				'data' => array(
					'sub_id'  => $sub_id,
					'replace' => ( new Subscribe_Now() )->transform_to_columns_values( array(
						'notes' => Prepared_Views::get_notes_by_id( $post_id )
					) )
				),
			)
		);
	}
}