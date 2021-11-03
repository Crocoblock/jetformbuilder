<?php


namespace Jet_Form_Builder\Gateways\Paypal\Events_Handlers;

use Jet_Form_Builder\Gateways\Gateway_Manager;

class Billing_Subscription_Cancelled extends Event_Handler_Base {

	public static function get_event_type() {
		return 'BILLING.SUBSCRIPTION.CANCELLED';
	}

	public function on_catch_event( $webhook_event ) {
		$subscription_id = $webhook_event['resource']['id'] ?? false;

		if ( ! $subscription_id ) {
			parent::on_catch_event( $webhook_event );

			return;
		}

		$paypal = Gateway_Manager::instance()->controller( 'paypal' )->get_gateway_entries( array(
			'subscription_id' => $subscription_id
		) )
	}
}
