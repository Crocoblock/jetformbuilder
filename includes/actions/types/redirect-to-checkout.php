<?php


namespace Jet_Form_Builder\Actions\Types;

// If this file is called directly, abort.
use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Plugin;

if ( ! defined( 'WPINC' ) ) {
	die;
}

class Redirect_To_Checkout extends Base {

	public function get_id() {
		return 'redirect_to_woo_checkout';
	}

	public function get_name() {
		return __( 'Redirect to Checkout', 'jet-form-builder' );
	}

	public function dependence() {
		return class_exists( '\WooCommerce' );
	}

	/**
	 * @param array $request
	 * @param Action_Handler $handler
	 *
	 * @return void
	 * @throws Action_Exception
	 */
	public function do_action( array $request, Action_Handler $handler ) {
		if ( ! isset( $this->settings['product_id_from'] ) ) {
			throw new Action_Exception( 'failed' );
		}
		$product_id = $this->get_product_id( $request );
		$product_id = apply_filters( "jet-form-builder/action/{$this->get_id()}/product-id", absint( $product_id ) );

		if ( ! $product_id ) {
			throw ( new Action_Exception( 'Undefined product ID' ) )->dynamic_error();
		}

		if ( 'product' !== get_post_type( $product_id ) ) {
			throw ( new Action_Exception( 'The post is not a product' ) )->dynamic_error();
		}

		$cart_item_data = array(
			Plugin::instance()->wc->form_data_key       => $request,
			Plugin::instance()->wc->form_id_key         => $handler->form_id,
			Plugin::instance()->wc->action_settings_key => $this->settings
		);

		WC()->cart->empty_cart();

		try {
			WC()->cart->add_to_cart( ...apply_filters(
				"jet-form-builder/action/{$this->get_id()}/add-to-cart", array(
				$product_id,
				1,
				0,
				array(),
				$cart_item_data
			) ) );
		} catch ( \Exception $exception ) {
			throw ( new Action_Exception( $exception->getMessage() ) )->dynamic_error();
		}

		$checkout_fields_map = apply_filters( "jet-form-builder/action/{$this->get_id()}/fields-map", array() );

		foreach ( $this->settings as $key => $value ) {
			if ( false !== strpos( $key, 'wc_fields_map__' ) && ! empty( $value ) ) {
				$checkout_fields_map[ str_replace( 'wc_fields_map__', '', $key ) ] = $value;
			}
		}

		if ( ! empty( $checkout_fields_map ) ) {
			$checkout_fields = array();

			foreach ( $checkout_fields_map as $checkout_field => $form_field ) {
				if ( isset( $request[ $form_field ] ) ) {
					$checkout_fields[ $checkout_field ] = $request[ $form_field ];
				}
			}

			if ( ! empty( $checkout_fields ) ) {
				WC()->session->set( Plugin::instance()->wc->checkout_fields_session, $checkout_fields );
			}
		}

		$checkout = wc_get_checkout_url();

		if ( ! $request['__is_ajax'] ) {
			wp_safe_redirect( $checkout );
			die();
		} else {
			$handler->add_response( array(
				'redirect' => $checkout
			) );
		}

	}

	private function get_product_id( $request ) {
		switch ( $this->settings['product_id_from'] ) {
			case 'manual':
				return $this->settings['product_id_manual'];
			case 'field':
				if ( isset( $this->settings['product_id_field'] )
				     && isset( $request[ $this->settings['product_id_field'] ] )
				) {
					return $request[ $this->settings['product_id_field'] ];
				}
		}

		return 0;
	}

	public function self_script_name() {
		return 'JetActionWooCheckout';
	}

	public function action_data() {
		$form_id         = get_the_ID();
		$checkout_fields = Plugin::instance()->wc->get_checkout_fields();
		$details         = Plugin::instance()->wc->get_details_schema( $form_id );
		$nonce           = wp_create_nonce( Plugin::instance()->wc->meta_key );

		return array(
			'action'          => Plugin::instance()->wc->ajax_action,
			'wc_fields'       => $checkout_fields,
			'post_id'         => $form_id,
			'details'         => $details,
			'nonce'           => $nonce,
			'product_id_from' => array(
				array(
					'value' => 'field',
					'label' => __( 'Form Field', 'jet-form-builder' )
				),
				array(
					'value' => 'manual',
					'label' => __( 'Manual Input', 'jet-form-builder' )
				)
			)
		);
	}

	public function editor_labels_help() {
		return array(
			'wc_price'         => esc_html__(
				'Select field to get total price from. If not selected price will be get from post meta value.',
				'jet-form-builder'
			),
			'wc_order_details' => esc_html__(
				'Set up info you want to add to the WooCommerce orders and e-mails',
				'jet-form-builder'
			),
			'wc_fields_map'    => __(
				'Connect WooCommerce checkout fields to appropriate form fields. 
				This allows you to pre-fill WooCommerce checkout fields after redirect to checkout.',
				'jet-form-builder'
			),
		);
	}

	/**
	 * @return array
	 */
	public function editor_labels() {
		return array(
			'product_id_from'          => __( 'Get product ID from', 'jet-form-builder' ),
			'product_id_manual'        => __( 'Input product ID', 'jet-form-builder' ),
			'product_id_field'         => __( 'Product ID field', 'jet-form-builder' ),
			'wc_price'                 => __( 'WooCommerce Price field', 'jet-form-builder' ),
			'wc_order_details'         => __( 'WooCommerce order details', 'jet-form-builder' ),
			'wc_fields_map'            => __( 'WooCommerce checkout fields map', 'jet-form-builder' ),
			'wc_details__type'         => __( 'Type', 'jet-form-builder' ),
			'wc_details__label'        => __( 'Label', 'jet-form-builder' ),
			'wc_details__date_format'  => __( 'Date format', 'jet-form-builder' ),
			'wc_details__field'        => __( 'Select form field', 'jet-form-builder' ),
			'wc_details__link_label'   => __( 'Link text', 'jet-form-builder' ),
			'wc_heading_order_details' => __( 'Heading for Order Details', 'jet-form-builder' )
		);
	}
}