<?php


namespace Jet_Form_Builder\Blocks\Validation_Messages;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Is_Empty_Value extends Base_Message {

	public function get_id(): string {
		return 'empty';
	}

	public function get_label(): string {
		return __( 'Field is empty', 'jet-form-builder' );
	}

	public function get_initial(): string {
		return __( 'Please fill out this field.', 'jet-form-builder' );
	}
}
