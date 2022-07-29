<?php


namespace Jet_Form_Builder\Blocks\Validation_Messages;


class Is_Empty_Value extends Base_Message {

	public function get_id(): string {
		return 'empty';
	}

	public function get_label(): string {
		return __( 'If Field is empty', 'jet-form-builder' );
	}

	public function get_initial(): string {
		return __( 'Please fill out this field.', 'jet-form-builder' );
	}
}