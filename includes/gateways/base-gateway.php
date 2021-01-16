<?php


namespace Jet_Form_Builder\Gateways;


abstract class Base_Gateway {

	protected $payment_id;
	protected $data;

	/**
	 * Returns current gateway ID
	 *
	 * @return [type] [description]
	 */
	abstract public function get_id();

	/**
	 * Returns current gateway name
	 *
	 * @return [type] [description]
	 */
	abstract public function get_name();

	/**
	 * Execute actions or something else when payment is success
	 *
	 * @return [type] [description]
	 */
	abstract public function on_success_payment();

	abstract public function options_list();

	abstract public function before_actions( $action_handler );

	abstract public function after_actions( $action_handler );

	public function set_payment_id() {
		$this->payment_id = esc_attr( $_GET['token'] );

		return $this;
	}

	public function set_data() {
		$this->data = $this->get_form_by_payment_id( $this->payment_id );

		return $this;
	}

	/**
	 * Returns form data by payment ID
	 *
	 * @param  [type] $payment [description]
	 *
	 * @return [type]          [description]
	 */
	public function get_form_by_payment_id( $payment = null ) {

		if ( ! $payment ) {
			return;
		}

		global $wpdb;
		$row = $wpdb->get_row( "SELECT * FROM $wpdb->postmeta WHERE meta_key = '_jet_gateway_data' AND meta_value LIKE '%$payment%'", ARRAY_A );

		if ( empty( $row ) ) {
			return;
		}

		$data = $row['meta_value'];

		return maybe_unserialize( $data );

	}
}