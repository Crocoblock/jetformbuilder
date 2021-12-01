<?php


namespace Jet_Form_Builder\Gateways\Paypal\Events_Handlers;


class Payment_Sale_Completed extends Base\Payment_Sale {

	public static function get_event_type() {
		return 'PAYMENT.SALE.COMPLETED';
	}

	public function get_billing_id( $webhook_event ): string {
		return $webhook_event['resource']['billing_agreement_id'] ?? '';
	}

}
