<?php


namespace Jet_Form_Builder\Actions\Events\Default_Process;


use Jet_Form_Builder\Actions\Events\Base_Event;

class Default_Process_Event extends Base_Event {

	public function get_id(): string {
		return 'DEFAULT.PROCESS';
	}

	public function get_label(): string {
		return __( 'When the Form was submitted', 'jet-form-builder' );
	}

	public function executors(): array {
		return array(
			new Default_With_Gateway_Executor(),
			new Default_Process_Executor(),
		);
	}

	public function to_array(): array {
		return parent::to_array() + array(
			'always' => true,
		);
	}

}