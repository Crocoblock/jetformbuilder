<?php


namespace Jet_Form_Builder\Gateways\Stripe;


use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Form_Messages\Manager;
use Jet_Form_Builder\Gateways\Base_Gateway;
use Jet_Form_Builder\Gateways\Stripe\Api_Methods\Checkout_Session;
use Jet_Form_Builder\Plugin;

class Controller extends Base_Gateway {

	protected $token_query_name = 'order_token';

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

	protected function retrieve_gateway_meta() {
		return Plugin::instance()->post_type->get_gateways( $this->data['form_id'] );
	}

	protected function retrieve_payment_instance() {
		return $this->request( array(), '/' . $this->data['payment_id'], false );
	}

	protected function set_gateway_data_on_result() {
		try {
			$this->set_payment_status();
			$this->set_amount();
			$this->set_customer_details();

		} catch ( Gateway_Exception $exception ) {
			return false;
		}

		return true;
	}

	protected function set_payment_status() {

		if ( isset( $this->payment_instance['error'] ) ) {
			throw new Gateway_Exception( $this->payment_instance['error']['message'] );
		}

		if ( empty( $this->payment_instance['payment_status'] ) ) {
			throw new Gateway_Exception( 'Empty payment status' );
		}

		$this->data['status'] = $this->payment_instance['payment_status'];
	}

	private function set_amount() {
		$this->data['amount'] = $this->payment_instance['amount_total'];
	}

	private function set_customer_details() {
		$this->data['payer']['email'] = $this->payment_instance['customer_details']['email'];
	}

	/**
	 * Process gateway payment
	 *
	 * @param $action_handler
	 *
	 * @return void [description]
	 * @throws Action_Exception
	 */
	public function after_actions( Action_Handler $action_handler ) {

		if ( ! $this->set_gateway_data( $action_handler ) ) {
			return;
		}
		$additional_args = array( 'order_token' => $this->order_token );

		$payment = $this->get_checkout_session( array(
			'success_url' => $this->get_refer_url( self::SUCCESS_TYPE, $additional_args ),
			'cancel_url'  => $this->get_refer_url( self::FAILED_TYPE, $additional_args ),
		) );

		if ( ! $payment || isset( $payment['error'] ) ) {
			throw new Action_Exception( Manager::dynamic_error( $payment['error']['message'] ) );
		}

		update_post_meta(
			$this->order_id,
			self::GATEWAY_META_KEY,
			json_encode( array(
				'payment_id'  => $payment['id'],
				'order_token' => $this->order_token,
				'form_id'     => $action_handler->form_id,
				'form_data'   => $action_handler->request_data,
			) )
		);

		$action_handler->add_response( array(
			'stripe_session_id' => $payment['id'],
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
		if ( empty( $this->gateways_meta[ $this->get_id() ]['secret'] ) ) {
			return false;
		}
		$secret = $this->gateways_meta[ $this->get_id() ]['secret'];

		$checkout = new Checkout_Session( $secret );

		$checkout->create( $params, $endpoint, $post );

		return $checkout->get_response( 'create' );
	}

	public function add_stripe_scripts() {
		wp_enqueue_script(
			'jet-form-builder-stripe-frontend',
			'https://js.stripe.com/v3/'
		);
	}

	protected function get_price( $price ) {
		return absint( $price ) * 100;
	}

	protected function query_order_token() {
		return $this->order_id . '-' . md5( $this->order_id . $this->action_handler->form_id );
	}
}