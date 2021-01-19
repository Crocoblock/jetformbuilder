<?php


namespace Jet_Form_Builder\Form_Response\Types;


use Jet_Form_Builder\Form_Messages;

class Ajax_Response extends Response_It {

	public function get_field_errors( $errors ) {
		return $errors;
	}

	public function parse_status( $status ) {
		return $status;
	}

	public function send( array $query_args ) {
		$messages = $this->get_message_builder()->set_form_status( $query_args['status'] );

		$query_args['message'] = $messages->get_rendered_messages();

		wp_send_json( $query_args );
	}

	public function additional_fields() {
		return array( 'form_id', 'actions', 'response' );
	}

	public function get_message_builder() {
		return new Form_Messages\Builder( $this->additional );
	}

}