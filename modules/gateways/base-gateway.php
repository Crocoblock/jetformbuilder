<?php


namespace JFB_Modules\Gateways;

use Jet_Form_Builder\Classes\Http\Http_Tools;
use Jet_Form_Builder\Db_Queries\Exceptions\Skip_Exception;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Form_Messages\Manager;
use Jet_Form_Builder\Form_Response\Response;
use Jet_Form_Builder\Form_Response\Types\Reload_Response;
use JFB_Modules\Actions_V2\Redirect_To_Page\Redirect_To_Page_Action;
use JFB_Modules\Gateways\Scenarios_Abstract\Scenarios_Manager_Abstract;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 *
 * Class Base_Gateway
 *
 * @package JFB_Modules\Gateways
 */
abstract class Base_Gateway extends Legacy_Base_Gateway {

	const GATEWAY_META_KEY     = '_jet_gateway_data';
	const PAYMENT_TYPE_INITIAL = 'initial';
	const PAYMENT_TYPE_RENEWAL = 'renewal';

	const SUCCESS_TYPE = 'success';
	const FAILED_TYPE  = 'cancel';

	/** @var Redirect_To_Page_Action */
	protected $redirect;
	protected $order_token;

	protected $payment_instance = array();
	protected $token_query_name;

	protected $removed_query_args_on_payment = array(
		Module::PAYMENT_TYPE_PARAM,
		Scenarios_Manager_Abstract::QUERY_VAR,
		'session_id',
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

	protected function options_list() {
		return array();
	}

	abstract protected function retrieve_gateway_meta();

	public function custom_labels(): array {
		return array();
	}

	public function get_payment() {
		return $this->payment_instance;
	}

	public function additional_editor_data(): array {
		return array(
			'version' => 0,
		);
	}

	public function try_run_on_catch() {
		try {
			$this->set_payment_token();
			$this->set_gateway_from_post_meta();

			/**
			 * Init actions to migrate in events
			 */
			$this->init_actions();

			$this->set_form_gateways_meta();
			$this->set_payment();
			$this->on_success_payment();

		} catch ( Gateway_Exception $exception ) {
			return;
		} catch ( Skip_Exception $e ) {
			return;
		}
	}

	private function init_actions() {
		$form_id = (int) ( $this->data['form_id'] ?? 0 );

		jet_fb_action_handler()->set_form_id( $form_id );
	}

	/**
	 * @return $this
	 * @throws Skip_Exception
	 */
	public function set_payment_token() {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		if ( empty( $this->token_query_name ) || empty( $_GET[ $this->token_query_name ] ) ) {
			throw new Skip_Exception( 'Empty payment token.' );
		}

		$this->payment_token = $this->get_payment_token();

		if ( empty( $this->payment_token ) ) {
			throw new Skip_Exception( 'Invalid payment token.' );
		}

		return $this;
	}


	/**
	 * @return $this
	 */
	public function set_form_gateways_meta() {
		return $this->set_form_meta( $this->with_global_settings() );
	}

	public function get_payment_token() {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		return sanitize_text_field( wp_unslash( $_GET[ $this->token_query_name ] ?? '' ) );
	}

	/**
	 * @return int[]
	 */
	public function get_actions_before() {
		if ( ! $this->gateway( 'notifications_before' ) ) {
			return array();
		}

		return array_filter(
			$this->gateway( 'notifications_before' ),
			function ( $action ) {
				return $action['active'];
			}
		);
	}

	/**
	 * @return string
	 * @deprecated since 2.0.0
	 */
	public function get_result_message( $status ) {
		if ( ! $status || in_array( $status, $this->failed_statuses(), true ) ) {
			$message = Manager::dynamic_error( $this->get_meta_message( 'failed' ) );
		} else {
			$message = Manager::dynamic_success( $this->get_meta_message( 'success' ) );
		}

		return stripcslashes( $message );
	}

	/**
	 * @return string
	 */
	public function get_meta_message( $type ) {

		return isset( $this->gateways_meta['messages'][ $type ] )
			? $this->apply_macros( $this->gateways_meta['messages'][ $type ] )
			: Module::instance()->default_messages()[ $type ];
	}


	/**
	 * @throws Gateway_Exception
	 */
	public function set_current_gateway_options() {
		if ( ! empty( $this->options ) ) {
			return $this;
		}

		foreach ( $this->options_list() as $name => $option ) {
			$is_required = (
				! isset( $option['required'] ) || filter_var( $option['required'], defined( 'FILTER_VALIDATE_BOOL' ) ? FILTER_VALIDATE_BOOL : FILTER_VALIDATE_BOOLEAN )
			);

			$default_val = $option['default'] ?? false;

			if ( $is_required && ! $this->current_gateway( $name ) && false === $default_val ) {
				throw new Gateway_Exception( 'Invalid gateway options', esc_html( $name ) );
			}

			$this->options[ $name ] = $this->isset_current_gateway( $name )
				? sanitize_text_field( $this->current_gateway( $name ) )
				: $default_val;
		}

		return $this;
	}


	public function get_refer_url( $type, array $additional_args = array() ) {
		return add_query_arg(
			array_merge(
				array( Module::PAYMENT_TYPE_PARAM => $this->get_id() ),
				$additional_args
			),
			jet_fb_handler()->refer
		);
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


	public function with_global_settings() {
		return Module::instance()->with_global_settings( $this->retrieve_gateway_meta(), $this->get_id() );
	}


	/**
	 * Gateway part starts.
	 *
	 * @param bool $if_empty
	 *
	 * @return false|mixed
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

		return empty( $scenario['id'] )
			? Paypal\Scenarios_Logic\Pay_Now::scenario_id()
			: $scenario['id'];
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

	public function set_form_meta( $gateways_meta ): Base_Gateway {
		Migrate_Legacy_Data::migrate( $gateways_meta );

		$this->gateways_meta = $gateways_meta;

		return $this;
	}

	/**
	 * Execute actions or something else when payment is success
	 *
	 * @return void [description]
	 */
	protected function try_do_actions() {
		try {
			if ( in_array( $this->data['status'], $this->failed_statuses(), true ) ) {
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

	public function send_response( $args = array() ) {
		$redirect = jet_fb_action_handler()->response_data['redirect'] ?? '';

		if ( ! empty( $redirect ) ) {
			// phpcs:ignore WordPress.Security.SafeRedirect.wp_redirect_wp_redirect
			wp_redirect( $redirect );
			die();
		}

		( new Response( $this->get_response_manager() ) )->init( $args )->send();
	}

	private function get_response_manager() {
		return new Reload_Response(
			array(
				'refer'       => Http_Tools::get_form_refer_url(),
				'remove_args' => $this->removed_query_args_on_payment,
			)
		);
	}

}
