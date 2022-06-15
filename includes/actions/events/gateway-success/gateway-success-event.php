<?php


namespace Jet_Form_Builder\Actions\Events\Gateway_Success;


use Jet_Form_Builder\Actions\Events\Base_Executor;
use Jet_Form_Builder\Actions\Events\Base_Gateway_Event;

class Gateway_Success_Event extends Base_Gateway_Event {

	public function get_id(): string {
		return 'GATEWAY.SUCCESS';
	}

	public function get_label(): string {
		return __( 'When passing through the gateway', 'jet-form-builder' );
	}

	/**
	 * @return Base_Executor[]
	 */
	public function executors(): array {
		return array(
			new Gateway_Success_Executor(),
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