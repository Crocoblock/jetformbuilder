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
			'Replacing the old option for selecting actions "On success payment";
It is executed after passing the checkout on the side of the payment system, 
if a payment has been made or a subscription has been issued.',
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