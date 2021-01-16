<?php

namespace Jet_Form_Builder\Gateways;

use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Gateways\Stripe;
use Jet_Form_Builder\Gateways\Paypal;
use Jet_Form_Builder\Plugin;

class Gateway_Manager {

	const BEFORE_ACTIONS_CALLABLE = 'before_send_actions';
	const AFTER_ACTIONS_CALLABLE = 'after_send_actions';

	use Instance_Trait;

	private $_gateways = array();
	private $gateways_form_data = array();

	public $message = null;
	public $data = null;

	/**
	 * Register gateways components
	 */
	public function __construct() {

		$this->register_gateways();
		$this->catch_payment_result();
	}

	/**
	 * Returns all registered gateways
	 *
	 * @return void [description]
	 */
	public function register_gateways() {

		$this->_gateways = array(
			new Paypal\Controller(),
			new Stripe\Controller(),
		);
	}

	public function before_send_actions( $action_handler ) {
		$gateways = $this->get_form_gateways_by_id( $action_handler->form_id );

		$this->save_gateways_form_data( $gateways );

		if ( empty( $gateways ) || empty( $gateways['gateway'] ) || 'none' === $gateways['gateway'] ) {
			return;
		}

		$this->get_gateway_controller( $gateways['gateway'] )->before_actions( $action_handler );
	}

	public function after_send_actions( $action_handler ) {
		$gateways = $this->gateways_form_data;

		if ( empty( $gateways ) || empty( $gateways['gateway'] ) || 'none' === $gateways['gateway'] ) {
			return;
		}

		$this->get_gateway_controller( $gateways['gateway'] )->after_actions( $action_handler );
	}


	/**
	 * Apply macros in string
	 *
	 * @return [type] [description]
	 */
	public function apply_macros( $string = null ) {

		return preg_replace_callback( '/%(.*?)%/', function ( $matches ) {
			switch ( $matches[1] ) {
				case 'gateway_amount':
					$amount = ! empty( $this->data['amount'] ) ? $this->data['amount'] : false;

					return ! empty( $amount ) ? $amount['value'] . ' ' . $amount['currency_code'] : '';

				case 'gateway_status':
					return ! empty( $this->data['status'] ) ? $this->data['status'] : '';

				default:
					$form_data = ! empty( $this->data['form_data'] ) ? $this->data['form_data'] : array();

					return ! empty( $form_data[ $matches[1] ] ) ? $form_data[ $matches[1] ] : '';
			}

		}, $string );

	}

	public function add_data( $data ) {
		$this->data = $data;
	}

	public function save_gateways_form_data( $data ) {
		$this->gateways_form_data = $data;
	}

	public function add_message( $message ) {

		$this->message = $message;

		if ( ! $this->data || ! isset( $this->data['form_id'] ) ) {
			return;
		}

		$form_id = $this->data['form_id'];

		add_filter( 'jet-form-builder/pre-render/' . $form_id, function ( $res ) use ( $form_id ) {
			echo $this->apply_macros( $this->message );

			return true;
		} );
	}

	/**
	 * Catch processed payment results
	 *
	 * @return void [description]
	 */
	public function catch_payment_result() {
		if ( ! isset( $_GET['jet_gateway'] ) ) {
			return;
		}

		add_action( 'wp_loaded', function () {
			$controller = $this->get_gateway_controller( $_GET['jet_gateway'] );

			if ( ! ( $controller instanceof Base_Gateway ) ) {
				return;
			}

			$controller->set_payment_id()
			           ->set_data()
			           ->on_success_payment();
		} );
	}


	public function get_gateway_controller( $type = false ) {
		if ( ! $type ) {
			return false;
		}

		foreach ( $this->_gateways as $gateway ) {
			if ( $gateway->get_id() === $type ) {
				return $gateway;
			}
		}

		return false;
	}

	public function get_gateways_for_js() {
		$result = [];

		foreach ( $this->_gateways as $gateway ) {
			$result[] = array(
				'value' => $gateway->get_id(),
				'label' => $gateway->get_name()
			);
		}

		return $result;
	}

	/**
	 * Returns gatewyas config for current form
	 *
	 * @param  [type] $post_id [description]
	 *
	 * @return [type]          [description]
	 */
	public function get_form_gateways_by_id( $form_id = null ) {

		if ( ! $form_id ) {
			$form_id = get_the_ID();
		}
		$default = array( 'gateway' => 'none' );

		$meta = Plugin::instance()->post_type->get_gateways( $form_id );

		return is_array( $meta ) ? $meta : $default;
	}

	/**
	 * Check form gateways
	 *
	 * @return [type] [description]
	 */
	public function check_form_gateways( $res, $form_id ) {

		$gateways = $this->get_form_gateways_by_id( $form_id );

		if ( ! empty( $gateways ) && 'none' !== $gateways['gateway'] ) {
			return true;
		} else {
			return false;
		}

	}

}
