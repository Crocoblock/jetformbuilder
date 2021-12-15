<?php

namespace Jet_Form_Builder\Gateways\Paypal;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Gateway_Manager as GM;
use Jet_Form_Builder\Gateways\Paypal\Api_Actions\Get_Token;
use Jet_Form_Builder\Gateways\Paypal\Web_Hooks\Rest_Api_Controller;
use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Gateways\Base_Gateway;

class Controller extends Base_Gateway {

	const ID = 'paypal';

	public $data = false;
	public $message = false;
	public $redirect = false;

	protected $token_query_name = 'token';

	public function __construct() {
		( new Rest_Api_Controller() )->rest_api_init();
	}

	/**
	 * Returns current gateway ID
	 *
	 * @return [type] [description]
	 */
	public function get_id() {
		return self::ID;
	}

	/**
	 * Returns current gateway name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return _x( 'PayPal Checkout', 'Paypal gateways editor data', 'jet-form-builder' );
	}

	protected function options_list() {
		return array(
			'client_id'    => array(
				'label' => _x( 'Client ID', 'Paypal gateways editor data', 'jet-form-builder' ),
			),
			'secret'       => array(
				'label' => _x( 'Secret Key', 'Paypal gateways editor data', 'jet-form-builder' ),
			),
			'currency'     => array(
				'required' => false,
			),
			'use_global'   => array(
				'label'    => _x( 'Use Global Settings', 'Paypal gateways editor data', 'jet-form-builder' ),
				'required' => false,
			),
			'gateway_type' => array(
				'label'   => _x( 'Gateway Action', 'Paypal gateways editor data', 'jet-form-builder' ),
				'default' => Scenarios_Logic\Pay_Now::scenario_id(),
			),
		);
	}

	public function custom_labels(): array {
		return array(
			'scenario' => Scenarios_Manager::instance()->view()->get_editor_labels(),
		);
	}

	public function additional_editor_data(): array {
		return array_merge(
			array(
				'version'   => 1,
				'scenarios' => Tools::with_placeholder(
					Scenarios_Manager::instance()->view()->get_items_list(),
					__( 'Choose scenario...', 'jet-form-builder' )
				),
			),
			Scenarios_Manager::instance()->view()->get_editor_data()
		);
	}

	// statuses from scenario

	/**
	 * @return array
	 * @throws Gateway_Exception
	 */
	public function failed_statuses() {
		return $this->query_scenario()->get_failed_statuses();
	}

	protected function retrieve_gateway_meta() {
		return Plugin::instance()->post_type->get_gateways( $this->data['form_id'] ?? 0 );
	}

	/**
	 * @return string|void
	 * @throws Gateway_Exception
	 */
	public function get_payment_token() {
		return $this->query_scenario()->get_queried_token();
	}

	/**
	 * @param $order_id
	 * @param $form_id
	 *
	 * @return mixed|void
	 * @throws Gateway_Exception
	 */
	protected function query_order_token( $order_id, $form_id ) {
		return $this->get_current_token();
	}

	/**
	 * Process gateway payment
	 *
	 * @param $action_handler
	 *
	 * @return void [type] [description]
	 * @throws Gateway_Exception
	 */
	public function after_actions( Action_Handler $action_handler ) {
		$this->get_scenario()->process_before();
	}

	/**
	 * @return mixed
	 * @throws Gateway_Exception
	 */
	protected function retrieve_payment_instance() {
		return $this->query_scenario()->process_after();
	}

	/**
	 * @throws Gateway_Exception
	 */
	protected function set_gateway_data_on_result() {
		$this->query_scenario()->process_save();
	}

	/**
	 * @return Scenarios_Logic\Scenario_Logic_Base
	 * @throws Gateway_Exception
	 */
	public function get_scenario() {
		return Scenarios_Manager::instance()->get_logic( $this )->install( $this );
	}

	/**
	 * @return Scenarios_Logic\Scenario_Logic_Base
	 * @throws Gateway_Exception
	 */
	public function query_scenario() {
		return Scenarios_Manager::instance()->query_logic()->install( $this );
	}

	public static function get_credentials() {
		return GM::instance()->get_global_settings( self::ID );
	}

	public static function get_credentials_by_form( $form_id ) {
		if ( ! $form_id ) {
			return self::get_credentials();
		}
		$credits = GM::instance()->get_form_gateways_by_id( $form_id )[ self::ID ] ?? array();

		if ( ! empty( $credits['client_id'] ) && ! empty( $credits['secret'] ) ) {
			return $credits;
		}

		return self::get_credentials();
	}

	/**
	 * Returns auth token for current client_id and secret combination
	 *
	 * @return mixed|void [description]
	 * @throws Gateway_Exception
	 */
	public function get_current_token() {
		$client_id = $this->current_gateway( 'client_id' );
		$secret    = $this->current_gateway( 'secret' );

		return self::get_token_with_credits( $client_id, $secret );
	}

	/**
	 * @param $form_id
	 *
	 * @return mixed|string
	 * @throws Gateway_Exception
	 */
	public static function get_token_by_form_id( $form_id ) {
		if ( ! $form_id ) {
			return self::get_token_global();
		}

		$paypal = self::get_credentials_by_form( $form_id );

		return self::get_token_with_credits(
			$paypal['client_id'] ?? '',
			$paypal['secret'] ?? ''
		);
	}

	/**
	 * @return mixed|string
	 * @throws Gateway_Exception
	 */
	public static function get_token_global() {
		$credits = self::get_credentials();

		$secret    = $credits['secret'] ?? false;
		$client_id = $credits['client_id'] ?? false;

		return self::get_token_with_credits( $client_id, $secret );
	}

	/**
	 * @param $client_id
	 * @param $secret
	 *
	 * @return mixed|string
	 * @throws Gateway_Exception
	 */
	public static function get_token_with_credits( $client_id, $secret ) {
		if ( ! $client_id || ! $secret ) {
			throw new Gateway_Exception( 'Empty `client_id` or `secret_key`.', array( $client_id, $secret ) );
		}
		$hash  = md5( $client_id . $secret );
		$token = get_transient( $hash );

		if ( $token ) {
			return $token;
		}

		$request = ( new Get_Token() )
			->set_credentials( $client_id, $secret );

		$response = $request->send_request();

		if ( empty( $response['access_token'] ) ) {
			throw new Gateway_Exception( $response['error_description'], $response, $request->get_request_args() );
		}

		$token = $response['access_token'];

		set_transient( $hash, $token, $response['expires_in'] * 0.9 );

		return $token;
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function set_gateway_data() {
		$this->get_scenario()->set_gateway_data();
	}

}
