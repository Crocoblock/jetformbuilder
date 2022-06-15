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
