<?php


namespace Jet_Form_Builder\Gateways\Paypal\Actions;


use Jet_Form_Builder\Exceptions\Gateway_Exception;

class Verify_Webhook_Signature_Action extends Base_Action {

	public function action_slug() {
		return 'VERIFY_WEBHOOK_SIGNATURE';
	}

	public function action_endpoint() {
		return 'v1/notifications/verify-webhook-signature';
	}

	public function set_webhook_id( $webhook_id ) {
		$this->set_body( array(
			'webhook_id' => $webhook_id
		) );

		return $this;
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function is_success() {
		$response = $this->send_request();

		if ( ! isset( $response['verification_status'] ) ) {
			throw new Gateway_Exception( 'Undefined `verification_status`.', $response );
		}

		$result = 'SUCCESS' === $response['verification_status'];

		if ( ! $result ) {
			throw new Gateway_Exception( 'Failure.', $response, $this->get_request_args() );
		}
	}

	/**
	 * @param \WP_REST_Request $request
	 *
	 * @return Verify_Webhook_Signature_Action
	 * @throws Gateway_Exception
	 */
	public function set_params_from_request( \WP_REST_Request $request ) {
		$auth_algo         = $request->get_header( 'PAYPAL-AUTH-ALGO' );
		$cert_url          = $request->get_header( 'PAYPAL-CERT-URL' );
		$transmission_id   = $request->get_header( 'PAYPAL-TRANSMISSION-ID' );
		$transmission_sig  = $request->get_header( 'PAYPAL-TRANSMISSION-SIG' );
		$transmission_time = $request->get_header( 'PAYPAL-TRANSMISSION-TIME' );

		if ( ! $auth_algo
		     || ! $cert_url
		     || ! $transmission_id
		     || ! $transmission_time
		     || ! $transmission_sig
		) {
			throw new Gateway_Exception( 'Not enough Paypal headers', $request->get_headers() );
		}

		$this->set_body( array(
			'transmission_id'   => $transmission_id,
			'transmission_time' => $transmission_time,
			'cert_url'          => $cert_url,
			'auth_algo'         => $auth_algo,
			'transmission_sig'  => $transmission_sig,
			'webhook_event'     => $request->get_json_params()
		) );

		return $this;
	}
}