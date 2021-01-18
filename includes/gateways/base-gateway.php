<?php


namespace Jet_Form_Builder\Gateways;


use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;

abstract class Base_Gateway {

	const GATEWAY_META_KEY = '_jet_gateway_data';

	protected $payment_id;
	protected $data;
	protected $action_handler;
	protected $order_id;
	protected $gateways_meta;
	protected $price_field;
	protected $price;
	protected $options;
	protected $redirect;

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

	abstract public function options_list();

	abstract public function after_actions( Action_Handler $action_handler );

	abstract protected function set_gateway_data_on_result();

	abstract protected function failed_statuses();

	/**
	 * Store payment status into order and show success/failed message
	 * @return [type] [description]
	 */
	public function on_success_payment() {

		if ( ! $this->set_gateway_data_on_result() ) {
			var_dump(234234 ); die;
			return;
		}

		var_dump(422222 ); die;
		$this->data['date'] = date_i18n( 'F j, Y, H:i' );

		$this->data['gateway'] = $this->get_name();

		update_post_meta( $this->data['order_id'], self::GATEWAY_META_KEY, $this->data );

		$this->try_do_actions();
	}

	/**
	 * Execute actions or something else when payment is success
	 *
	 * @return [type] [description]
	 */
	protected function try_do_actions() {
		Gateway_Manager::instance()->add_data( $this->data );

		try {
			if ( in_array( $this->data['status'], $this->failed_statuses() ) ) {
				$this->process_status( 'failed' );
			} else {
				$this->process_status( 'success' );
			}
		} catch ( Action_Exception $exception ) {
			//
		}

	}

	final public function set_payment_id() {
		$this->payment_id = $this->get_payment_id();

		if ( empty( $this->payment_id ) ) {
			throw new Gateway_Exception( 'Invalid payment token.' );
		}

		return $this;
	}

	final public function set_data() {
		$this->data = $this->get_form_data();

		return $this;
	}

	/**
	 * Prevent unnecessary notifications processing before form is send.
	 *
	 * @param  $action_handler
	 *
	 * @param $keep_these
	 *
	 * @return void [description]
	 */
	public function before_actions( $action_handler, $keep_these ) {

		$action_handler->unregister_action( 'redirect_to_page' );

		if ( empty( $action_handler->get_all() ) ) {
			return;
		}

		foreach ( $action_handler->get_all() as $index => $action ) {

			if ( 'insert_post' === $action->get_id() ) {
				continue;
			}

			if ( 'redirect_to_page' === $action->get_id() ) {
				$this->redirect = $action;
			}

			if ( ! in_array( $index, $keep_these ) ) {
				$action_handler->unregister_action( $index );
			}
		}
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

	protected function set_order_id() {
		$response = $this->action_handler->response_data;
		if ( ! isset( $response['inserted_post_id'] )
		     || empty( $response['inserted_post_id'] ) ) {

			throw new Gateway_Exception( 'There is not inserted_post_id' );
		}
		$this->order_id = $response['inserted_post_id'];
	}


	protected function set_price_field() {
		if ( isset( $this->gateways_meta['price_field'] ) && ! empty( $this->gateways_meta['price_field'] ) ) {
			$this->price_field = esc_attr( $this->gateways_meta['price_field'] );
		}

		$this->price_field = apply_filters( 'jet-form-builder/gateways/price-field', $this->price_field, $this->action_handler );

		if ( ! $this->price_field ) {
			throw new Gateway_Exception( 'Invalid price field' );
		}
	}

	protected function set_price_from_filed() {
		if ( isset( $this->action_handler->request_data[ $this->price_field ] ) ) {
			$this->price = $this->get_price( $this->action_handler->request_data[ $this->price_field ] );
		}

		if ( ! $this->price ) {
			throw new Gateway_Exception( 'Empty price field' );
		}
	}

	protected function set_current_gateway_options() {
		$gateway = $this->gateways_meta[ $this->get_id() ];

		foreach ( $this->options_list() as $option ) {
			if ( ! isset( $gateway[ $option ] ) || empty( $gateway[ $option ] ) ) {
				throw new Gateway_Exception( 'Invalid gateway options' );
			}
			$this->options[ $option ] = esc_attr( $gateway[ $option ] );
		}
	}

	protected function set_gateway_data( $action_handler ) {
		$this->gateways_meta  = Gateway_Manager::instance()->gateways();
		$this->action_handler = $action_handler;

		try {
			$this->set_order_id();
			$this->set_price_field();
			$this->set_price_from_filed();
			$this->set_current_gateway_options();

		} catch ( Gateway_Exception $exception ) {
			var_dump( $exception->getMessage() );

			return false;
		}

		return true;
	}

	protected function get_price( $price ) {
		return absint( $price );
	}

	protected function get_refer_url( $type, $refer ) {

		$success_redirect = ! empty( $this->gateways_meta['use_success_redirect'] ) ? $this->gateways_meta['use_success_redirect'] : false;
		$success_redirect = filter_var( $success_redirect, FILTER_VALIDATE_BOOLEAN );

		if ( $success_redirect && $this->redirect && 'success' === $type ) {
			$type = ! empty( $this->redirect['redirect_type'] ) ? $this->redirect['redirect_type'] : 'static_page';

			if ( 'static_page' === $type ) {
				$to_page = ! empty( $this->redirect['redirect_page'] ) ? $this->redirect['redirect_page'] : false;
				$refer   = ! empty( $to_page ) ? get_permalink( $to_page ) : false;
			} else {
				$refer = ! empty( $this->redirect['redirect_url'] ) ? $this->redirect['redirect_url'] : false;
			}
		}

		return add_query_arg(
			array(
				Gateway_Manager::PAYMENT_TYPE_PARAM => $this->get_id(),
				'order_id'                          => $this->order_id,
			),
			$refer
		);
	}

	protected function get_payment_id() {
		return esc_attr( $_GET['token'] );
	}

	protected function get_form_data() {
		return $this->get_form_by_payment_id( $this->payment_id );
	}


	public function is_fail_status( $status ) {
		if ( in_array( $status, $this->failed_statuses() ) ) {
			throw new Gateway_Exception( $status );
		}
	}

}