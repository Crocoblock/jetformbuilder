<?php

namespace Jet_Form_Builder\Gateways;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Paypal;
use Jet_Form_Builder\Plugin;

/**
 * @method static Gateway_Manager instance()
 *
 * Class Gateway_Manager
 * @package Jet_Form_Builder\Gateways
 */
class Gateway_Manager {

	const BEFORE_ACTIONS_CALLABLE = 'before_send_actions';
	const AFTER_ACTIONS_CALLABLE = 'after_send_actions';

	const PAYMENT_TYPE_PARAM = 'jet_form_gateway';

	use Instance_Trait;
	use Gateways_Editor_Data;

	private $_gateways = array();
	private $gateways_form_data = array();
	private $form_id;

	public $message = null;
	public $data = null;
	public $is_sandbox;

	/**
	 * Register gateways components
	 */

	public function set_up() {
		if ( ! Plugin::instance()->allow_gateways ) {
			return;
		}
		add_action( 'init', array( $this, 'register_gateways' ) );

		$this->catch_payment_result();
	}

	/**
	 * Returns all registered gateways
	 *
	 * @return void [description]
	 */
	public function register_gateways() {
		$this->is_sandbox = apply_filters( 'jet-form-builder/gateways/paypal/sandbox-mode', false );

		$gateways = array(
			new Paypal\Controller(),
		);

		foreach ( $gateways as $gateway ) {
			$this->register_gateway( $gateway );
		}

		do_action( 'jet-form-builder/gateways/register', $this );
	}

	public function register_gateway( Base_Gateway $gateway ) {
		$this->_gateways[] = $gateway;
	}

	public function before_send_actions() {
		$this->set_gateways_options_by_form_id( $this->get_actions_handler()->form_id );

		$controller = $this->get_current_gateway_controller();

		if ( $controller ) {
			$controller->before_actions( $this->get_actions_before() );
		}
	}

	/**
	 * @throws Action_Exception
	 */
	public function after_send_actions() {
		if ( empty( $this->gateways_form_data ) ) {
			return;
		}

		$controller = $this->get_current_gateway_controller();

		try {
			if ( $controller ) {
				$controller->after_actions( $this->get_actions_handler() );
			}
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
		if ( ! isset( $_GET[ self::PAYMENT_TYPE_PARAM ] ) || ! Plugin::instance()->allow_gateways ) {
			return;
		}

		add_action( 'parse_request', array( $this, 'on_has_gateway_request' ) );
	}

	public function on_has_gateway_request() {
		$gateway_type = esc_attr( $_GET[ self::PAYMENT_TYPE_PARAM ] );
		$controller   = $this->get_gateway_controller( $gateway_type );

		if ( ! ( $controller instanceof Base_Gateway ) ) {
			return;
		}

		$controller->try_run_on_catch();
	}

	public function get_gateway_controller( $type = false ) {
		if ( ! $type ) {
			return false;
		}

		foreach ( $this->_gateways as $gateway ) {
			if ( $gateway->get_id() === $type ) {
				return $gateway;
			}
		}

		return false;
	}

	/**
	 * @return false|Base_Gateway
	 */
	public function get_current_gateway_controller() {
		return $this->get_gateway_controller( $this->get_gateway_id() );
	}

	/**
	 * Returns gatewyas config for current form
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

	public function get_actions_before() {
		$withFilter = function ( $actions = array() ) {
			return apply_filters(
				'jet-form-builder/gateways/notifications-before',
				$actions,
				$this->get_actions_handler()->get_all()
			);
		};

		if ( ! $this->gateways( 'notifications_before' ) ) {
			return $withFilter();
		}

		$actions_ids = array_filter(
			$this->gateways( 'notifications_before' ),
			function ( $action ) {
				return $action['active'];
			}
		);

		return $withFilter( $actions_ids );
	}

	public function has_gateway( $form_id ) {
		$this->set_gateways_options_by_form_id( $form_id );

		return $this->get_gateway_id( false );
	}

	public function get_actions_handler() {
		return jet_form_builder()->form_handler->action_handler;
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
		return $this->gateways_form_data['gateway'] ?? $if_empty;
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

		if ( 'none' === $gateways['gateway'] ?? 'none' ) {
			return;
		}
		$this->save_gateways_form_data( $gateways );
	}

}
