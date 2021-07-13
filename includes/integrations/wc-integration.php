<?php


namespace Jet_Form_Builder\Integrations;


use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Plugin;

class Wc_Integration {

	public $meta_key = '_jf_wc_details';
	public $ajax_action = 'jet_fb_woo_save_details';
	public $form_data_key = 'jfb_form_data';
	public $form_id_key = 'jfb_form_id';
	public $checkout_fields_session = 'jet_fb_checkout_fields';
	public $action_settings_key = 'jfb_action_settings';

	public function __construct() {
		add_action( "wp_ajax_{$this->ajax_action}", array( $this, 'save_details' ) );

		add_filter( 'woocommerce_checkout_get_value', array( $this, 'maybe_set_checkout_defaults' ), 10, 2 );
		add_action( 'woocommerce_thankyou', array( $this, 'order_details' ), 0 );
		add_action( 'woocommerce_view_order', array( $this, 'order_details' ), 0 );
		add_action( 'woocommerce_email_order_meta', array( $this, 'email_order_details' ), 0, 3 );
		add_action( 'woocommerce_admin_order_data_after_shipping_address', array( $this, 'admin_order_details' ) );
		add_action( 'woocommerce_checkout_order_processed', array( $this, 'process_order' ), 10, 3 );
	}

	public function save_details() {
		$nonce = ! empty( $_REQUEST['nonce'] ) ? $_REQUEST['nonce'] : false;

		if ( ! $nonce || ! wp_verify_nonce( $nonce, $this->meta_key ) ) {
			wp_send_json_error( array( 'message' => esc_html__( 'Link is expired', 'jet-form-builder' ) ) );
		}

		$post_id = ! empty( $_REQUEST['post_id'] ) ? absint( $_REQUEST['post_id'] ) : false;

		if ( ! $post_id || ! current_user_can( 'edit_post', $post_id ) ) {
			wp_send_json_error( array( 'message' => esc_html__( 'You don`t have access to this post', 'jet-form-builder' ) ) );
		}

		$details = isset( $_REQUEST['details'] ) ? $_REQUEST['details'] : array();

		update_post_meta( $post_id, $this->meta_key, $details );

		wp_send_json_success();
	}


	/**
	 * Returns details config for current form
	 *
	 * @param null $post_id
	 *
	 * @return false|mixed
	 */
	public function get_details_schema( $post_id = null ) {
		if ( ! $post_id ) {
			$post_id = get_the_ID();
		}

		if ( ! $post_id ) {
			return false;
		}

		return get_post_meta( $post_id, $this->meta_key, true );
	}

	/**
	 * Returns checkout fields list
	 */
	public function get_checkout_fields() {
		$result = array(
			'billing_first_name',
			'billing_last_name',
			'billing_email',
			'billing_phone',
			'billing_company',
			'billing_country',
			'billing_address_1',
			'billing_address_2',
			'billing_city',
			'billing_state',
			'billing_postcode',
			'shipping_first_name',
			'shipping_last_name',
			'shipping_company',
			'shipping_country',
			'shipping_address_1',
			'shipping_address_2',
			'shipping_city',
			'shipping_state',
			'shipping_postcode',
			'order_comments',
		);

		return apply_filters( 'jet-form-builder/wc-integration/checkout-fields', $result );
	}

	/**
	 * Set checkout default fields values for checkout forms
	 */
	public function maybe_set_checkout_defaults( $value, $field ) {

		$fields = WC()->session->get( $this->checkout_fields_session );

		if ( ! empty( $fields ) && ! empty( $fields[ $field ] ) ) {
			return $fields[ $field ];
		} else {
			return $value;
		}

	}

	/**
	 * Show related order details on order page
	 *
	 * @param $order
	 * @param $sent_to_admin
	 * @param $plain_text
	 */
	public function email_order_details( $order, $sent_to_admin, $plain_text ) {

		if ( $plain_text ) {
			$template = 'email-order-details-plain';
		} else {
			$template = 'email-order-details-html';
		}

		$this->order_details_template( $order->get_id(), $template );

	}

	/**
	 * Admin order details
	 *
	 * @param $order
	 */
	public function admin_order_details( $order ) {
		$order_id = $order->get_id();
		$this->order_details( $order_id );
	}

	/**
	 * Show related order details on order page
	 *
	 * @param $order_id
	 */
	public function order_details( $order_id ) {
		$this->order_details_template( $order_id );
	}

	/**
	 * Show related order details on order page
	 *
	 * @param $order_id
	 * @param string $template
	 *
	 * @return void
	 */
	public function order_details_template( $order_id, $template = 'order-details' ) {

		$details = $this->get_order_details( $order_id );
		$details = apply_filters( 'jet-form-builder/wc-integration/order-details', $details, $order_id );

		$custom_template = apply_filters(
			'jet-form-builder/wc-integration/order-details-template',
			'', $details, $order_id, $template
		);

		if ( $custom_template ) {
			echo $custom_template;
		} else {
			include Tools::get_global_template( 'wc-integration/' . $template . '.php' );
		}
	}

	/**
	 * Get order details info
	 *
	 * @param $order_id
	 *
	 * @return array
	 */
	public function get_order_details( $order_id ) {
		$meta = get_post_meta( $order_id, $this->meta_key, true );

		if ( empty( $meta ) ) {
			return array();
		}

		$form_id = ! empty( $meta['form_id'] ) ? $meta['form_id'] : false;

		if ( ! $form_id ) {
			return array();
		}

		return $this->prepare_order_details( $form_id, $meta );
	}


	/**
	 * Get order details for passed form, booking and form data
	 *
	 * @param null $form_id
	 * @param array $form_data
	 *
	 * @return array
	 */
	public function prepare_order_details( $form_id = null, $meta = array() ) {

		$details = $this->get_details_schema( $form_id );

		if ( false === $details ) {
			return array();
		}

		$form_data = ! empty( $meta['form_data'] ) ? $meta['form_data'] : array();
		$settings  = ! empty( $meta['settings'] ) ? $meta['settings'] : array();
		$result    = array();

		foreach ( $details as $item ) {
			switch ( $item['type'] ) {
				case 'field':
					$field = isset( $item['field'] ) ? $item['field'] : false;

					if ( $field ) {
						$value = isset( $form_data[ $field ] ) ? $form_data[ $field ] : '';

						if ( is_array( $value ) ) {
							$value = implode( ', ', $value );
						}

						$result[] = array(
							'key'     => $item['label'],
							'display' => $value,
						);
					}
					break;
			}
		}

		$result['heading'] = ! empty( $settings['wc_heading_order_details'] )
			? $settings['wc_heading_order_details']
			: __( 'Order Details', 'jet-form-builder' );

		return $result;
	}

	/**
	 * Process new order creation
	 *
	 * @param  [type] $order [description]
	 * @param  [type] $data  [description]
	 *
	 * @return [type]        [description]
	 */
	public function process_order( $order_id, $data, $order ) {

		$cart = WC()->cart->get_cart_contents();

		foreach ( $cart as $item ) {
			if ( ! empty( $item[ $this->form_id_key ] ) ) {
				$this->set_order_meta(
					$order_id,
					$order,
					$item
				);
			}
		}
	}

	/**
	 * Store form ID and details into order meta
	 *
	 * @param $order_id
	 * @param $order
	 * @param $cart_item
	 */
	public function set_order_meta( $order_id, $order, $cart_item ) {

		$saving_keys = array(
			'form_id'   => Plugin::instance()->wc->form_id_key,
			'form_data' => Plugin::instance()->wc->form_data_key,
			'settings'  => Plugin::instance()->wc->action_settings_key,
		);

		$meta = array();

		foreach ( $saving_keys as $key_name => $cart_key ) {
			if ( ! isset( $cart_item[ $cart_key ] ) || ! $cart_item[ $cart_key ] ) {
				return;
			}
			$meta[ $key_name ] = $cart_item[ $cart_key ];
		}

		update_post_meta( $order_id, $this->meta_key, $meta );
	}

}