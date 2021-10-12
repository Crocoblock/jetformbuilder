<?php


namespace Jet_Form_Builder\Gateways\Paypal\Actions;


use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Gateway_Manager;
use Jet_Form_Builder\Gateways\Paypal\Controller;

abstract class Paypal_Base_Action {

	protected $auth;
	protected $method = 'POST';

	abstract public function action_slug();

	abstract public function action_endpoint();

	abstract public function action_headers();

	abstract public function action_body();

	public function get_url() {
		return $this->api_url( $this->action_endpoint() );
	}

	public function get_method() {
		return $this->method;
	}

	public function get_auth() {
		return $this->auth;
	}

	public function set_bearer_auth( $token ) {
		$this->set_auth( "Bearer $token" );

		return $this;
	}

	public function set_basic_auth( $token ) {
		$this->set_auth( "Basic $token" );

		return $this;
	}

	public function set_auth( $auth_str ) {
		$this->auth = $auth_str;

		return $this;
	}

	public function get_headers() {
		$args = array(
			'Content-Type'    => 'application/json',
			'Accept-Language' => get_locale(),
		);

		if ( $this->get_auth() ) {
			$args['Authorization'] = $this->get_auth();
		}

		return array_merge( $args, $this->action_headers() );
	}

	public function get_body() {
		$body = $this->action_body();

		if ( ! is_array( $body ) ) {
			return $body;
		}

		if ( version_compare( phpversion(), '7.1', '>=' ) ) {
			ini_set( 'precision', 17 );
			ini_set( 'serialize_precision', - 1 );
		}

		return wp_json_encode( $body );
	}

	public function get_request_args() {
		$args = array(
			'timeout' => 45,
			'headers' => $this->get_headers(),
		);

		if ( 'GET' === $this->get_method() ) {
			return $args;
		}

		$args['method'] = $this->get_method();

		if ( $this->action_body() ) {
			$args['body'] = $this->get_body();
		}

		return $args;
	}

	public function set_method( $method ) {
		$this->method = $method;

		return $this;
	}

	public function base_url() {
		return Gateway_Manager::instance()->is_sandbox
			? 'https://api-m.sandbox.paypal.com/'
			: 'https://api-m.paypal.com/';
	}

	/**
	 * Return API url
	 *
	 * @param $endpoint
	 *
	 * @return string
	 */
	public function api_url( $endpoint ) {
		return esc_url( $this->base_url() . $endpoint );
	}

	public function get_response() {
		$params = array( $this->get_url(), $this->get_request_args() );

		return 'POST' === $this->get_method()
			? wp_remote_post( ...$params )
			: wp_remote_get( ...$params );
	}

	public function before_make_request() {
	}

	/**
	 * Make a request
	 *
	 * @return string
	 */
	public function request() {
		$this->before_make_request();

		return wp_remote_retrieve_body( $this->get_response() );
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function send_request() {
		$response = $this->request();

		if ( empty( $response ) ) {
			throw new Gateway_Exception( 'empty_response' );
		}
		if ( is_wp_error( $response ) ) {
			/** @var \WP_Error $response */
			throw new Gateway_Exception( 'wp_error', $response->get_error_message(
				$response->get_error_code()
			) );
		}

		$parsed_response = json_decode( $response, true );

		if ( is_null( $parsed_response ) ) {
			throw new Gateway_Exception( 'invalid_json', $parsed_response );
		}

		return $parsed_response;
	}


}