<?php


namespace Jet_Form_Builder\Actions\Events;


class Gateway_Failed_Event extends Base_Gateway_Event {

	public function get_id(): string {
		return 'GATEWAY.FAILED';
	}

	public function get_label(): string {
		return __( 'When canceling the passage of the gateway', 'jet-form-builder' );
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