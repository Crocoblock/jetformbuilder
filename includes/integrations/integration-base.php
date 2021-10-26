<?php

namespace Jet_Form_Builder\Integrations;

abstract class Integration_Base {
	protected $api_base_url     = '';
	protected $api_key          = '';
	protected $api_request_args = array();

	public function __construct( $api_key ) {
		$this->api_key = $api_key;
	}

	abstract public function get_all_data();

	public function request( $end_point, $request_args = array() ) {
		$args     = array_merge_recursive( $this->api_request_args, $request_args );
		$response = wp_remote_request( $this->api_base_url . $end_point, $args );

		if ( ! $response || is_wp_error( $response ) ) {
			return false;
		}

		$data = wp_remote_retrieve_body( $response );

		if ( ! $data ) {
			return array();
		}

		$data = json_decode( $data, true );

		return $data;
	}

}
