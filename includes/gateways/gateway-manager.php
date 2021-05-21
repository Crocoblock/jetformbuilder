<?php

namespace Jet_Form_Builder\Gateways;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Paypal;
use Jet_Form_Builder\Plugin;

class Gateway_Manager {

	const BEFORE_ACTIONS_CALLABLE = 'before_send_actions';
	const AFTER_ACTIONS_CALLABLE = 'after_send_actions';

	const PAYMENT_TYPE_PARAM = 'jet_form_gateway';

	use Instance_Trait;
	use Gateways_Editor_Data;

	private $_gateways = array();
	private $gateways_form_data = array();

	public $message = null;
	public $data = null;

	/**
	 * Register gateways components
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_gateways' ) );

		$this->catch_payment_result();
	}

	/**
	 * Returns all registered gateways
	 *
	 * @return void [description]
	 */
	public function register_gateways() {

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

	public function before_send_actions( $action_handler ) {
		$gateways = $this->get_form_gateways_by_id( $action_handler->form_id );

		if ( empty( $gateways ) || empty( $gateways['gateway'] ) || 'none' === $gateways['gateway'] ) {
			return;
		}
		$this->save_gateways_form_data( $gateways );

		$controller = $this->get_gateway_controller( $gateways['gateway'] );

		if ( $controller ) {
			$controller->before_actions( $action_handler,
				$this->get_actions_before( $action_handler )
			);
		}
	}

	public function after_send_actions( $action_handler ) {
		if ( empty( $this->gateways_form_data ) ) {
			return;
		}

		$controller = $this->get_gateway_controller( $this->gateways_form_data['gateway'] );

		if ( $controller ) {
			$controller->after_actions( $action_handler );
		}
	}

	public function add_data( $data ) {
		$this->data = $data;
	}

	public function save_gateways_form_data( $data ) {
		$id = $data['gateway'];

		if ( isset( $data[ $id ]['use_global'] ) && $data[ $id ]['use_global'] ) {
			$data[ $id ] = array_merge( $data[ $id ], Tab_Handler_Manager::instance()->tab( $id )->on_load() );
		}

		$this->gateways_form_data = $data;
	}

	public function add_message( $message ) {

		$this->message = $message;

		if ( ! $this->data || ! isset( $this->data['form_id'] ) ) {
			return;
		}

		$form_id = $this->data['form_id'];

		add_filter( 'jet-form-builder/pre-render/' . $form_id, function ( $res ) use ( $form_id ) {
			echo $this->apply_macros( $this->message );

			return true;
		} );
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
		$controller = $this->get_gateway_controller( $gateway_type );

		if ( ! ( $controller instanceof Base_Gateway ) ) {
			return;
		}

		$this->try_run_gateway_controller( $controller );
	}

	public function try_run_gateway_controller( Base_Gateway $controller ) {
		try {
			$controller->set_payment_token();
			$controller->set_gateways_meta();
			$controller->set_form_gateways_meta();
			$controller->set_payment_instance();
			$controller->on_success_payment();

		} catch ( Gateway_Exception $exception ) {
			do_action( 'qm/debug', var_export( [ $exception->getMessage(), $exception->getTraceAsString() ], true ) );
		}
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

	public function gateways() {
		return $this->gateways_form_data;
	}

	public function get_actions_before( Action_Handler $action_handler ) {
		if ( empty( $this->gateways() ) || empty( $this->gateways()['notifications_before'] ) ) {
			return array();
		}
		$actions_ids = array_filter(
			$this->gateways()['notifications_before'],
			function ( $action ) {
				return $action['active'];
			}
		);

		return apply_filters(
			'jet-form-builder/gateways/notifications-before',
			$actions_ids,
			$action_handler->get_all()
		);
	}

}
