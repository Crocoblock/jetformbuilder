<?php


namespace Jet_Form_Builder\Gateways;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Types\Redirect_To_Page;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Form_Messages\Manager;
use Jet_Form_Builder\Form_Response\Response;
use Jet_Form_Builder\Form_Response\Types\Reload_Response;
use Jet_Form_Builder\Gateways\Gateway_Manager as GM;
use Jet_Form_Builder\Dev_Mode;

/**
 *
 * Class Base_Gateway
 *
 * @package Jet_Form_Builder\Gateways
 */
abstract class Base_Gateway {

	const GATEWAY_META_KEY = '_jet_gateway_data';

	const SUCCESS_TYPE = 'success';
	const FAILED_TYPE = 'cancel';

	protected $payment_id;
	protected $payment_token;
	protected $data;
	protected $order_id;
	protected $gateways_meta;
	protected $price_field;
	protected $price;
	protected $options;

	/** @var Redirect_To_Page */
	protected $redirect;
	protected $order_token;

	protected $payment_instance = array();
	protected $token_query_name;

	protected $removed_query_args_on_payment = array(
		GM::PAYMENT_TYPE_PARAM,
		'order_token',
		'status',
		'PayerID',
	);

	public function rep_item_id() {
		return $this->get_id();
	}

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

	/**
	 * @param Action_Handler $action_handler
	 *
	 * @return mixed
	 * @throws Gateway_Exception
	 */
	abstract public function after_actions( Action_Handler $action_handler );

	abstract protected function set_gateway_data_on_result();

	abstract protected function failed_statuses();

	abstract protected function retrieve_payment_instance();

	abstract protected function retrieve_gateway_meta();

	protected function set_payment() {
		$this->payment_instance = $this->retrieve_payment_instance();
	}

	public function get_payment() {
		return $this->payment_instance;
	}

	public function additional_editor_data(): array {
		return array(
			'version' => 0,
		);
	}

	/**
	 * Store payment status into order and show success/failed message
	 *
	 * @return void [description]
	 * @throws Gateway_Exception
	 */
	public function on_success_payment() {
		$this->set_current_gateway_options();
		$this->set_gateway_data_on_result();

		$this->try_do_actions();

		/**
		 * By default save 'data' property to  payment/subscription post meta
		 */
		$this->save_gateway_before_send_response();

		$this->send_response(
			array(
				'status' => $this->get_status_on_payment( $this->data['status'] ),
			)
		);
	}

	public function save_gateway_before_send_response() {
		$this->data['date']    = date_i18n( 'F j, Y, H:i' );
		$this->data['gateway'] = $this->get_name();

		/**
		 * JSON_UNESCAPED_UNICODE - for valid encode cyrillic
		 */
		$json = wp_json_encode( $this->data, JSON_UNESCAPED_UNICODE );

		update_post_meta( $this->payment_id, self::GATEWAY_META_KEY, $json );
	}

	public function get_status_on_payment( $status ) {
		if ( ! $status || in_array( $status, $this->failed_statuses() ) ) {
			$message = Manager::dynamic_error( $this->get_meta_message( 'failed' ) );
		} else {
			$message = Manager::dynamic_success( $this->get_meta_message( 'success' ) );
		}
		$message = stripcslashes( $message );

		return $message;
	}

	public function get_meta_message( $type ) {

		return isset( $this->gateways_meta['messages'][ $type ] )
			? $this->apply_macros( $this->gateways_meta['messages'][ $type ] )
			: Gateway_Manager::instance()->default_messages()[ $type ];
	}

	/**
	 * Execute actions or something else when payment is success
	 *
	 * @return void [description]
	 */
	protected function try_do_actions() {
		try {
			if ( in_array( $this->data['status'], $this->failed_statuses() ) ) {
				$this->process_status( 'failed' );
			} else {
				$this->process_status( 'success' );
			}
		} catch ( Action_Exception $exception ) {
			$this->send_response(
				array(
					'status' => $exception->get_form_status(),
				)
			);
		}
	}

	private function send_response( $args = array() ) {
		( new Response( $this->get_response_manager() ) )->init( $args )->send();
	}

	private function get_response_manager() {
		global $wp;

		return new Reload_Response(
			array(
				'refer'       => home_url( $wp->request ),
				'remove_args' => $this->removed_query_args_on_payment,
			)
		);
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

		do_action( 'jet-form-builder/gateways/on-payment-' . $type, $this );

		$keep_these = $this->gateway( 'notifications_' . $type, array() );

		if ( empty( $keep_these ) ) {
			return;
		}

		$all = $this->get_action_handler()
		            ->set_form_id( $this->data['form_id'] )
		            ->add_request( $this->data['form_data'] )
		            ->unregister_action( 'redirect_to_page' )
		            ->get_all();

		if ( empty( $all ) ) {
			return;
		}
		foreach ( $all as $index => $notification ) {
			$this->maybe_unregister_action( $index, $keep_these );
		}

		$this->get_action_handler()->soft_run_actions();
	}

	/**
	 * @return $this
	 * @throws Gateway_Exception
	 */
	public function set_payment_token() {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		if ( empty( $this->token_query_name ) || empty( $_GET[ $this->token_query_name ] ) ) {
			throw new Gateway_Exception( 'Empty payment token.' );
		}

		$this->payment_token = $this->get_payment_token();

		if ( empty( $this->payment_token ) ) {
			throw new Gateway_Exception( 'Invalid payment token.' );
		}

		return $this;
	}


	final public function set_gateway_from_post_meta() {
		$row_data = $this->get_form_data();

		$this->payment_id = $row_data['post_id'];
		$this->data       = Tools::decode_unserializable( $row_data['meta_value'] );

		return $this;
	}

	final public function set_form_gateways_meta() {
		return $this->set_form_meta( $this->with_global_settings() );
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function set_order_token() {
		$this->order_token = $this->query_order_token( $this->order_id, $this->get_action_handler()->form_id );

		if ( ! $this->order_token ) {
			throw new Gateway_Exception( 'Invalid token', $this->order_token );
		}
	}

	public function get_order_token() {
		return $this->order_token;
	}


	public function get_payment_token() {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		return sanitize_text_field( wp_unslash( $_GET[ $this->token_query_name ] ?? '' ) );
	}

	public function get_payment_id() {
		return absint( explode( '-', $this->payment_token )[0] );
	}

	/**
	 * Prevent unnecessary notifications processing before form is send.
	 *
	 * @param $keep_these
	 *
	 * @return void [description]
	 */
	public function before_actions( $keep_these ) {
		if ( empty( $this->get_action_handler()->get_all() ) ) {
			return;
		}
		$this->set_form_meta( GM::instance()->gateways() );

		foreach ( $this->get_action_handler()->get_all() as $index => $action ) {
			if ( 'insert_post' === $action->get_id()
			     && $this->get_initialize_action_id() === $action->_id
			) {
				continue;
			}

			if ( 'redirect_to_page' === $action->get_id() ) {
				$this->get_action_handler()->unregister_action( $action->get_id() );
				$this->redirect = $action;
			}

			if ( ! array_key_exists( $index, $keep_these ) ) {
				$this->get_action_handler()->unregister_action( $index );
			}
			$this->maybe_unregister_action( $index, $keep_these );
		}
	}

	public function get_initialize_action_id() {
		return (int) $this->gateway( 'action_order', 0 );
	}

	public function get_insert_post_action_id() {
		return GM::instance()->get_actions_handler()->get_inserted_post_id( $this->get_initialize_action_id() );
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function set_order_id() {
		if ( ! $this->get_insert_post_action_id() ) {
			throw new Gateway_Exception( 'There is not inserted_post_id' );
		}

		$this->order_id = $this->get_insert_post_action_id();
	}

	public function get_order_id() {
		return $this->order_id;
	}


	/**
	 * @throws Gateway_Exception
	 */
	public function set_price_field() {
		$this->price_field = sanitize_key( $this->gateway( 'price_field', '' ) );

		$this->price_field = apply_filters(
			'jet-form-builder/gateways/price-field',
			$this->price_field,
			GM::instance()->get_actions_handler()
		);

		if ( ! $this->price_field ) {
			throw new Gateway_Exception( 'Invalid price field' );
		}
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function set_price_from_filed() {
		$this->price = $this->get_price_from_request();

		if ( ! $this->price ) {
			throw new Gateway_Exception( 'Empty price field' );
		}
	}

	public function get_price_var() {
		return $this->price;
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function set_current_gateway_options() {
		if ( ! empty( $this->options ) ) {
			return $this;
		}

		foreach ( $this->options_list() as $name => $option ) {
			$is_required = isset( $option['required'] )
				? filter_var( $option['required'], FILTER_VALIDATE_BOOLEAN )
				: true;

			$default_val = $option['default'] ?? false;

			if ( $is_required && ! $this->current_gateway( $name ) && false === $default_val ) {
				throw new Gateway_Exception( 'Invalid gateway options', $name );
			}

			$this->options[ $name ] = $this->isset_current_gateway( $name )
				? sanitize_text_field( $this->current_gateway( $name ) )
				: $default_val;
		}

		return $this;
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function set_gateway_data() {
		if ( ! $this->gateways_meta ) {
			/** for backward compatibility */
			$this->gateways_meta = GM::instance()->gateways();
		}

		$this->set_order_id();
		$this->set_price_field();
		$this->set_price_from_filed();
		$this->set_current_gateway_options();
		$this->set_order_token();

		/** for backward compatibility */
		return true;
	}

	protected function get_price_from_request() {
		return $this->get_price(
			$this->get_action_handler()->request_data[ $this->price_field ] ?? 0
		);
	}

	protected function get_price( $price ) {
		return (float) $price;
	}

	public function get_refer_url( $type, array $additional_args = array() ) {
		$success_redirect = filter_var( $this->gateway( 'use_success_redirect' ), FILTER_VALIDATE_BOOLEAN );
		$refer            = $this->get_action_handler()->get_refer();

		if ( $success_redirect && $this->redirect && 'success' === $type ) {
			$refer = $this->redirect->get_completed_redirect_url();
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
			$labels[ $name ] = $option[ $param ] ?? '';
		}

		return $labels;
	}

	/**
	 * Apply macros in string
	 *
	 * @param null $string
	 *
	 * @return string [description]
	 */
	public function apply_macros( $string = null ) {
		return preg_replace_callback(
			'/%(.*?)%/',
			function ( $matches ) {
				switch ( $matches[1] ) {
					case 'gateway_amount':
						if ( empty( $this->data['amount'] ) ) {
							return 0;
						}

						return $this->data['amount']['value'] ?? 0 . ' ' . $this->data['amount']['currency_code'] ?? '';

					case 'gateway_status':
						return $this->data['status'] ?? '';

					default:
						return $this->data['form_data'][ $matches[1] ] ?? '';
				}
			},
			$string
		);
	}

	private function maybe_unregister_action( $index, $keep_these ) {
		if ( ! array_key_exists( $index, $keep_these )
		     || ! isset( $keep_these[ $index ]['active'] )
		     || ! $keep_these[ $index ]['active']
		) {
			$this->get_action_handler()->unregister_action( $index );
		}
	}

	public function try_run_on_catch() {
		try {
			$this->set_payment_token();
			$this->set_gateway_from_post_meta();
			$this->set_form_gateways_meta();
			$this->set_payment();
			$this->on_success_payment();

		} catch ( Gateway_Exception $exception ) {

		}
	}

	public function with_global_settings() {
		return Gateway_Manager::instance()->with_global_settings( $this->retrieve_gateway_meta(), $this->get_id() );
	}

	public function get_post_meta( $prop = '', $if_empty = false ) {
		return Tools::get_property_recursive( $this->data, $prop, '.', $if_empty );
	}

	public function set_post_meta( $prop, $value ) {
		$this->data[ $prop ] = $value;

		return $this;
	}

	public function get_action_handler() {
		return GM::instance()->get_actions_handler();
	}


	/**
	 * Gateway part starts.
	 */

	public function get_current_gateway( $if_empty = false ) {
		return $this->gateway( $this->get_id(), $if_empty );
	}

	public function current_gateway( $prop = '', $if_empty = false ) {
		$gateway = $this->get_current_gateway( $if_empty );

		return $prop ? $gateway[ $prop ] ?? $if_empty : $gateway;
	}

	public function isset_current_gateway( $prop ) {
		$gateway = $this->get_current_gateway( false );

		return isset( $gateway[ $prop ] );
	}

	public function gateway( $prop = '', $if_empty = false ) {
		return $this->gateways_meta[ $prop ] ?? $if_empty;
	}

	/**
	 * Gateway part ends.
	 */

	public function get_scenario_meta(): array {
		$gateway = $this->get_current_gateway( array() );

		return $gateway['scenario'] ?? array();
	}

	public function get_current_scenario_id() {
		$scenario = $this->get_scenario_meta();

		return $scenario['id'] ?? Paypal\Scenarios_Logic\Pay_Now::scenario_id();
	}

	public function get_current_scenario(): array {
		$scenario_id = $this->get_current_scenario_id();
		$scenario    = $this->get_scenario_meta();

		return $scenario[ $scenario_id ] ?? array();
	}

	/**
	 * @param string $prop
	 * @param false $if_empty
	 *
	 * @return mixed
	 */
	public function current_scenario( $prop = '', $if_empty = false ) {
		$scenario = $this->get_current_scenario();

		return $prop ? $scenario[ $prop ] ?? $if_empty : $scenario;
	}


	public function isset_gateway( $prop ): bool {
		return isset( $this->gateways_meta[ $prop ] );
	}

	public function property( $prop ) {
		return $this->$prop ?? false;
	}

	/**
	 * Returns form data by payment ID
	 *
	 * @param null $payment
	 *
	 * @return array|object|void|null [description]
	 * @deprecated since 1.4.0
	 */
	public function get_form_by_payment_token( $payment = null ) {

		if ( ! $payment ) {
			return;
		}

		global $wpdb;
		$sql = "SELECT * FROM $wpdb->postmeta WHERE meta_key = '" . self::GATEWAY_META_KEY . "' AND meta_value LIKE '%$payment%';";

		return $wpdb->get_row( $sql, ARRAY_A );
	}

	public function get_gateway_entries( $properties = array() ) {
		$compare    = array(
			'1=1',
			sprintf( "`meta_key` = '%s'", self::GATEWAY_META_KEY ),
		);
		$properties = array_merge(
			array( 'gateway_id' => $this->get_id() ),
			$properties
		);

		foreach ( $properties as $property => $value ) {
			$value     = sprintf( '"%1$s":"%2$s"', (string) $property, (string) $value );
			$compare[] = "`meta_value` LIKE '%$value%'";
		}
		global $wpdb;

		$sql  = "SELECT * FROM $wpdb->postmeta WHERE " . implode( "\n\rAND ", $compare ) . ';';
		$meta = $wpdb->get_results( $sql, ARRAY_A );

		$results = array();

		foreach ( $meta as $row ) {
			$results[ $row['meta_id'] ] = Tools::decode_json( $row['meta_value'] ?? '[]' );
		}

		return $results;
	}

	public function custom_labels(): array {
		return array();
	}

	public function set_form_meta( $gateways_meta ): Base_Gateway {
		$this->gateways_meta = $gateways_meta;

		return $this;
	}

}
