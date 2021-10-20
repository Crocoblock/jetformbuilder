<?php


namespace Jet_Form_Builder\Gateways\Paypal\Actions;


use Jet_Form_Builder\Exceptions\Gateway_Exception;

class Verify_Webhook_Signature extends Base_Action {

	public function action_slug() {
		return 'VERIFY_WEBHOOK_SIGNATURE';
	}

	public function action_endpoint() {
		return 'v1/notifications/verify-webhook-signature';
	}

	/**
	 * @param \WP_REST_Request $request
	 *
	 * @throws Gateway_Exception
	 */
	public function set_params_from_request( \WP_REST_Request $request ) {
		$paypal_auth_algo         = $request->get_header( 'PAYPAL-AUTH-ALGO' );
		$paypal_cert_url          = $request->get_header( 'PAYPAL-CERT-URL' );
		$paypal_transmission_id   = $request->get_header( 'PAYPAL-TRANSMISSION-ID' );
		$paypal_transmission_time = $request->get_header( 'PAYPAL-TRANSMISSION-SIG' );
		$paypal_transmission_sig  = $request->get_header( 'PAYPAL-TRANSMISSION-TIME' );

		if ( ! $paypal_auth_algo
		     || ! $paypal_cert_url
		     || ! $paypal_transmission_id
		     || ! $paypal_transmission_time
		     || ! $paypal_transmission_sig
		) {
			throw new Gateway_Exception( 'Not enough Paypal headers', $request->get_headers() );
		}
	}
}