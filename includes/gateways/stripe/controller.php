<?php


namespace Jet_Form_Builder\Gateways\Stripe;


use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Base_Gateway;
use Jet_Form_Builder\Gateways\Gateway_Manager;
use Jet_Form_Builder\Gateways\Stripe\Api_Methods\Checkout_Session;
use Jet_Form_Builder\Plugin;

class Controller extends Base_Gateway {

	public function __construct() {
		add_action( 'wp_enqueue_scripts', array( $this, 'add_stripe_scripts' ) );
	}

	public function get_id() {
		return 'stripe';
	}

	public function get_name() {
		return __( 'Stripe Checkout', 'jet-form-builder' );
	}

	public function options_list() {
		return array( 'public', 'secret', 'currency' );
	}

	protected function failed_statuses() {
		return array( 'unpaid' );
	}


	protected function set_gateway_data_on_result() {
		$this->gateways_meta = Plugin::instance()->post_type->get_gateways( $this->data['form_id'] );

		try {
			$this->set_current_gateway_options();
			$this->set_payment_status();

		} catch ( Gateway_Exception $exception ) {
			return false;
		}

		return true;
	}

	protected function set_payment_status() {
		$payment = $this->request( array(), '/' . $this->data['session_id'], false );

		if ( isset( $payment['error'] ) ) {
			throw new Gateway_Exception( $payment['error']['message'] );
		}

		if ( empty( $payment['payment_status'] ) ) {
			throw new Gateway_Exception( 'Empty payment status' );
		}

		$this->data['status'] = $payment['payment_status'];
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
		$session = $this->get_checkout_session( array(
			'success_url' => $this->get_refer_url( 'success', $action_handler ),
			'cancel_url'  => $this->get_refer_url( 'cancel', $action_handler ),
		) );

		if ( ! $session || isset( $session['error'] ) ) {
			return;
		}

		update_post_meta(
			$this->order_id,
			self::GATEWAY_META_KEY,
			json_encode( array(
				'session_id'  => $session['id'],
				'order_token' => $this->order_token,
				'form_id'     => $action_handler->form_id,
				'form_data'   => $action_handler->request_data,
			) )
		);

		$action_handler->add_response( array(
			'stripe_session_id' => $session['id'],
			'stripe_public_key' => $this->options['public']
		) );
	}

	public function get_checkout_session( $params ) {
		return $this->request( array_merge( array(
			'mode'                 => 'payment',
			'payment_method_types' => array( 'card' ),
			'line_items'           => array(
				array(
					'quantity' => 1,
					'amount'   => $this->price,
					'currency' => $this->options['currency'],
					'name'     => $this->get_name_payment()
				),
			),
		), $params ) );
	}

	public function get_name_payment() {
		return get_option( 'blogname' ) . ' ' . __( 'payment', 'jet-form-builder' );
	}

	public function request( $params, $endpoint = '', $post = true ) {
		if ( empty( $this->options['secret'] ) ) {
			return false;
		}

		$checkout = new Checkout_Session( $this->options['secret'] );

		$checkout->create( $params, $endpoint, $post );

		return $checkout->get_response( 'create' );
	}

	public function add_stripe_scripts() {
		wp_enqueue_script(
			'jet-form-builder-stripe-frontend',
			'https://js.stripe.com/v3/',
		);
	}

	protected function get_price( $price ) {
		return absint( $price ) * 100;
	}
}