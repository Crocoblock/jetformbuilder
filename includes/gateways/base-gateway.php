<?php


namespace Jet_Form_Builder\Gateways;


use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Form_Messages\Manager;
use Jet_Form_Builder\Form_Response\Response;
use Jet_Form_Builder\Form_Response\Types\Reload_Response;
use Jet_Form_Builder\Gateways\Gateway_Manager as GM;

abstract class Base_Gateway {

	const GATEWAY_META_KEY = '_jet_gateway_data';

	const SUCCESS_TYPE = 'success';
	const FAILED_TYPE = 'cancel';

	protected $payment_id;
	protected $payment_token;
	protected $data;
	protected $action_handler;
	protected $order_id;
	protected $gateways_meta;
	protected $price_field;
	protected $price;
	protected $options;
	protected $redirect;
	protected $order_token;

	protected $payment_instance = array();
	protected $token_query_name;

	protected $removed_query_args_on_payment = array(
		GM::PAYMENT_TYPE_PARAM,
		'order_token',
		'status',
		'PayerID'
	);

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

	abstract protected function options_list();

	abstract public function after_actions( Action_Handler $action_handler );

	abstract protected function set_gateway_data_on_result();

	abstract protected function failed_statuses();

	abstract protected function retrieve_payment_instance();

	abstract protected function retrieve_gateway_meta();

	public function set_payment_instance() {
		$this->payment_instance = $this->retrieve_payment_instance();
	}

	/**
	 * Store payment status into order and show success/failed message
	 * @return [type] [description]
	 */
	public function on_success_payment() {
		$this->set_gateway_data_on_result();
		$this->data['date'] = date_i18n( 'F j, Y, H:i' );

		$this->data['gateway'] = $this->get_name();

		update_post_meta( $this->payment_id, self::GATEWAY_META_KEY, json_encode( $this->data ) );

		$this->try_do_actions();

		$this->send_response( array(
			'status' => $this->get_status_on_payment( $this->data['status'] ),
		) );
	}

	public function get_status_on_payment( $status ) {
		if ( in_array( $status, $this->failed_statuses() ) ) {
			return Manager::dynamic_error( $this->get_meta_message( 'failed' ) );
		}

		return Manager::dynamic_success( $this->get_meta_message( 'success' ) );
	}

	public function get_meta_message( $type ) {
		if ( isset( $this->gateways_meta['messages'] ) && isset( $this->gateways_meta['messages'][ $type ] ) ) {
			return $this->apply_macros( $this->gateways_meta['messages'][ $type ] );
		}

		return Gateway_Manager::instance()->default_messages()[ $type ];
	}

	/**
	 * Execute actions or something else when payment is success
	 *
	 * @return [type] [description]
	 */
	protected function try_do_actions() {
		try {
			if ( in_array( $this->data['status'], $this->failed_statuses() ) ) {
				$this->process_status( 'failed' );
			} else {
				$this->process_status( 'success' );
			}
		} catch ( Action_Exception $exception ) {
			$this->send_response( array(
				'status' => $exception->get_form_status(),
			) );
		}
	}

	private function send_response( $args = array() ) {
		( new Response( $this->get_response_manager() ) )->init( $args )->send();
	}

	private function get_response_manager() {
		global $wp;

		return new Reload_Response( array(
			'refer'       => home_url( $wp->request ),
			'remove_args' => $this->removed_query_args_on_payment,
		) );
	}

	/**
	 * Process status notification and enqueue message
	 *
	 * @param string $type [description]
	 *
	 * @return void [type]           [description]
	 * @throws Action_Exception
	 */
	public function process_status( $type = 'success' ) {

		$settings = $this->gateways_meta;

		$keep_these = isset( $settings[ 'notifications_' . $type ] ) ? $settings[ 'notifications_' . $type ] : array();

		if ( ! empty( $keep_these ) ) {
			$notifications = new Action_Handler( $this->data['form_id'] );
			$notifications->add_request( $this->data['form_data'] );

			$notifications->unregister_action( 'redirect_to_page' );

			$all = $notifications->get_all();

			if ( empty( $all ) ) {
				return;
			}

			foreach ( $all as $index => $notification ) {
				if ( ! array_key_exists( $index, $keep_these ) ) {
					$notifications->unregister_action( $index );
				}
			}
			$notifications->run_actions();
		}

	}

	final public function set_payment_token() {
		if ( empty( $this->token_query_name ) || empty( $_GET[ $this->token_query_name ] ) ) {
			throw new Gateway_Exception( 'Empty payment token.' );
		}

		$this->payment_token = $this->get_payment_token();

		if ( empty( $this->payment_token ) ) {
			throw new Gateway_Exception( 'Invalid payment token.' );
		}

		return $this;
	}


	final public function set_gateways_meta() {
		$row_data = $this->get_form_data();

		$this->payment_id = $row_data['post_id'];
		$this->data       = Tools::decode_unserializable( $row_data['meta_value'] );

		return $this;
	}

	final public function set_form_gateways_meta() {
		$data = $this->retrieve_gateway_meta();

		if ( isset( $data[ $this->get_id() ]['use_global'] ) && $data[ $this->get_id() ]['use_global'] ) {
			$data[ $this->get_id() ] = array_merge( $data[ $this->get_id() ], Tab_Handler_Manager::instance()->tab( $this->get_id() )->on_load() );
		}

		$this->gateways_meta = $data;

		return $this;
	}

	final protected function set_order_token() {
		$this->order_token = $this->query_order_token( $this->order_id, $this->action_handler->form_id );

		if ( ! $this->order_token ) {
			throw new Gateway_Exception( 'Invalid token', $this->order_token );
		}
	}

	public function get_payment_token() {
		return esc_attr( $_GET[ $this->token_query_name ] );
	}

	public function get_payment_id() {
		return absint( explode( '-', $this->payment_token )[0] );
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

		if ( empty( $action_handler->get_all() ) ) {
			return;
		}

		foreach ( $action_handler->get_all() as $index => $action ) {

			if ( 'insert_post' === $action->get_id() ) {
				continue;
			}

			if ( 'redirect_to_page' === $action->get_id() ) {
				$action_handler->unregister_action( $action->get_id() );
				$this->redirect = $action;
			}

			if ( ! array_key_exists( $index, $keep_these ) ) {
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
	public function get_form_by_payment_token( $payment = null ) {

		if ( ! $payment ) {
			return;
		}

		global $wpdb;
		$sql = "SELECT * FROM $wpdb->postmeta WHERE meta_key = '" . self::GATEWAY_META_KEY . "' AND meta_value LIKE '%$payment%';";

		return $wpdb->get_row( $sql, ARRAY_A );
	}

	protected function set_order_id() {
		$inserted_id = empty( $this->gateways_meta['action_order'] ) ? 0 : $this->gateways_meta['action_order'];
		$inserted_id = $this->action_handler->get_inserted_post_id( $inserted_id );

		if ( ! $inserted_id ) {
			throw new Gateway_Exception( 'There is not inserted_post_id' );
		}

		$this->order_id = $inserted_id;
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

		foreach ( $this->options_list() as $name => $option ) {
			if ( ! isset( $gateway[ $name ] ) || empty( $gateway[ $name ] ) ) {
				throw new Gateway_Exception( 'Invalid gateway options' );
			}
			$this->options[ $name ] = esc_attr( $gateway[ $name ] );
		}
	}

	protected function set_gateway_data( Action_Handler $action_handler ) {
		$this->gateways_meta  = GM::instance()->gateways();
		$this->action_handler = $action_handler;

		try {
			$this->set_order_id();
			$this->set_price_field();
			$this->set_price_from_filed();
			$this->set_current_gateway_options();
			$this->set_order_token();

		} catch ( Gateway_Exception $exception ) {
			return false;
		}

		return true;
	}

	protected function get_price( $price ) {
		return (float) $price;
	}

	protected function get_refer_url( $type, array $additional_args = array() ) {

		$success_redirect = ! empty( $this->gateways_meta['use_success_redirect'] ) ? $this->gateways_meta['use_success_redirect'] : false;
		$success_redirect = filter_var( $success_redirect, FILTER_VALIDATE_BOOLEAN );
		$refer            = $this->action_handler->request_data['__refer'];

		if ( $success_redirect && $this->redirect && 'success' === $type ) {
			$settings = $this->redirect->settings;

			$type = ! empty( $settings['redirect_type'] ) ? $settings['redirect_type'] : 'static_page';

			if ( 'static_page' === $type ) {
				$to_page = ! empty( $settings['redirect_page'] ) ? $settings['redirect_page'] : false;
				$refer   = ! empty( $to_page ) ? get_permalink( $to_page ) : false;
			} else {
				$refer = ! empty( $settings['redirect_url'] ) ? $settings['redirect_url'] : false;
			}
		}

		return add_query_arg(
			array_merge(
				array( GM::PAYMENT_TYPE_PARAM => $this->get_id() ),
				$additional_args
			),
			$refer
		);
	}

	abstract protected function query_order_token( $order_id, $form_id );

	protected function get_form_data() {
		return $this->get_form_by_payment_token( $this->payment_token );
	}

	public function options( $param = false ) {
		$labels = array();

		if ( ! $param ) {
			return $this->options_list();
		}
		foreach ( $this->options_list() as $name => $option ) {
			$labels[ $name ] = $option[ $param ];
		}

		return $labels;
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

					return ! empty( $amount ) ? $amount['value'] . ' ' . $amount['currency_code'] : 0;

				case 'gateway_status':
					return ! empty( $this->data['status'] ) ? $this->data['status'] : '';

				default:
					$form_data = ! empty( $this->data['form_data'] ) ? $this->data['form_data'] : array();

					return ! empty( $form_data[ $matches[1] ] ) ? $form_data[ $matches[1] ] : '';
			}

		}, $string );

	}


}