<?php


namespace Jet_Form_Builder\Gateways;


use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Gateway_Exception;

abstract class Base_Gateway_Action {

	const CODE_OK         = 200;
	const CODE_CREATED    = 201;
	const CODE_NO_CONTENT = 204;

	const SUCCESS_CODES = array(
		self::CODE_OK,
		self::CODE_CREATED,
		self::CODE_NO_CONTENT,
	);

	protected $auth;
	protected $method     = 'POST';
	protected $body       = array();
	protected $response;
	protected $response_body;
	protected $response_code;
	protected $response_message;
	protected $response_headers;
	protected $path_parts = array();
	protected $custom_url = '';

	abstract public function action_endpoint();

	abstract public function base_url(): string;

	public function action_headers() {
		return array();
	}

	public function action_body() {
		return array();
	}

	public function action_query_args(): array {
		return array();
	}

	public function set_url( $url ): self {
		$this->custom_url = esc_url_raw( $url );

		return $this;
	}

	public function get_raw_url(): string {
		return $this->api_url( $this->action_endpoint(), $this->action_query_args() );
	}

	public function get_url(): string {
		if ( $this->custom_url ) {
			return $this->custom_url;
		}

		$url = $this->get_raw_url();

		if ( empty( $this->path_parts ) ) {
			return esc_url_raw( $url );
		}

		return esc_url_raw(
			preg_replace_callback_array(
				$this->get_parts_patterns(),
				$url
			)
		);
	}

	public function get_parts_patterns(): array {
		$patterns = array();

		foreach ( $this->path_parts as $key => $value ) {
			$patterns["#\{($key)\}#"] = function ( $matches ) use ( $value ) {
				return $value;
			};
		}

		return $patterns;
	}

	public function get_method(): string {
		return $this->method;
	}

	public function get_auth() {
		return $this->auth;
	}

	public function set_bearer_auth( $token ): self {
		$this->set_auth( "Bearer $token" );

		return $this;
	}

	public function set_basic_auth( $token ): self {
		$this->set_auth( "Basic $token" );

		return $this;
	}

	public function set_auth( $auth_str ): self {
		$this->auth = $auth_str;

		return $this;
	}

	public function set_path( array $parts ): self {
		$this->path_parts = array_merge( $this->path_parts, $parts );

		return $this;
	}

	public function set_body( $content ): self {
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

		if ( ! $this->is_body_ready() ) {
			$this->set_body( $this->action_body() );
		}

		if ( ! empty( $this->body ) ) {
			$args['body'] = $this->get_body();
		}

		return $args;
	}

	public function set_method( $method ) {
		$this->method = $method;

		return $this;
	}

	/**
	 * Return API url
	 *
	 * @param $endpoint
	 * @param $query_args
	 *
	 * @return string
	 */
	public function api_url( $endpoint, $query_args ): string {
		$url = $this->base_url() . $endpoint;

		if ( empty( $query_args ) ) {
			return $url;
		}

		return add_query_arg( $query_args, $url );
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
	public function request(): self {
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

	private function set_response_headers( $headers ): self {
		$this->response_headers = $headers;

		return $this;
	}

	private function set_response_message( $message ): self {
		$this->response_message = $message;

		return $this;
	}

	public function get_response_message() {
		return $this->response_message;
	}

	public function get_response_body() {
		return $this->response_body;
	}

	private function set_response_body( $body ): self {
		$this->response_body = $body;

		return $this;
	}

	public function get_response_code() {
		return $this->response_code;
	}


	private function set_response_code( $code ): self {
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
	public function check_response_code(): self {
		if ( in_array( $this->get_response_code(), self::SUCCESS_CODES, true ) ) {
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
	public function response_body_as_array(): self {

		if ( is_array( $this->get_response_body() ) ) {
			return $this;
		}

		if ( empty( $this->get_response_body() ) ) {
			throw new Gateway_Exception( $this->response_message( 'Empty response.' ) );
		}
		if ( is_wp_error( $this->get_response_body() ) ) {
			/** @var \WP_Error $response */
			$response = $this->get_response_body();

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
				$this->get_response_body(),
				$this->get_request_args(),
				$this->get_url()
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