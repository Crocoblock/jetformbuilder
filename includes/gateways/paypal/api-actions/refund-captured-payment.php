<?php


namespace Jet_Form_Builder\Gateways\Paypal\Api_Actions;

use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Paypal;

class Refund_Captured_Payment extends Base_Action {

	protected $auth_assertion;

	public function action_slug() {
		return 'REFUND_PAYMENT';
	}

	public function action_endpoint() {
		return '/v2/payments/captures/{capture_id}/refund';
	}

	public function action_headers() {
		return array(
			'PayPal-Auth-Assertion' => $this->auth_assertion,
			'Content-Type'          => 'application/json',
		);
	}

	/**
	 * @param $form_id
	 * @param $payer_id
	 *
	 * @return Refund_Captured_Payment
	 * @throws Gateway_Exception
	 * @link https://github.com/paypal/Payouts-PHP-SDK/issues/7
	 *
	 * @link https://developer.paypal.com/docs/api/reference/api-requests/#paypal-auth-assertion
	 */
	public function set_auth_assertion( $form_id, $payer_id ): Refund_Captured_Payment {
		$credits = Paypal\Controller::get_credentials_by_form( $form_id );

		if ( empty( $credits['client_id'] ) ) {
			throw new Gateway_Exception( 'Empty `client_id`', $credits, $form_id );
		}
		if ( ! $payer_id ) {
			throw new Gateway_Exception( 'Empty `$payer_id`' );
		}
		// phpcs:disable WordPress.PHP.DiscouragedPHPFunctions.obfuscation_base64_encode

		// JOSE header
		$header = array( base64_encode( '{"alg":"none"}' ) );

		// Payload
		$header[] = base64_encode( "{\"iss\":\"{$credits['client_id']}\",\"payer_id\":\"{$payer_id}\"}" );

		// Signature
		$header[] = '';

		$this->auth_assertion = implode( '.', $header );

		// phpcs:enable WordPress.PHP.DiscouragedPHPFunctions.obfuscation_base64_encode

		return $this;
	}
}