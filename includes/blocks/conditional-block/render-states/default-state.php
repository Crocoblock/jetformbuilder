<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Render_States;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Default_State extends Base_Render_State {

	public function get_id(): string {
		return 'DEFAULT.STATE';
	}

	public function get_title(): string {
		return __( 'Normal form output process', 'jet-form-builder' );
	}

	public function is_supported_on_current(): bool {
		return false;
	}

	/**
	 * @return bool
	 */
	public function is_supported(): bool {
		return true;
	}

	public function can_be_switched(): bool {
		return true;
	}

	public function exclude_states(): array {
		return array();
	}
}
