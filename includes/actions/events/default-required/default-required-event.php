<?php


namespace Jet_Form_Builder\Actions\Events\Default_Required;

use Jet_Form_Builder\Actions\Events\Base_Event;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Default_Required_Event extends Base_Event {

	public function get_id(): string {
		return 'DEFAULT.REQUIRED';
	}

	public function get_label(): string {
		return __( 'When validation of request is failed', 'jet-form-builder' );
	}

	public function get_help(): string {
		return __(
			'is executed at any time regardless of the form errors 
and unsuccessfully executed actions. The event is performed at the 
very end before the form response is submitted. By default, it is 
used by the Save Form Record action and cannot be added to other events 
through the form editor.
<br/>
<i>P.S. In case there are several post-submit actions under one DEFAULT.REQUIRED event, 
then Save Form Record should come last on the list. Otherwise, 
the status for the completed action will be saved incorrectly;</i>',
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
