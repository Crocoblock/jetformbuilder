<?php


namespace Jet_Form_Builder\Actions\Events\Gateway_Failed;


use Jet_Form_Builder\Actions\Events\Base_Executor;
use Jet_Form_Builder\Actions\Events\Base_Gateway_Event;

class Gateway_Failed_Event extends Base_Gateway_Event {

	public function get_id(): string {
		return 'GATEWAY.FAILED';
	}

	public function get_label(): string {
		return __( 'When canceling the passage of the gateway', 'jet-form-builder' );
	}

	/**
	 * @return Base_Executor[]
	 */
	public function executors(): array {
		return array(
			new Gateway_Failed_Executor(),
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