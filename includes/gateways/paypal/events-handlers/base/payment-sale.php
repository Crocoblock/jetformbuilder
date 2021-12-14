<?php


namespace Jet_Form_Builder\Gateways\Paypal\Events_Handlers\Base;


use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Paypal\Controller;
use Jet_Form_Builder\Gateways\Paypal\Events_Handlers\Base;
use Jet_Form_Builder\Gateways\Paypal\Prepared_Views;

abstract class Payment_Sale extends Base\Event_Handler_Base {

	const SLUG = Controller::GATEWAY_META_KEY . '_payment';

	abstract public function get_billing_id( $webhook_event ): string;

	protected function on_get_subscription( array $subscription ) {
	}

	/**
	 * @param $webhook_event
	 *
	 * @return \WP_REST_Response
	 * @throws Gateway_Exception
	 */
	public function on_catch_event( $webhook_event ): \WP_REST_Response {
		$subscription_id = $this->get_billing_id( $webhook_event );

		if ( ! $subscription_id ) {
			throw new Gateway_Exception( 'Empty `billing_agreement_id`', $webhook_event );
		}

		try {
			$subscription = Prepared_Views::get_subscription_raw( $subscription_id );
		} catch ( Query_Builder_Exception $exception ) {
			throw new Gateway_Exception( $exception->getMessage(), ...$exception->get_additional() );
		}
		
		$this->on_get_subscription( $subscription );

		add_post_meta(
			$subscription['order_id'],
			self::SLUG,
			Tools::encode_json(
				array(
					'resource_type' => $webhook_event['resource_type'],
					'event_type'    => $webhook_event['event_type'],
					'summary'       => $webhook_event['summary'],
					'resource'      => $webhook_event['resource'],
					// phpcs:ignore WordPress.DateTime.CurrentTimeTimestamp.Requested
					'create_dt'     => current_time( 'timestamp' ),
					'payment_id'    => $webhook_event['resource']['id'],
					'gateway_id'    => $subscription['gateway_id'],
					'scenario'      => $subscription['scenario'],
				)
			)
		);

		return new \WP_REST_Response( 'Success' );
	}


}