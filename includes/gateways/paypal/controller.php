<?php

namespace Jet_Form_Builder\Gateways\Paypal;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Gateways\Base_Gateway;

class Controller extends Base_Gateway {

	public $data = false;
	public $message = false;
	public $redirect = false;

	protected $token_query_name = 'token';

	/**
	 * Returns current gateway ID
	 *
	 * @return [type] [description]
	 */
	public function get_id() {
		return 'paypal';
	}

	/**
	 * Returns current gateway name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return __( 'PayPal Checkout', 'jet-form-builder' );
	}

	protected function options_list() {
		return array(
			'client_id'  => array(
				'label' => __( 'Client ID', 'jet-form-builder' )
			),
			'secret'     => array(
				'label' => __( 'Secret Key', 'jet-form-builder' )
			),
			'currency'   => array(
				'label' => __( 'Currency Code', 'jet-form-builder' )
			),
			'use_global' => array(
				'label' => __( 'Use Global Settings', 'jet-form-builder' )
			)
		);
	}

	public function failed_statuses() {
		return array( 'VOIDED' );
	}

	protected function retrieve_gateway_meta() {
		return Plugin::instance()->post_type->get_gateways( $this->data['form_id'] );
	}

	protected function retrieve_payment_instance() {
		$meta      = $this->gateways_meta[ $this->get_id() ];
		$client_id = $meta['client_id'];
		$secret    = $meta['secret'];

		$payment = $this->request(
			'v2/checkout/orders/' . $this->payment_token . '/capture',
			array(),
			null,
			$this->get_token( $client_id, $secret )
		);

		return json_decode( $payment, true );
	}

	protected function set_gateway_data_on_result() {
		try {
			$this->set_current_gateway_options();
			$this->set_payment_status();
			$this->set_payment_amount();
			$this->set_payer();

		} catch ( Gateway_Exception $exception ) {
			return false;
		}

		return true;
	}

	private function set_payment_status() {
		if ( empty( $this->payment_instance['status'] ) ) {
			throw new Gateway_Exception( 'Empty payment status' );
		}

		$this->data['status'] = $this->payment_instance['status'];
	}

	private function set_payer() {
		if ( ! empty( $this->payment_instance['payer'] ) ) {
			$this->data['payer'] = array(
				'first_name' => $this->payment_instance['payer']['name']['given_name'],
				'last_name'  => $this->payment_instance['payer']['name']['surname'],
				'email'      => $this->payment_instance['payer']['email_address'],
			);
		}
	}

	private function set_payment_amount() {
		if ( ! empty( $this->payment_instance['purchase_units'][0]['payments']['captures'] ) ) {
			$payment_unit         = $this->payment_instance['purchase_units'][0]['payments']['captures'][0];
			$this->data['amount'] = $payment_unit['amount'];
		}
	}


	protected function query_order_token( $order_id, $form_id ) {
		return $this->get_token(
			$this->options['client_id'],
			$this->options['secret']
		);
	}

	/**
	 * Process gateway payment
	 *
	 * @param $action_handler
	 *
	 * @return void [type] [description]
	 */
	public function after_actions( Action_Handler $action_handler ) {

		if ( ! $this->set_gateway_data( $action_handler ) ) {
			return;
		}

		$order = $this->request(
			'v2/checkout/orders',
			array(),
			array(
				'intent'              => 'CAPTURE',
				'application_context' => array(
					'landing_page' => 'BILLING',
					'user_action'  => 'PAY_NOW',
					'brand_name'   => get_option( 'blogname' ),
					'return_url'   => $this->get_refer_url( self::SUCCESS_TYPE ),
					'cancel_url'   => $this->get_refer_url( self::FAILED_TYPE ),
				),
				'purchase_units'      => array(
					array(
						'custom_id' => $action_handler->form_id . '-' . $this->order_id,
						'amount'    => array(
							'currency_code' => $this->options['currency'],
							'value'         => $this->price,
						),
					),
				),
			)
		);

		if ( empty( $order ) || is_wp_error( $order ) ) {
			return;
		}

		$order = json_decode( $order, true );

		if ( ! $order ) {
			return;
		}

		if ( empty( $order['id'] ) ) {
			throw ( new Action_Exception( $order['message'], $order ) )->dynamic_error();
		}

		update_post_meta(
			$this->order_id,
			self::GATEWAY_META_KEY,
			json_encode( array(
				'payment_id' => $order['id'],
				'order_id'   => $this->order_id,
				'form_id'    => $action_handler->form_id,
				'form_data'  => $action_handler->request_data,
			), JSON_UNESCAPED_UNICODE )
		);

		$this->maybe_redirect_to_checkout( $order );
	}

	private function maybe_redirect_to_checkout( $order ) {
		foreach ( $order['links'] as $link ) {
			if ( ! empty( $link['rel'] ) && 'approve' === $link['rel'] ) {
				$this->action_handler->add_response( array(
					'redirect' => $link['href']
				) );
			}
		}
	}

	/**
	 * Return API url
	 *
	 * @param $endpoint
	 *
	 * @return string
	 */
	public function api_url( $endpoint ) {

		$sandbox = apply_filters( 'jet-form-builder/gateways/paypal/sandbox-mode', false );

		if ( $sandbox ) {
			$url = 'https://api-m.sandbox.paypal.com/';
		} else {
			$url = 'https://api-m.paypal.com/';
		}

		return esc_url( $url . $endpoint );
	}

	/**
	 * Returns auth token for current client_id and secret combination
	 *
	 * @param bool $client_id
	 * @param bool $secret
	 *
	 * @return mixed|void [description]
	 * @throws Action_Exception
	 */
	public function get_token( $client_id = false, $secret = false ) {
		$hash  = md5( $client_id . $secret );
		$token = get_transient( $hash );

		if ( $token ) {
			return $token;
		}

		if ( ! $client_id || ! $secret ) {
			return;
		}

		$key = base64_encode( $client_id . ':' . $secret );

		$response = $this->request(
			'v1/oauth2/token',
			array(
				'Accept'          => 'application/json',
				'Accept-Language' => get_locale(),
				'Authorization'   => 'Basic ' . $key,
			),
			'grant_type=client_credentials'
		);

		$response = json_decode( $response, true );

		if ( empty( $response['access_token'] ) ) {
			throw ( new Action_Exception( $response['error_description'] ) )->dynamic_error();
		}

		$token = $response['access_token'];

		set_transient( $hash, $token, 3 * HOUR_IN_SECONDS );

		return $token;

	}

	/**
	 * Make a request
	 *
	 * @param null $endpoint
	 * @param array $headers [description]
	 * @param array $body [description]
	 *
	 * @param bool $token
	 * @param string $method
	 *
	 * @return string [type]           [description]
	 * @throws Action_Exception
	 */
	public function request( $endpoint = null, $headers = array(), $body = array(), $token = false, $method = 'post' ) {

		$url = $this->api_url( $endpoint );

		if ( empty( $headers ) ) {

			$headers = array(
				'Content-Type'    => 'application/json',
				'Accept-Language' => get_locale(),
				'Authorization'   => 'Bearer ' . ( $token ? $token : $this->order_token ),
			);
		}

		if ( is_array( $body ) ) {

			if ( version_compare( phpversion(), '7.1', '>=' ) ) {
				ini_set( 'precision', 17 );
				ini_set( 'serialize_precision', -1 );
			}

			$body = json_encode( $body );
		}

		$args = array(
			'timeout' => 45,
			'headers' => $headers,
		);

		if ( 'post' === $method ) {
			$args['method'] = 'POST';
			$args['body']   = $body;
			$response       = wp_remote_post( $url, $args );
		} else {
			$response = wp_remote_get( $url, $args );
		}

		return wp_remote_retrieve_body( $response );
	}

}
