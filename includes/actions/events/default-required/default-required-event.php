<?php


namespace Jet_Form_Builder\Actions\Events\Default_Required;

use Jet_Form_Builder\Actions\Events\Base_Event;

class Default_Required_Event extends Base_Event {

	public function get_id(): string {
		return 'DEFAULT.REQUIRED';
	}

	public function get_label(): string {
		return __( 'When validation of request is failed', 'jet-form-builder' );
	}

	public function get_help(): string {
		return __(
			'Is executed in any case, even in the presence of errors, 
or in case of unsuccessfully executed actions. 
This event is fired at the very end, before the form response is submitted.
By default, this event is used by the Save Form Record action 
and cannot be added to other events through the form editor;
P.S. if you use several actions in this event, 
then Save Form Record should be put last among these actions. 
Otherwise, the status for the completed action will be saved incorrectly.',
			'jet-form-builder'
		);
	}

	public function executors(): array {
		return array(
			new Default_Required_Executor(),
		);
	}

	public function to_array(): array {
		return parent::to_array() + array(
				'always' => true,
			);
	}

}
