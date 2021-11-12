<?php


namespace Jet_Form_Builder\Gateways\Paypal\Events_Handlers\Base;

use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Paypal;

abstract class Billing_Subscription_Change extends Event_Handler_Base {

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
			$subscription = ( new Query_Builder() )
				->set_view(
					( new Paypal\Query_Views\Paypal_Subscriptions_Find_View() )
						->find_by( 'subscription_id', $subscription_id )
				)
				->query_one();

		} catch ( Query_Builder_Exception $exception ) {
			return new \WP_REST_Response(
				'Fail',
				404,
				array(
					'X-JFB-Paypal-Webhook-Response' => $exception->getMessage(),
				)
			);
		}

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
