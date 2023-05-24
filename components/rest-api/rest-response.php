<?php


namespace JFB_Components\Rest_Api;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Rest_Response extends \WP_REST_Response {

	public function get_custom_header_prefix(): string {
		return 'X-JFB-';
	}

	public function set_headers_merge( array $headers ) {
		if ( ! is_array( $this->headers ) ) {
			$this->set_headers( array() );
		}

		$this->set_headers( array_merge( $this->headers, $headers ) );
	}

	public function set_headers_custom( $headers ) {
		$prefix   = $this->get_custom_header_prefix();
		$prepared = array();

		foreach ( $headers as $name => $value ) {
			$prepared[ $prefix . $name ] = $value;
		}

		$this->set_headers_merge( $prepared );
	}
}
