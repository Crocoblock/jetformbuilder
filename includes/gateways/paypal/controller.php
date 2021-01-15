<?php

namespace Jet_Form_Builder\Gateways\Paypal;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Gateways\Base_Gateway;

class Controller extends Base_Gateway {

	private $options = array();
	private $gateways_meta;
	private $action_handler;
	private $price_field = false;
	private $order_id;
	private $price;
	private $token;

	public $data = false;
	public $message = false;
	public $redirect = false;

	public function __construct() {
		add_action( 'jet-form-builder/actions/before-send', array( $this, 'prevent_notifications' ) );
		add_action( 'jet-form-builder/actions/after-send', array( $this, 'process_payment' ) );
		add_action( 'jet-form-builder/gateways/success/paypal', array( $this, 'process_payment_result' ) );
	}

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

	/**
	 * Store payment status into order and show success/failed message
	 * @return [type] [description]
	 */
	public function process_payment_result() {

		$token      = $_GET['token'];
		$this->data = $this->get_form_by_payment( $token );

		if ( ! $this->set_gateway_data_on_result() ) {
			return;
		}

		$this->data['date'] = date_i18n( 'F j, Y, H:i' );

		$this->data['gateway'] = $this->get_name();

		update_post_meta( $this->data['order_id'], '_jet_gateway_data', $this->data );

		$this->try_do_actions();
	}

	private function try_do_actions() {
		$failed_statuses = array( 'VOIDED' );

		Gateway_Manager::instance()->add_data( $this->data );

		try {
			if ( in_array( $this->data['status'], $failed_statuses ) ) {
				$this->process_status( 'failed' );
			} else {
				$this->process_status( 'success' );
			}
		} catch ( Action_Exception $exception ) {
			//
		}

	}

	private function set_gateway_data_on_result() {
		$this->gateways_meta = Plugin::instance()->post_type->get_gateways( $this->data['form_id'] );

		try {
			$this->set_paypal_options();
			$this->set_token();
			$this->set_payment_status();

		} catch ( Gateway_Exception $exception ) {
			return false;
		}

		return true;
	}

	private function set_payment_status() {
		$payment = $this->request(
			'v2/checkout/orders/' . $this->data['payment_id'] . '/capture',
			array(),
			null,
			$this->token
		);

		if ( ! $payment ) {
			return;
		}

		$payment = json_decode( $payment, true );

		if ( empty( $payment['status'] ) ) {
			throw new Gateway_Exception( 'Empty payment status' );
		}

		$this->data['status'] = $payment['status'];

		$this->set_payer( $payment );
		$this->set_payment_amount( $payment );
	}

	private function set_payer( $payment ) {
		if ( ! empty( $payment['payer'] ) ) {
			$this->data['payer'] = array(
				'first_name' => $payment['payer']['name']['given_name'],
				'last_name'  => $payment['payer']['name']['surname'],
				'email'      => $payment['payer']['email_address'],
			);
		}
	}

	private function set_payment_amount( $payment ) {
		if ( ! empty( $payment['purchase_units'][0]['payments']['captures'] ) ) {
			$payment_unit         = $payment['purchase_units'][0]['payments']['captures'][0];
			$this->data['amount'] = $payment_unit['amount'];
		}
	}

	private function set_gateway_data() {
		$this->gateways_meta = Plugin::instance()->post_type->get_gateways( $this->action_handler->form_id );

		try {
			$this->set_order_id();
			$this->is_paypal_gateway();
			$this->set_price_field();
			$this->set_price_from_filed();
			$this->set_paypal_options();
			$this->set_token();

		} catch ( Gateway_Exception $exception ) {
			return false;
		}

		return true;
	}

	/**
	 * Process status notification and enqueue message
	 *
	 * @param string $type [description]
	 * @param  [type] $form_id  [description]
	 * @param array $settings [description]
	 *
	 * @return [type]           [description]
	 */
	public function process_status( $type = 'success' ) {

		$message       = ! empty( $settings[ $type . '_message' ] ) ? wp_kses_post( $settings[ $type . '_message' ] ) : null;
		$notifications = isset( $settings[ 'notifications_' . $type ] ) ? $settings[ 'notifications_' . $type ] : array();

		if ( $message ) {
			Gateway_Manager::instance()->add_message( $message );
		}

		do_action( 'jet-form-builder/gateways/on-payment-' . $type, $this->data, $settings );

		if ( ! empty( $notifications ) ) {
			$notifications = new Action_Handler(
				$this->data['form_id'],
				$this->data['form_data']
			);

			$notifications->unregister_action( 'redirect_to_page' );

			$all        = $notifications->get_all();
			$keep_these = isset( $settings[ 'notifications_' . $type ] ) ? $settings[ 'notifications_' . $type ] : array();

			if ( empty( $all ) ) {
				return;
			}

			foreach ( $all as $index => $notification ) {

				if ( ! in_array( $index, $keep_these ) ) {
					$notifications->unregister_action( $index );
				}

			}

			$notifications->do_actions();
		}

	}

	/**
	 * Returns form data by payment ID
	 *
	 * @param  [type] $payment [description]
	 *
	 * @return [type]          [description]
	 */
	public function get_form_by_payment( $payment = null ) {

		if ( ! $payment ) {
			return;
		}

		global $wpdb;
		$row = $wpdb->get_row( "SELECT * FROM $wpdb->postmeta WHERE meta_key = '_jet_gateway_data' AND meta_value LIKE '%$payment%'", ARRAY_A );

		if ( empty( $row ) ) {
			return;
		}

		$data = $row['meta_value'];

		return maybe_unserialize( $data );

	}


	/**
	 * Prevent unnecessary notifications processing before form is send.
	 *
	 * @param  [type] $handler [description]
	 *
	 * @return [type]          [description]
	 */
	public function prevent_notifications( $action_handler ) {

		$gateways = Plugin::instance()->post_type->get_gateways( $action_handler->form_id );

		if ( empty( $gateways ) || empty( $gateways['gateway'] ) ) {
			return;
		}

		$action_handler->unregister_action( 'redirect_to_page' );

		$keep_these   = ! empty( $gateways['notifications_before'] ) ? $gateways['notifications_before'] : array();
		$form_actions = $action_handler->get_all();
		$keep_these   = apply_filters( 'jet-form-builder/gateways/notifications-before', $keep_these, $form_actions );

		if ( empty( $form_actions ) ) {
			return;
		}

		foreach ( $form_actions as $index => $action ) {

			if ( 'insert_post' === $action['type'] ) {
				continue;
			}

			if ( 'redirect_to_page' === $action['type'] ) {
				$this->redirect = $action;
			}

			if ( ! in_array( $index, $keep_these ) ) {
				$action_handler->unregister_action( $index );
			}

		}

	}


	private function set_order_id() {
		$response = $this->action_handler->response_data;
		if ( ! isset( $response['inserted_post_id'] )
		     || empty( $response['inserted_post_id'] ) ) {

			throw new Gateway_Exception( 'There is not inserted_post_id' );
		}
		$this->order_id = $response['inserted_post_id'];
	}

	private function is_paypal_gateway() {
		if ( ! isset( $this->gateways_meta['gateway'] ) ||
		     empty( $this->gateways_meta['gateway'] ) ||
		     $this->get_id() !== $this->gateways_meta['gateway'] ) {

			throw new Gateway_Exception( 'Invalid gateway' );
		}
	}

	private function set_price_field() {
		if ( isset( $this->gateways_meta['price_field'] ) && ! empty( $this->gateways_meta['price_field'] ) ) {
			$this->price_field = esc_attr( $this->gateways_meta['price_field'] );
		}

		$this->price_field = apply_filters( 'jet-form-builder/gateways/price-field', $this->price_field, $this->action_handler );

		if ( ! $this->price_field ) {
			throw new Gateway_Exception( 'Invalid price field' );
		}
	}

	private function set_price_from_filed() {
		if ( isset( $this->action_handler->response_data[ $this->price_field ] ) ) {
			$this->price = $this->action_handler->response_data[ $this->price_field ];
		}

		if ( ! $this->price ) {
			throw new Gateway_Exception( 'Empty price field' );
		}
	}

	private function set_paypal_options() {
		$gateway = $this->gateways_meta['paypal'];

		foreach ( [ 'client_id', 'secret', 'currency' ] as $option ) {
			if ( ! isset( $gateway[ $option ] ) || empty( $gateway[ $option ] ) ) {
				throw new Gateway_Exception( 'Invalid gateway options' );
			}
			$this->options[ $option ] = esc_attr( $gateway[ $option ] );
		}
	}

	private function set_token() {
		$this->token = $this->get_token(
			$this->options['client_id'],
			$this->options['secret']
		);

		if ( ! $this->token ) {
			throw new Gateway_Exception( 'Invalid token' );
		}
	}

	/**
	 * Process gateway payment
	 *
	 * @param $action_handler
	 *
	 * @return void [type] [description]
	 */
	public function process_payment( $action_handler ) {
		$this->action_handler = $action_handler;

		if ( ! $this->set_gateway_data() ) {
			return;
		}

		$remove_refer_args = array(
			'jet_gateway',
			'payment',
			'token',
			'PayerID',
		);

		$success_refer = $action_handler->request_data['__refer'];
		$cancel_refer  = $action_handler->request_data['__refer'];

		$success_redirect = ! empty( $this->gateways_meta['use_success_redirect'] ) ? $this->gateways_meta['use_success_redirect'] : false;
		$success_redirect = filter_var( $success_redirect, FILTER_VALIDATE_BOOLEAN );

		if ( $success_redirect && $this->redirect ) {
			$type = ! empty( $this->redirect['redirect_type'] ) ? $this->redirect['redirect_type'] : 'static_page';

			if ( 'static_page' === $type ) {
				$to_page       = ! empty( $this->redirect['redirect_page'] ) ? $this->redirect['redirect_page'] : false;
				$success_refer = ! empty( $to_page ) ? get_permalink( $to_page ) : false;
			} else {
				$success_refer = ! empty( $this->redirect['redirect_url'] ) ? $this->redirect['redirect_url'] : false;
			}
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
					'return_url'   => add_query_arg(
						array( 'jet_gateway' => $this->get_id(), 'payment' => 'success' ),
						trailingslashit( remove_query_arg( $remove_refer_args, $success_refer ) )
					),
					'cancel_url'   => add_query_arg(
						array( 'jet_gateway' => $this->get_id(), 'payment' => 'canceled' ),
						trailingslashit( remove_query_arg( $remove_refer_args, $cancel_refer ) )
					),
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

		$pp_order_id = ! empty( $order['id'] ) ? $order['id'] : false;

		if ( ! $pp_order_id ) {
			return;
		}

		update_post_meta(
			$this->order_id,
			'_jet_gateway_data',
			array(
				'payment_id' => $pp_order_id,
				'order_id'   => $this->order_id,
				'form_id'    => $action_handler->form_id,
				'form_data'  => $action_handler->request_data,
			)
		);

		foreach ( $order['links'] as $link ) {
			if ( ! empty( $link['rel'] ) && 'approve' === $link['rel'] ) {
				wp_redirect( $link['href'] );
				die();
			}
		}

		return;

	}

	/**
	 * Return API url
	 *
	 * @return string
	 */
	public function api_url( $endpoint ) {

		$sandbox = apply_filters( 'jet-form-builder/gateways/paypal/sandbox-mode', false );

		if ( $sandbox ) {
			$url = 'https://api.sandbox.paypal.com/';
		} else {
			$url = 'https://api.paypal.com/';
		}

		return esc_url( $url . $endpoint );
	}

	/**
	 * Returns auth token for current client_id and secret combination
	 *
	 * @param  [type] $client_id [description]
	 * @param  [type] $secret    [description]
	 *
	 * @return [type]            [description]
	 */
	public function get_token( $client_id = false, $secret = false ) {

		$hash  = md5( $client_id . $secret );
		$token = get_transient( $hash );

		if ( ! $client_id ) {
			$client_id = $this->options['client_id'];
		}

		if ( ! $secret ) {
			$secret = $this->options['secret'];
		}

		if ( ! $client_id || ! $secret ) {
			return;
		}

		if ( $token ) {
			return $token;
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

		if ( ! $response ) {
			return false;
		}

		$response = json_decode( $response, true );

		if ( ! $response || empty( $response['access_token'] ) ) {
			return false;
		}

		$token = $response['access_token'];

		set_transient( $hash, $token, 3 * HOUR_IN_SECONDS );

		return $token;

	}

	/**
	 * Make a request
	 *
	 * @param  [type] $endpoint [description]
	 * @param array $headers [description]
	 * @param array $body [description]
	 *
	 * @return [type]           [description]
	 */
	public function request( $endpoint = null, $headers = array(), $body = array(), $token = false, $method = 'post' ) {

		$url = $this->api_url( $endpoint );

		if ( empty( $headers ) ) {

			if ( ! $token ) {
				$token = $this->get_token();
			}

			$headers = array(
				'Content-Type'    => 'application/json',
				'Accept-Language' => get_locale(),
				'Authorization'   => 'Bearer ' . $token,
			);
		}

		if ( is_array( $body ) ) {
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
