<?php


namespace Jet_Form_Builder\Actions\Events\Gateway_Failed;


use Jet_Form_Builder\Actions\Events\Base_Executor;
use Jet_Form_Builder\Actions\Events\Base_Gateway_Event;
use Jet_Form_Builder\Actions\Events\Default_Process\Default_Process_Executor;

class Gateway_Failed_Event extends Base_Gateway_Event {

	public function get_id(): string {
		return 'GATEWAY.FAILED';
	}

	public function get_label(): string {
		return __( 'When canceling the passage of the gateway', 'jet-form-builder' );
	}

	public function get_help(): string {
		return __(
			'replaces the old "On failed payment" option for selecting post-submit actions. 
The event is executed when the user returns from the payment system\'s checkout page 
without making a payment or subscribing;',
			'jet-form-builder'
		);
	}

	/**
	 * @return Base_Executor[]
	 */
	public function executors(): array {
		return array(
			new Gateway_Failed_Executor(),
		);
	}

	public function ignored_executors(): array {
		return array(
			Default_Process_Executor::class,
		);
	}

	/**
	 * @return string
	 */
	public function get_gateway(): string {
		return '';
	}

	/**
	 * @return string
	 */
	public function get_scenario(): string {
		return '';
	}
}