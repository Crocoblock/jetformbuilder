<?php


namespace Jet_Form_Builder\Classes;


class Curl_Helper {

	public $curl;
	public $url;
	public $fields = array();
	public $result;
	public $options = array();
	public $headers = array();


	public function __construct( $url ) {
		$this->curl = curl_init();
		$this->url  = $url;
	}

	public function add_header( $name, $value ) {
		$this->headers[] = "$name:$value";
	}

	public function set_headers( $headers ) {
		foreach ( $headers as $name => $value ) {
			$this->add_header( $name, $value );
		}
	}

	public function set_post_fields( $fields ) {
		if ( $fields ) {
			$this->options[ CURLOPT_POSTFIELDS ] = $fields;
		}

		return $this;
	}

	public function set_auth( $auth ) {
		$this->options[ CURLOPT_USERNAME ] = $auth;

		return $this;
	}

	private function set_options() {
		$this->options += array(
			CURLOPT_URL            => $this->url,
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_TIMEOUT        => 10,
		);
	}

	public function set_post( $is_post = true ) {
		if ( $is_post ) {
			$this->options[ CURLOPT_POST ] = $is_post;
		}

		return $this;
	}

	public function execute() {
		$this->set_options();

		curl_setopt_array( $this->curl, $this->options );
		curl_setopt( $this->curl, CURLOPT_HTTPHEADER, $this->headers );

		$this->result = curl_exec( $this->curl );

		return $this->result;
	}

}
