<?php


namespace Jet_Form_Builder\Form_Response\Types;


class Reload_Response extends Response_It {

	public function get_field_errors( $errors ) {
		return urlencode( json_encode( $errors ) );
	}

	public function parse_status( $status ) {
		return urlencode( $status );
	}

	public function additional_fields() {
		return array( 'refer', 'response' );
	}

	public function send( array $query_args ) {
		$redirect = add_query_arg( $query_args, $this->additional->refer );
		wp_redirect( $redirect );
		die();
	}
}