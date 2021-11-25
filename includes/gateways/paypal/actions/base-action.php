<?php


namespace Jet_Form_Builder\Gateways\Paypal\Actions;

use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Gateway_Manager;
use Jet_Form_Builder\Gateways\Paypal\Controller;

abstract class Base_Action {

	const CODE_OK = 200;
	const CODE_CREATED = 201;
	const CODE_NO_CONTENT = 204;

	protected $auth;
	protected $method = 'POST';
	protected $body = array();
	protected $response;
	protected $response_body;
	protected $response_code;
	protected $response_message;
	protected $response_headers;
	protected $is_body_set = false;

	abstract public function action_slug();

	abstract public function action_endpoint();

	public function accept_code(): int {
		return self::CODE_OK;
	}

	public function action_headers() {
		return array();
	}

	public function action_body() {
		return array();
	}

	public function get_url(): string {
		return $this->api_url( $this->action_endpoint() );
	}

	public function get_method(): string {
		return $this->method;
	}

	public function get_auth() {
		return $this->auth;
	}

	public function set_bearer_auth( $token ): Base_Action {
		$this->set_auth( "Bearer $token" );

		return $this;
	}

	public function set_basic_auth( $token ): Base_Action {
		$this->set_auth( "Basic $token" );

		return $this;
	}

	public function set_auth( $auth_str ): Base_Action {
		$this->auth = $auth_str;

		return $this;
	}

	public function set_body( $content ): Base_Action {
		if ( ! $content ) {
			return $this;
		}

		if ( is_string( $content ) ) {
			$this->body = $content;
		}

		if ( is_array( $content ) ) {
			$this->body = array_merge( $this->body, $content );
		}

		return $this;
	}

	public function get_headers(): array {
		$args = array(
			'Accept-Language' => get_locale(),
		);

		if ( $this->get_auth() ) {
			$args['Authorization'] = $this->get_auth();
		}

		return array_merge( $args, $this->action_headers() );
	}

	protected function is_body_ready(): bool {
		return is_string( $this->body );
	}

	public function get_body() {
		if ( $this->is_body_ready() ) {
			return $this->body;
		}

		if ( version_compare( phpversion(), '7.1', '>=' ) ) {
			ini_set( 'precision', 17 );
			ini_set( 'serialize_precision', - 1 );
		}

		$this->body = $this->to_json( $this->body );

		return $this->body;
	}

	protected function to_json( $body ) {
		return wp_unslash( Tools::encode_json( $body ) );
	}

	public function get_request_args(): array {
		$args = array(
			'timeout' => 45,
			'headers' => $this->get_headers(),
		);

		if ( 'GET' === $this->get_method() ) {
			return $args;
		}

		$args['method'] = $this->get_method();

		$this->set_body( $this->action_body() );

		if ( ! empty( $this->body ) ) {
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
	 */
	public function request(): Base_Action {
		$this->before_make_request();

		$response = $this->get_response();

		$this->set_response_body( wp_remote_retrieve_body( $response ) );
		$this->set_response_code( (int) wp_remote_retrieve_response_code( $response ) );
		$this->set_response_message( wp_remote_retrieve_response_message( $response ) );
		$this->set_response_headers( wp_remote_retrieve_headers( $response ) );

		return $this;
	}

	public function get_response_headers() {
		return $this->response_headers;
	}

	private function set_response_headers( $headers ): Base_Action {
		$this->response_headers = $headers;

		return $this;
	}

	private function set_response_message( $message ): Base_Action {
		$this->response_message = $message;

		return $this;
	}

	public function get_response_message() {
		return $this->response_message;
	}

	private function get_response_body() {
		return $this->response_body;
	}

	private function set_response_body( $body ): Base_Action {
		$this->response_body = $body;

		return $this;
	}

	public function get_response_code() {
		return $this->response_code;
	}


	private function set_response_code( $code ): Base_Action {
		$this->response_code = $code;

		return $this;
	}

	public function response_message( $base_message ): string {
		return $base_message . "\r\n" . sprintf(
				'%d: %s',
				$this->get_response_code(),
				$this->get_response_message()
			);
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function check_response_code(): Base_Action {
		if ( $this->accept_code() === $this->get_response_code() ) {
			return $this;
		}
		$this->response_body_as_array();

		throw new Gateway_Exception(
			$this->response_message( 'Invalid HTTP code.' ),
			$this->get_response_body(),
			$this->get_body()
		);
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function response_body_as_array(): Base_Action {

		if ( is_array( $this->get_response_body() ) ) {
			return $this;
		}

		if ( empty( $this->get_response_body() ) ) {
			throw new Gateway_Exception( $this->response_message( 'Empty response.' ) );
		}
		if ( is_wp_error( $this->get_response_body() ) ) {
			/** @var \WP_Error $response */
			throw new Gateway_Exception(
				$this->response_message( 'Internal error.' ),
				$response->get_error_message(
					$response->get_error_code()
				)
			);
		}

		$parsed_response = Tools::decode_json( $this->get_response_body() );

		if ( is_null( $parsed_response ) ) {
			throw new Gateway_Exception(
				$this->response_message( 'Invalid JSON.' ),
				$this->get_response_body()
			);
		}

		$this->set_response_body( $parsed_response );

		return $this;
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function send_request() {
		$this->request();

		$this->response_body_as_array();

		return $this->get_response_body();
	}


}
