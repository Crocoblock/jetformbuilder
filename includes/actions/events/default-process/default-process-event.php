<?php


namespace Jet_Form_Builder\Actions\Events\Default_Process;


use Jet_Form_Builder\Actions\Events\Base_Event;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Default_Process_Event extends Base_Event {

	public function get_id(): string {
		return 'DEFAULT.PROCESS';
	}

	public function get_label(): string {
		return __( 'When the Form was submitted', 'jet-form-builder' );
	}

	public function get_help(): string {
		return __(
			'the moment when all actions are executed. 
The event takes place at the same stage as the actions previously performed. 
It is necessary for forms where payment functionality (PayPal/Stripe) 
is enabled to let the plugin know which actions 
to perform before redirecting to checkout;',
			'jet-form-builder'
		);
	}

	public function executors(): array {
		return apply_filters(
			'jet-form-builder/default-process-event/executors',
			array(
				new Default_Process_Executor(),
			)
		);
	}

	public function to_array(): array {
		return parent::to_array() + array(
				'always' => true,
			);
	}

}