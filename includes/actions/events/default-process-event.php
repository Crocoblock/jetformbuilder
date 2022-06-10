<?php


namespace Jet_Form_Builder\Actions\Events;


class Default_Process_Event extends Base_Event {

	public function get_id(): string {
		return 'DEFAULT.PROCESS';
	}

	public function get_label(): string {
		return __( 'When the Form was submitted', 'jet-form-builder' );
	}

	public function to_array(): array {
		return parent::to_array() + array(
			'always' => true,
		);
	}

}