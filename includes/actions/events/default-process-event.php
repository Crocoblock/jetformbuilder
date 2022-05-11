<?php


namespace Jet_Form_Builder\Actions\Events;


class Default_Process_Event extends Base_Event {

	public static function get_slug(): string {
		return 'DEFAULT.PROCESS';
	}

	public function get_label(): string {
		return __( 'When the Form was submitted', 'jet-form-builder' );
	}

}