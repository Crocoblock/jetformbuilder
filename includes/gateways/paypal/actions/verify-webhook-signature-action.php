<?php


namespace Jet_Form_Builder\Gateways\Paypal\Actions;

use Jet_Form_Builder\Exceptions\Gateway_Exception;

class Verify_Webhook_Signature_Action extends Base_Action {

	private $webhook_event;

	public function action_slug() {
		return 'VERIFY_WEBHOOK_SIGNATURE';
	}

	public function action_endpoint() {
		return 'v1/notifications/verify-webhook-signature';
	}

	/**
	 * @param $webhook_id
	 *
	 * @return $this
	 * @throws Gateway_Exception
	 */
	public function set_webhook_id( $webhook_id ): Verify_Webhook_Signature_Action {
		if ( ! $webhook_id ) {
			throw new Gateway_Exception( 'Invalid webhook id.' );
		}

		$this->set_json_body(
			array(
				'webhook_id' => $webhook_id,
			)
		);

		return $this;
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function is_success() {
		$response = $this->send_request();

		if ( ! isset( $response['verification_status'] ) ) {
			$error_type = $response['name'] ?? 'Undefined `verification_status`.';

			throw new Gateway_Exception(
				$error_type,
				$response,
				$this->response_message( 'Error: ' ),
				$this->get_body()
			);
		}

		$result = 'SUCCESS' === $response['verification_status'];

		if ( ! $result ) {
			throw new Gateway_Exception( 'Failed verification.', $response );
		}
	}

	/**
	 * @param $event
	 *
	 * @return $this
	 * @throws Gateway_Exception
	 */
	public function set_webhook_event( $event ): Verify_Webhook_Signature_Action {
		if ( ! $event ) {
			throw new Gateway_Exception( 'Empty webhook event.', $event );
		}
		if ( ! is_string( $event ) ) {
			throw new Gateway_Exception( 'Webhook event is not string.', $event );
		}

		$this->webhook_event = $event;

		return $this;
	}

	/**
	 * @param \WP_REST_Request $request
	 *
	 * @return Verify_Webhook_Signature_Action
	 * @throws Gateway_Exception
	 */
	public function set_params_from_request( \WP_REST_Request $request ): Verify_Webhook_Signature_Action {
		$auth_algo         = $request->get_header( 'PAYPAL-AUTH-ALGO' );
		$cert_url          = $request->get_header( 'PAYPAL-CERT-URL' );
		$transmission_id   = $request->get_header( 'PAYPAL-TRANSMISSION-ID' );
		$transmission_sig  = $request->get_header( 'PAYPAL-TRANSMISSION-SIG' );
		$transmission_time = $request->get_header( 'PAYPAL-TRANSMISSION-TIME' );

		if ( ! $auth_algo || ! $cert_url || ! $transmission_id || ! $transmission_time || ! $transmission_sig ) {
			throw new Gateway_Exception( 'Not enough Paypal headers', $request->get_headers() );
		}

		$this->set_json_body(
			array(
				'auth_algo'         => $auth_algo,
				'transmission_id'   => $transmission_id,
				'cert_url'          => $cert_url,
				'transmission_time' => $transmission_time,
				'transmission_sig'  => $transmission_sig,
			)
		);

		return $this;
	}

	protected function before_close_raw_body( $props ): array {
		$props[] = sprintf( '"webhook_event":%s', $this->webhook_event );

		return $props;
	}
}
