<?php


namespace Jet_Form_Builder\Gateways\Stripe;


use Jet_Form_Builder\Gateways\Base_Gateway;
use Jet_Form_Builder\Gateways\Stripe\Api_Methods\Checkout_Session;

class Controller extends Base_Gateway {

	private $auth = 'sk_test_51I9XJcAMNPQUZTQG19WARwUBpmHxB5jQYfqMulWgACA4pOqFbRuqVQsoQL0jNx3RKHWoWJ30m0nGryaod6eNOvT0001QLWwdmK';

	public function __construct() {
		//add_action( 'init', array( $this, 'request' ) );
		//add_action( 'wp_enqueue_scripts', array( $this, 'add_stripe_scripts' ) );
	}

	public function get_id() {
		return 'stripe';
	}

	public function get_name() {
		return __( 'Stripe Checkout', 'jet-form-builder' );
	}

	public function request() {
		$checkout = new Checkout_Session( $this->auth );

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

		var_dump( $checkout->get_response( 'create' ) );
		die;
	}

	public function add_stripe_scripts() {
		wp_enqueue_script();
	}
}