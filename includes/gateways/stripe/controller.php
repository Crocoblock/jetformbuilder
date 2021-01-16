<?php


namespace Jet_Form_Builder\Gateways\Stripe;


use Jet_Form_Builder\Gateways\Base_Gateway;
use Jet_Form_Builder\Gateways\Stripe\Api_Methods\Checkout_Session;

class Controller extends Base_Gateway {

	public function __construct() {
		//add_action( 'init', array( $this, 'request' ) );
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

	public function on_success_payment() {

	}

	public function before_actions( $action_handler ) {
		// TODO: Implement before_actions() method.
	}

	public function after_actions( $action_handler ) {
		// TODO: Implement after_actions() method.
	}

	public function request() {
		$checkout = new Checkout_Session( '' );

		$checkout->create( array(
			'mode'                 => 'payment',
			'success_url'          => 'https://example.com/success',
			'cancel_url'           => 'https://example.com/cancel',
			'payment_method_types' => array( 'card' ),
			'line_items'           => array(
				array(
					'quantity' => 2,
					'amount'   => 3400,
					'currency' => 'usd',
					'name'     => 'Custom Name'
				),
			),
		) );

		return $checkout->get_response( 'create' );
	}

	public function add_stripe_scripts() {
		wp_enqueue_script(
			'jet-form-builder-stripe-frontend',
			'https://js.stripe.com/v3/',
		);
	}
}