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
			'Is executed after processing the request, 
if there are errors in the fields. For example, when you filled 
out a media field in the wrong format on a form or exceeded the file limit.
Passes DEFAULT.PROCESS',
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
