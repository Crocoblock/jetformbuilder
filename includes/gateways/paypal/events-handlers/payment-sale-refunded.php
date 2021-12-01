<?php


namespace Jet_Form_Builder\Gateways\Paypal\Events_Handlers;

use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Paypal;

class Payment_Sale_Refunded extends Base\Payment_Sale {

	public static function get_event_type() {
		return 'PAYMENT.SALE.REFUNDED';
	}

	public function get_billing_id( $webhook_event ): string {
		$sale_id = $webhook_event['resource']['sale_id'] ?? '';

		try {
			$parent_payment = Paypal\Prepared_Views::get_payment_raw( $sale_id );
		} catch ( Query_Builder_Exception $exception ) {
			return '';
		}

		return $parent_payment['resource']['billing_agreement_id'] ?? '';
	}

}
