<?php


namespace Jet_Form_Builder\Actions\Events\Bad_Request;

use Jet_Form_Builder\Actions\Events\Base_Event;

class Bad_Request_Event extends Base_Event {

	public function get_id(): string {
		return 'BAD.REQUEST';
	}

	public function get_label(): string {
		return __( 'When validation of request is failed', 'jet-form-builder' );
	}

	public function get_help(): string {
		return __(
			'is executed after processing the request provided there are errors 
in the form fields such as a media field filled out in the wrong format, 
exceeded file size limit, etc. The event passes through DEFAULT.PROCESS;',
			'jet-form-builder'
		);
	}

	public function executors(): array {
		return array(
			new Bad_Request_Executor(),
		);
	}

	public function to_array(): array {
		return parent::to_array() + array(
				'always' => true,
			);
	}

}
