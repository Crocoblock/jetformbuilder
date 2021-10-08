<?php

namespace Jet_Form_Builder\Gateways\Paypal;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Paypal\Actions\Paypal_Pay_Now_Action;
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
		return __( 'PayPal Checkout', 'Paypal gateways editor data', 'jet-form-builder' );
	}

	protected function options_list() {
		return array(
			'client_id'    => array(
				'label' => __( 'Client ID', 'Paypal gateways editor data', 'jet-form-builder' )
			),
			'secret'       => array(
				'label' => __( 'Secret Key', 'Paypal gateways editor data', 'jet-form-builder' )
			),
			'currency'     => array(
				'label' => __( 'Currency Code', 'Paypal gateways editor data', 'jet-form-builder' )
			),
			'use_global'   => array(
				'label'    => __( 'Use Global Settings', 'Paypal gateways editor data', 'jet-form-builder' ),
				'required' => false
			),
			'gateway_type' => array(
				'label'   => __( 'Gateway Action', 'Paypal gateways editor data', 'jet-form-builder' ),
				'default' => Paypal_Pay_Now_Action::SLUG
			)
		);
	}

	public function additional_editor_data() {
		return array(
			'gateway_types' => array(
				array(
					'value' => Paypal_Pay_Now_Action::SLUG,
					'label' => _x( 'Pay Now', 'Paypal gateway editor data', 'jet-form-builder' )
				),
				array(
					'value' => 'SUBSCRIBE_NOW',
					'label' => _x( 'Create a subscription', 'Paypal gateway editor data', 'jet-form-builder' )
				)
			)
		);
	}

	public function failed_statuses() {
		return array( 'VOIDED' );
	}

	protected function retrieve_gateway_meta() {
		return Plugin::instance()->post_type->get_gateways( $this->data['form_id'] ?? 0 );
	}

	protected function retrieve_payment_instance() {
		$payment = $this->request(
			'v2/checkout/orders/' . $this->payment_token . '/capture',
			array(),
			null,
			$this->get_token(
				$this->current_gateway( 'client_id' ),
				$this->current_gateway( 'secret' )
			)
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

	/**
	 * @throws Gateway_Exception
	 */
	private function set_payment_status() {
		if ( empty( $this->payment_instance['status'] ) ) {
			throw new Gateway_Exception( 'Empty payment status' );
		}

		$this->set_post_meta( 'status', $this->payment_instance['status'] );
	}

	private function set_payer() {
		if ( empty( $this->payment_instance['payer'] ) ) {
			return;
		}
		$this->set_post_meta( 'payer', array(
			'first_name' => $this->payment_instance['payer']['name']['given_name'] ?? '',
			'last_name'  => $this->payment_instance['payer']['name']['surname'] ?? '',
			'email'      => $this->payment_instance['payer']['email_address'] ?? '',
		) );
	}

	private function set_payment_amount() {
		if ( empty( $this->payment_instance['purchase_units'][0]['payments']['captures'] ) ) {
			return;
		}
		$this->set_post_meta(
			'amount',
			$this->payment_instance['purchase_units'][0]['payments']['captures'][0]['amount'] ?? 0
		);
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
	 * @throws Action_Exception
	 */
	public function after_actions( Action_Handler $action_handler ) {

		if ( ! $this->set_gateway_data() ) {
			return;
		}

		$order = ( new Paypal_Pay_Now_Action() )
			->set_token( $this->order_token )
			->set_app_context( array(
				'return_url' => $this->get_refer_url( self::SUCCESS_TYPE ),
				'cancel_url' => $this->get_refer_url( self::FAILED_TYPE ),
			) )
			->set_units( array(
				$this->order_id => array(
					'currency_code' => $this->options['currency'],
					'value'         => $this->price,
				)
			) );

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
			if ( empty( $link['rel'] ) || 'approve' !== $link['rel'] ) {
				continue;
			}

			$this->get_action_handler()->add_response( array(
				'redirect' => $link['href']
			) );
			break;
		}
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

		set_transient( $hash, $token, 7 * HOUR_IN_SECONDS );

		return $token;

	}

}
