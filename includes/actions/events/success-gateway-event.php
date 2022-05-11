<?php


namespace Jet_Form_Builder\Actions\Events;


class Success_Gateway_Event extends Base_Gateway_Event {

	public static function get_slug(): string {
		return 'GATEWAY.SUCCESS';
	}

	public function get_label(): string {
		return __( 'When passing through the gateway', 'jet-form-builder' );
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