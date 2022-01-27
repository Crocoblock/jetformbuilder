<?php


namespace Jet_Form_Builder\Form_Response\Types;

class Reload_Response extends Response_It {

	public function get_field_errors( $errors ) {
		return rawurlencode( wp_json_encode( $errors ) );
	}

	public function parse_status( $status ) {
		return rawurlencode( str_replace( '\'', '`', $status ) );
	}

	public function additional_fields() {
		return array( 'refer', 'response', 'remove_args' );
	}

	private function maybe_remove_query_args() {
		if ( empty( $this->additional->remove_args ) ) {
			return;
		}

		$this->additional->refer = remove_query_arg(
			$this->additional->remove_args,
			$this->additional->refer
		);
	}

	public function send( array $query_args ) {
		$this->maybe_remove_query_args();

		// phpcs:ignore WordPress.Security.SafeRedirect.wp_redirect_wp_redirect
		wp_redirect( $this->get_redirect_url( $query_args ) );
		die();
	}

	private function get_redirect_url( $query_args ) {
		if ( ! empty( $query_args['redirect'] ) ) {
			return $query_args['redirect'];
		}
		return add_query_arg( $query_args, $this->additional->refer );
	}
}
