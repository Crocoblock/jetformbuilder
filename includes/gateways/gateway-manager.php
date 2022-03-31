<?php

namespace Jet_Form_Builder\Gateways;

use Jet_Form_Builder\Actions\Executors\Action_Default_Executor;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Containers\Base_Meta_Container;
use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Gateways\Meta_Boxes\Payment_Info_For_Record;
use Jet_Form_Builder\Gateways\Pages\Payments_Page;
use Jet_Form_Builder\Gateways\Pages\Single_Payment_Page;
use Jet_Form_Builder\Gateways\Paypal;
use Jet_Form_Builder\Plugin;

/**
 * @method static Gateway_Manager instance()
 *
 * Class Gateway_Manager
 * @package Jet_Form_Builder\Gateways
 */
class Gateway_Manager {

	use Instance_Trait;
	use Gateways_Editor_Data;
	use Repository_Pattern_Trait;

	const PAYMENT_TYPE_PARAM = 'jet_form_gateway';

	private $gateways_form_data = array();
	private $form_id;

	public $message = null;
	public $data    = null;
	public $is_sandbox;
	private $current_gateway_type;

	/**
	 * Register gateways components
	 */
	public function set_up() {
		if ( ! Plugin::instance()->allow_gateways ) {
			return;
		}
		add_action( 'init', array( $this, 'register_gateways' ) );

		add_action( 'jet-form-builder/actions/before-send', array( $this, 'before_send_actions' ) );
		add_action( 'jet-form-builder/actions/after-send', array( $this, 'after_send_actions' ) );
		add_filter( 'jet-form-builder/admin/pages', array( $this, 'add_stable_pages' ), 0 );
		add_filter( 'jet-form-builder/admin/single-pages', array( $this, 'add_single_pages' ), 0 );
		add_filter( 'jet-form-builder/page-containers/jfb-records-single', array( $this, 'add_box_to_single_record' ), 0 );

		$this->catch_payment_result();
	}

	public function rep_instances(): array {
		return array(
			new Paypal\Controller(),
		);
	}

	public function add_stable_pages( $pages ): array {
		$pages[] = new Payments_Page();

		return $pages;
	}

	public function add_single_pages( $pages ): array {
		$pages[] = new Single_Payment_Page();

		return $pages;
	}

	/**
	 * @param Base_Meta_Container[] $containers
	 *
	 * @return array
	 */
	public function add_box_to_single_record( array $containers ): array {
		$containers[1]->add_meta_box( new Payment_Info_For_Record() );

		return $containers;
	}

	/**
	 * Returns all registered gateways
	 *
	 * @return void [description]
	 */
	public function register_gateways() {
		$this->is_sandbox = apply_filters( 'jet-form-builder/gateways/paypal/sandbox-mode', false );

		$this->rep_install();

		do_action( 'jet-form-builder/gateways/register', $this );
	}

	/**
	 * @param Base_Gateway $gateway
	 *
	 * @throws Repository_Exception
	 */
	public function register_gateway( Base_Gateway $gateway ) {
		$this->rep_install_item( $gateway );
	}

	public function before_send_actions() {
		$this->set_gateways_options_by_form_id( jet_fb_handler()->form_id );

		try {
			$this->get_current_gateway_controller()->before_actions();
		} catch ( Repository_Exception $exception ) {
			return;
		}

		add_filter(
			'jet-form-builder/actions/run-callback',
			function () {
				return array( new Action_Default_Executor(), Action_Default_Executor::SOFT );
			}
		);
	}

	/**
	 * @throws Action_Exception
	 */
	public function after_send_actions() {
		try {
			$this->get_current_gateway_controller()->after_actions( jet_fb_action_handler() );
		} catch ( Repository_Exception $exception ) {
			return;
		} catch ( Gateway_Exception $exception ) {
			throw ( new Action_Exception( $exception->getMessage(), $exception->get_additional() ) )->dynamic_error();
		}
	}

	public function save_gateways_form_data( $data ) {
		$id = $data['gateway'];

		$this->gateways_form_data = $this->with_global_settings( $data, $id );
	}

	/**
	 * Catch processed payment results
	 *
	 * @return void [description]
	 */
	public function catch_payment_result() {
		// phpcs:disable WordPress.Security.NonceVerification.Recommended
		if ( ! isset( $_GET[ self::PAYMENT_TYPE_PARAM ] ) ) {
			return;
		}

		$this->current_gateway_type = wp_unslash( sanitize_key( $_GET[ self::PAYMENT_TYPE_PARAM ] ) );
		// phpcs:enable WordPress.Security.NonceVerification.Recommended

		add_action( 'parse_request', array( $this, 'on_has_gateway_request' ) );
	}

	public function on_has_gateway_request() {
		try {
			$this->get_gateway_controller( $this->current_gateway() )->try_run_on_catch();
		} catch ( Repository_Exception $exception ) {
			return;
		}
	}

	/**
	 * @param false $type
	 *
	 * @return Base_Gateway
	 * @throws Repository_Exception
	 */
	public function get_gateway_controller( $type = false ) {
		return $this->rep_get_item( $type );
	}

	/**
	 * @return Base_Gateway|Base_Scenario_Gateway
	 * @throws Repository_Exception
	 */
	public function get_current_gateway_controller() {
		return $this->get_gateway_controller( $this->get_gateway_id() );
	}

	/**
	 * @return false|Base_Gateway|Base_Scenario_Gateway
	 */
	public function get_current_gateway_controller_or_die() {
		try {
			return $this->get_current_gateway_controller();
		} catch ( Repository_Exception $exception ) {
			return false;
		}
	}

	/**
	 * @param $gateway_id
	 *
	 * @return Base_Gateway
	 */
	public function controller( $gateway_id ) {
		try {
			return $this->get_gateway_controller( $gateway_id );
		} catch ( Repository_Exception $exception ) {
			_doing_it_wrong( __METHOD__, esc_html( "Undefined gateway: {$gateway_id}" ), '2.0.0' );
		}
	}

	/**
	 * Returns gateways config for current form
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

	public function gateways( $prop = '', $if_empty = false ) {
		return $prop ? ( $this->gateways_form_data[ $prop ] ?? $if_empty ) : $this->gateways_form_data;
	}

	public function has_gateway( $form_id ) {
		$this->set_gateways_options_by_form_id( $form_id );

		return $this->get_gateway_id( false );
	}

	public function get_global_settings( $gateway_id ) {
		return Tab_Handler_Manager::instance()->tab( $gateway_id )->on_load();
	}

	public function with_global_settings( $gateways_data, $gateway_id ) {
		if ( ! isset( $gateways_data[ $gateway_id ] ) ) {
			return $gateways_data;
		}
		$gateway = &$gateways_data[ $gateway_id ];

		if ( ! empty( $gateway['use_global'] ) ) {
			$gateway = array_merge( $gateway, $this->get_global_settings( $gateway_id ) );
		}

		return $gateways_data;
	}

	public function get_gateway_id( $if_empty = 'none' ) {
		return $this->gateways_form_data['gateway'] ?? $this->current_gateway_type ?? $if_empty;
	}

	public function set_form_id( $form_id ) {
		$this->form_id = (int) $form_id;

		return $this;
	}

	public function get_form_id() {
		return $this->form_id;
	}

	public function set_gateways_options_by_form_id( $form_id ) {
		if ( (int) $form_id === $this->get_form_id() ) {
			return;
		}
		$this->set_form_id( $form_id );
		$gateways = $this->get_form_gateways_by_id( $this->get_form_id() );

		if ( 'none' === ( $gateways['gateway'] ?? 'none' ) ) {
			return;
		}
		$this->save_gateways_form_data( $gateways );
	}

	public function current_gateway() {
		return $this->current_gateway_type;
	}

	public function currency_symbol( $currency ) {
		$currency = strtoupper( $currency );

		switch ( $currency ) {
			case 'USD':
			case 'AUD':
			case 'NZD':
			case 'CAD':
			case 'HKD':
			case 'MXN':
			case 'SGD':
				$symbol = '&#36;';
				break;
			case 'EUR':
				$symbol = '&euro;';
				break;
			case 'GBP':
				$symbol = '&pound;';
				break;
			case 'BRL':
				$symbol = 'R&#36;';
				break;
			case 'JPY':
				$symbol = '&yen;';
				break;
			case 'AOA':
				$symbol = 'Kz';
				break;
			default:
				$symbol = $currency;
				break;
		}

		return apply_filters( 'jet-form-builder/gateways/currency-symbol', $symbol, $currency );
	}

}
