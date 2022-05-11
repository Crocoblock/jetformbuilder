<?php


namespace Jet_Form_Builder\Actions\Events;


class Failed_Gateway_Event extends Base_Gateway_Event {

	public static function get_slug(): string {
		return 'GATEWAY.FAILED';
	}

	public function get_label(): string {
		return __( 'When canceling the passage of the gateway', 'jet-form-builder' );
	}

	protected function get_unsupported_actions(): array {
		return array( 'redirect_to_page' );
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