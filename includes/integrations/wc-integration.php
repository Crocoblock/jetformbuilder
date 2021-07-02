<?php


namespace Jet_Form_Builder\Integrations;


class Wc_Integration {

	public $meta_key = '_jf_wc_details';
	public $ajax_action = 'jet_fb_woo_save_details';
	public $form_data_key = 'jfb_form_data';
	public $form_id_key = 'jfb_form_id';

	public function __construct() {
		add_action( "wp_ajax_{$this->ajax_action}", array( $this, 'save_details' ) );
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

		return apply_filters( 'jet-fb/wc-integration/checkout-fields', $result );
	}

}