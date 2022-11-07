<?php


namespace Jet_Form_Builder\Blocks\Validation_Messages;


class Is_Date_Min extends Base_Message {

	public function get_id(): string {
		return 'date_min';
	}

	public function get_label(): string {
		return __( 'Timestamp is too early', 'jet-form-builder' );
	}

	public function get_initial(): string {
		return __( 'Timestamp is too early', 'jet-form-builder' );
	}
}