<?php

namespace Jet_Form_Builder\Gateways;

use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Gateways\Stripe;
use Jet_Form_Builder\Gateways\Paypal;

class Gateway_Manager {

	use Instance_Trait;

	private $_gateways = false;

	public $message = null;
	public $data = null;

	/**
	 * Register gateways components
	 */
	public function __construct() {

		add_action( 'jet-form-builder/editor/meta-boxes', array( $this, 'register_gateways_metabox' ) );
		add_action( 'jet-form-builder/editor/assets', array( $this, 'register_gateways_assets' ) );

		$this->get_gateways();

		if ( isset( $_GET['jet_gateway'] ) ) {
			add_action( 'wp_loaded', array( $this, 'catch_payment_result' ) );
		}

		add_action( 'add_meta_boxes', array( $this, 'maybe_register_gateway_meta' ) );

		//add_filter( 'jet-engine/forms/handler/has-gateways', array( $this, 'check_form_gateways' ), 10, 2 );
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

	/**
	 * Maybe register gateway meta box for order posts
	 *
	 * @return [type] [description]
	 */
	public function maybe_register_gateway_meta() {

		$post_id = get_the_ID();
		$data    = get_post_meta( $post_id, '_jet_gateway_data', true );

		if ( empty( $data ) ) {
			return;
		}

		add_meta_box(
			'jet-engine-payment',
			__( 'Payment settings', 'jet-engine' ),
			array( $this, 'render_meta_box' ),
			get_post_type(),
			'side',
			'default',
			$data
		);

	}

	public function add_data( $data ) {
		$this->data = $data;
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
	 * @return [type] [description]
	 */
	public function catch_payment_result() {
		do_action( 'jet-form-builder/gateways/success/' . $_GET['jet_gateway'] );
		$token = $_GET['token'];
	}

	/**
	 * Render payment metabox
	 *
	 * @param  [type] $post_id [description]
	 * @param  [type] $metabox [description]
	 *
	 * @return [type]          [description]
	 */
	public function render_meta_box( $post_id, $metabox ) {
		$data = $metabox['args'];
		echo '<table>';
		$this->iterate_data( $data );
		echo '</table>';
	}

	/**
	 * Iterate array data to show in meta box
	 *
	 * @param  [type] $data [description]
	 * @param string $tag [description]
	 *
	 * @return [type]       [description]
	 */
	public function iterate_data( $data, $tag = 'tr' ) {

		$row   = ( 'tr' === $tag ) ? 'tr' : 'div';
		$title = ( 'tr' === $tag ) ? 'td' : 'b';
		$val   = ( 'tr' === $tag ) ? 'td' : 'span';
		$sep   = ( 'tr' === $tag ) ? '' : ': ';

		foreach ( $data as $key => $value ) {

			if ( 'form_id' === $key ) {
				$key   = 'form';
				$url   = get_edit_post_link( $value );
				$value = sprintf(
					'<a href="%1$s" target="_blank">%2$s</a>',
					$url,
					get_the_title( $value )
				);
			}

			echo '<' . $row . '>';
			echo '<' . $title . ' valign="top">';
			echo $key . $sep;
			echo '</' . $title . '>';
			echo '<' . $val . '>';
			if ( ! is_array( $value ) ) {
				if ( 'form_id' ) {
					echo $value;
				}
			} else {
				$this->iterate_data( $value, 'div' );
			}
			echo '</' . $val . '>';
			echo '<' . $row . '>';

		}
	}


	/**
	 * Returns all registered gateways
	 *
	 * @return [type] [description]
	 */
	public function get_gateways() {

		if ( false === $this->_gateways ) {
			$this->_gateways = array(
				new Paypal\Controller(),
				new Stripe\Controller(),
			);
		}

		return $this->_gateways;

	}

	public function get_gateways_for_js() {
		$result   = [];
		$gateways = $this->get_gateways();

		foreach ( $gateways as $gateway ) {
			$result[] = array(
				'value' => $gateway->get_id(),
				'label' => $gateway->get_name()
			);
		}

		return $result;
	}

	/**
	 * Check form gateways
	 *
	 * @return [type] [description]
	 */
	public function check_form_gateways( $res, $form_id ) {

		$gateways = $this->get_gateways( $form_id );

		if ( ! empty( $gateways ) && 'none' !== $gateways['gateway'] ) {
			return true;
		} else {
			return false;
		}

	}

}
