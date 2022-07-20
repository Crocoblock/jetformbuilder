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

	public function get_help(): string {
		return __(
			'The moment of execution of actions. 
Occurs at the same stage that the actions were launched before.
It is necessary in cases where you have payment (PayPal/Stripe) 
functionality enabled in your form so that the plugin understands 
what actions need to be performed before redirecting to checkout;',
			'jet-form-builder'
		);
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