<?php


namespace Jet_Form_Builder\Actions\Events;


class Failed_Gateway_Event extends Base_Event {

	public static function get_slug(): string {
		return 'failed-gateway';
	}

	protected function get_unsupported_actions(): array {
		return array( 'redirect_to_page' );
	}

}