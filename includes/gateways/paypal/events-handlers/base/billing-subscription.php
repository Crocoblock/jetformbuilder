<?php


namespace Jet_Form_Builder\Gateways\Paypal\Events_Handlers\Base;

use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Paypal;

abstract class Billing_Subscription extends Event_Handler_Base {

	public function get_note_message( array $old_subscription, array $new_subscription ): string {
		$old_status = $old_subscription['status'] ?? '';
		$new_status = $new_subscription['status'] ?? '';

		if ( $old_status === $new_status ) {
			return '';
		}

		return sprintf(
			__( 'Subscription status changed from %s to %s', 'jet-form-builder' ),
			$old_status,
			$new_status
		);
	}

	/**
	 * @param $webhook_event
	 *
	 * @return \WP_REST_Response
	 * @throws Gateway_Exception
	 */
	public function on_catch_event( $webhook_event ): \WP_REST_Response {
		// phpcs:disable WordPress.PHP.DevelopmentFunctions.error_log_error_log
		$subscription_id = $webhook_event['resource']['id'] ?? false;

		if ( ! $subscription_id ) {
			return parent::on_catch_event( $webhook_event );
		}

		$version = $webhook_event['resource_version'] ?? false;

		if ( '2.0' !== $version ) {
			return new \WP_REST_Response(
				'Fail',
				503,
				array(
					'X-JFB-Paypal-Webhook-Response' => "Invalid resource version! ({$version})",
				)
			);
		}

		try {
			$subscription = Paypal\Prepared_Views::get_subscription_raw( $subscription_id );
		} catch ( Query_Builder_Exception $exception ) {
			throw new Gateway_Exception( "Undefined subscription: {$subscription_id}" );
		}

		Paypal\Prepared_Queries::add_notes_by_id(
			$subscription['order_id'],
			$this->get_note_message( $subscription['resource'], $webhook_event['resource'] )
		);

		$subscription['resource'] = $webhook_event['resource'];

		update_post_meta(
			$subscription['order_id'],
			Paypal\Controller::GATEWAY_META_KEY,
			wp_json_encode( $subscription, JSON_UNESCAPED_UNICODE )
		);

		return new \WP_REST_Response(
			'Success',
			200,
			array(
				'X-JFB-Paypal-Webhook-Response' => 'Catch!',
			)
		);
	}

}
