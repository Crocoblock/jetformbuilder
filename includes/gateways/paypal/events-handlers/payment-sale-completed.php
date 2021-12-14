<?php


namespace Jet_Form_Builder\Gateways\Paypal\Events_Handlers;


use Jet_Form_Builder\Gateways\Paypal\Scenarios_Views\Subscribe_Now;

class Payment_Sale_Completed extends Base\Payment_Sale {

	public static function get_event_type() {
		return 'PAYMENT.SALE.COMPLETED';
	}

	public function get_billing_id( $webhook_event ): string {
		return $webhook_event['resource']['billing_agreement_id'] ?? '';
	}

	protected function on_get_subscription( array $subscription ) {
		$view = new Subscribe_Now();

		if ( ! $view->is_custom_status( $subscription['resource']['status'] ) ) {
			return;
		}

		$event = new class() extends Base\Billing_Subscription {
			public static function get_event_type() {
				return 'nameless';
			}
		};

		$new_resource = array_merge( $subscription['resource'], array(
			'status' => 'ACTIVE'
		) );

		$event->update_subscription( $subscription, $new_resource );
	}

}
