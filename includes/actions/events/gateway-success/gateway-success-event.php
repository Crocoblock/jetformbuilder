<?php


namespace Jet_Form_Builder\Actions\Events\Gateway_Success;


use Jet_Form_Builder\Actions\Events\Base_Executor;
use Jet_Form_Builder\Actions\Events\Base_Gateway_Event;
use Jet_Form_Builder\Actions\Events\Default_Process\Default_Process_Executor;

class Gateway_Success_Event extends Base_Gateway_Event {

	public function get_id(): string {
		return 'GATEWAY.SUCCESS';
	}

	public function get_label(): string {
		return __( 'When passing through the gateway', 'jet-form-builder' );
	}

	public function get_help(): string {
		return __(
			'replaces the old "On success payment" option for selecting post-submit actions. 
The event is executed after passing the checkout on the payment system\'s side, 
provided the payment/subscription has been successful;',
			'jet-form-builder'
		);
	}

	/**
	 * @return Base_Executor[]
	 */
	public function executors(): array {
		return array(
			new Gateway_Success_Executor(),
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