<?php

namespace Jet_Form_Builder\Gateways\Paypal;

use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Base_Scenario_Gateway;
use Jet_Form_Builder\Gateways\Gateway_Manager as GM;
use Jet_Form_Builder\Gateways\Paypal\Api_Actions\Get_Token;

class Controller extends Base_Scenario_Gateway {

	const ID = 'paypal';

	public $data     = false;
	public $message  = false;
	public $redirect = false;

	protected $token_query_name = 'token';

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

}
