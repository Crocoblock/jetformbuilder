<?php


namespace Jet_Form_Builder\Gateways;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Events\Default_Process\Default_Process_Event;
use Jet_Form_Builder\Actions\Events\Gateway_Failed\Gateway_Failed_Event;
use Jet_Form_Builder\Actions\Events\Gateway_Success\Gateway_Success_Event;
use Jet_Form_Builder\Actions\Events_List;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Gateway_Manager as GM;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Legacy_Base_Gateway {

	const GATEWAY_META_KEY = '_jet_gateway_data';

	/**
	 * @deprecated 2.0.0
	 */
	protected $payment_id;
	protected $payment_token;
	protected $data;
	protected $order_id;
	protected $gateways_meta;
	protected $price_field;
	protected $price;
	protected $options;

	/**
	 * @deprecated 2.0.0
	 */
	protected function set_payment() {
		$this->payment_instance = $this->retrieve_payment_instance();
	}

	/**
	 * @deprecated 2.0.0
	 */
	protected function set_gateway_data_on_result() {
		// TODO: Implement set_gateway_data_on_result() method.
	}

	/**
	 * Process status notification and enqueue message
	 *
	 * @param string $type [description]
	 *
	 * @return void [type]           [description]
	 * @throws Action_Exception
	 * @deprecated 2.0.0
	 */
	public function process_status( $type = 'success' ) {
		$id = $this->data['form_id'] ?? 0;
		jet_fb_action_handler()->add_request( $this->data['form_data'] );

		switch ( $type ) {
			case 'success':
				jet_fb_events()->execute( Gateway_Success_Event::class, $id );
				break;
			case 'failed':
			default:
				jet_fb_events()->execute( Gateway_Failed_Event::class, $id );
				break;
		}
	}

	/**
	 * Store payment status into order and show success/failed message
	 *
	 * @return void [description]
	 * @throws Gateway_Exception
	 * @deprecated 2.0.0
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
				'status' => $this->get_result_message( $this->data['status'] ),
			)
		);
	}

	/**
	 * @deprecated 2.0.0
	 */
	public function save_gateway_before_send_response() {
		$this->data['date']    = date_i18n( 'F j, Y, H:i' );
		$this->data['gateway'] = $this->get_name();

		/**
		 * JSON_UNESCAPED_UNICODE - for valid encode cyrillic
		 */
		$json = wp_json_encode( $this->data, JSON_UNESCAPED_UNICODE );

		update_post_meta( $this->payment_id, static::GATEWAY_META_KEY, $json );
	}

	/**
	 * @return $this
	 * @deprecated 2.0.0
	 */
	public function set_gateway_from_post_meta() {
		$row_data = $this->get_form_data();

		$this->payment_id = $row_data['post_id'];
		$this->data       = Tools::decode_unserializable( $row_data['meta_value'] );

		return $this;
	}

	/**
	 * @return false
	 * @deprecated 2.0.0
	 */
	protected function query_order_token( $order_id, $form_id ) {
		return false;
	}

	/**
	 * @throws Gateway_Exception
	 * @deprecated 2.0.0
	 */
	public function set_order_token() {
		$this->order_token = $this->query_order_token( $this->order_id, jet_fb_handler()->form_id );

		if ( ! $this->order_token ) {
			throw new Gateway_Exception( 'Invalid token', $this->order_token );
		}
	}

	public function get_order_token() {
		return $this->order_token;
	}


	/**
	 * @return int
	 * @deprecated 2.0.0
	 */
	public function get_initialize_action_id() {
		return (int) $this->gateway( 'action_order', 0 );
	}

	/**
	 * @return int|mixed
	 * @deprecated 2.0.0
	 */
	public function get_insert_post_action_id() {
		return jet_fb_action_handler()->get_inserted_post_id( $this->get_initialize_action_id() );
	}

	/**
	 * @throws Gateway_Exception
	 * @deprecated 2.0.0
	 */
	public function set_order_id() {
		if ( ! $this->get_insert_post_action_id() ) {
			throw new Gateway_Exception( 'There is not inserted_post_id' );
		}

		$this->order_id = $this->get_insert_post_action_id();
	}

	/**
	 * @return mixed
	 * @deprecated 1.5.0
	 */
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
			jet_fb_action_handler()
		);

		if ( ! $this->price_field ) {
			throw new Gateway_Exception( 'Invalid price field', $this->gateways_meta );
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
			jet_fb_action_handler()->request_data[ $this->price_field ] ?? 0
		);
	}

	protected function get_price( $price ) {
		return (float) $price;
	}

	/**
	 * @return array|object|void|null
	 * @deprecated 2.0.0
	 */
	protected function get_form_data() {
		return $this->get_form_by_payment_token( $this->payment_token );
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

	/**
	 * Returns form data by payment ID
	 *
	 * @param null $payment
	 *
	 * @return array|object|void|null [description]
	 * @deprecated since 2.0.0
	 */
	public function get_form_by_payment_token( $payment = null ) {

		if ( ! $payment ) {
			return;
		}

		global $wpdb;
		$sql = "SELECT * FROM $wpdb->postmeta WHERE meta_key = '" . self::GATEWAY_META_KEY . "' AND meta_value LIKE '%$payment%';";

		return $wpdb->get_row( $sql, ARRAY_A );
	}

	/**
	 * @param Action_Handler $action_handler
	 *
	 * @return void
	 * @throws Gateway_Exception
	 * @deprecated 2.0.0
	 */
	public function after_actions( Action_Handler $action_handler ) {
	}

	/**
	 * Prevent unnecessary notifications processing before form is send.
	 *
	 * @return void [description]
	 * @deprecated 2.0.0
	 */
	public function before_actions() {
		$this->set_form_meta( GM::instance()->gateways() );
		$default_actions = jet_fb_action_handler()->get_all();

		$action_order = (int) $this->gateway( 'action_order' );

		foreach ( $default_actions as $index => $action ) {
			if ( 'insert_post' !== $action->get_id() || $action_order !== $action->_id ) {
				continue;
			}
			/** @var Events_List|false $list */
			$list = $action->get_events();

			if ( ! $list ) {
				$list = new Events_List();
			}

			$list->push( Default_Process_Event::class );
			break;
		}
	}

	/**
	 * For backward compatibility with JetAppointment & JetBooking
	 *
	 * @param array $request
	 */
	public function set_form_data( array $request ) {
		$this->data['form_data'] = $request;
	}


}
