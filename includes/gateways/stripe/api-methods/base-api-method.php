<?php


namespace Jet_Form_Builder\Gateways\Stripe\Api_Methods;


use Jet_Form_Builder\Classes\Curl_Helper;

abstract class Base_Api_Method {

	private $api_url = 'https://api.stripe.com/';
	private $curl_instance = false;
	protected $response = array();
	protected $token;

	public function __construct( $token ) {
		$this->token = $token;
	}

	abstract public function method_name();

	public function get_request( $endpoint = '', $with_clear = false ) {
		if ( $with_clear ) {
			$this->clear_request();
		}

		if ( false === $this->curl_instance ) {
			$this->curl_instance = new Curl_Helper( $this->api_url( $endpoint ) );
		}
		return $this->curl_instance;
	}

	public function clear_request() {
		$this->curl_instance = false;
	}

	public function api_url( $endpoint = '' ) {
		return $this->api_url . $this->method_name() . $endpoint;
	}

	public function _save_response( $type, $response ) {
		$this->response[ $type ] = $response;
	}

	public function get_response_create( $key = '' ) {
		return $key ? $this->get_response( 'create' )[ $key ] : $this->get_response( 'create' );
	}

	public function get_response( $type = '' ) {
		return $type ? $this->response[ $type ] : $this->response;
	}

	public function save_response( $type ) {
		$this->_save_response(
			$type,
			json_decode( $this->get_request()->execute(), true )
		);
	}


	public function create( $fields ) {
		$this->get_request()
		     ->set_auth( $this->token )
		     ->set_post_fields( http_build_query( $fields ) );

		$this->save_response( 'create' );
	}

}