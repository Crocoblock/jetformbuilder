<?php

namespace Jet_Form_Builder\Integrations;

use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Integration_Base {
	protected $api_base_url = '';
	protected $api_key = '';
	protected $api_request_args = array();

	public function __construct( $api_key ) {
		$this->api_key = $api_key;
	}

	public function success_codes(): array {
		return array( 204, 200 );
	}

	abstract public function get_all_data();

	public function request( $end_point, $request_args = array() ) {
		$response = $this->base_request( $end_point, $request_args );

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

	/**
	 * @param $end_point
	 * @param array $request_args
	 *
	 * @throws Silence_Exception
	 */
	public function request_with_code( $end_point, $request_args = array() ) {
		$response = $this->base_request( $end_point, $request_args );
		$code     = (int) wp_remote_retrieve_response_code( $response );

		if ( ! in_array( $code, $this->success_codes(), true ) ) {
			$message = wp_remote_retrieve_response_message( $response );

			throw new Silence_Exception( $message );
		}
	}

	public function base_request( $end_point, $request_args = array() ) {
		$args = array_merge_recursive( $this->api_request_args, $request_args );
		$url  = esc_url_raw( $this->api_base_url . $end_point );

		return wp_remote_request( $url, $args );
	}

}
