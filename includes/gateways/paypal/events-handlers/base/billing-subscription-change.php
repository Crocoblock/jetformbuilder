<?php


namespace Jet_Form_Builder\Gateways\Paypal\Events_Handlers\Base;

use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Paypal;

abstract class Billing_Subscription_Change extends Event_Handler_Base {

	public function on_catch_event( $webhook_event ) {
		// phpcs:disable WordPress.PHP.DevelopmentFunctions.error_log_error_log
		$subscription_id = $webhook_event['resource']['id'] ?? false;

		if ( ! $subscription_id ) {
			parent::on_catch_event( $webhook_event );

			return;
		}

		$version = $webhook_event['resource_version'] ?? false;

		if ( '2.0' !== $version ) {
			error_log( static::class . '::' . __METHOD__ . ': Invalid version.' );
			return;
		}

		try {
			$subscription = ( new Query_Builder() )
				->set_view(
					( new Paypal\Query_Views\Paypal_Subscriptions_Find_View() )
						->find_by( 'subscription_id', $subscription_id )
				)
				->debug()
				->query_one();

		} catch ( Query_Builder_Exception $exception ) {
			error_log( static::class . '::' . __METHOD__ . ': ' . $exception->getMessage() );
			return;
		}

		$subscription['resource'] = $webhook_event['resource'];

		update_post_meta(
			$subscription['order_id'],
			Paypal\Controller::GATEWAY_META_KEY,
			wp_json_encode( $subscription, JSON_UNESCAPED_UNICODE )
		);

		// phpcs:enable WordPress.PHP.DevelopmentFunctions.error_log_error_log
	}

}
