<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Render_States;


class Default_State extends Base_Render_State {

	public function get_id(): string {
		return 'DEFAULT.STATE';
	}

	public function get_title(): string {
		return __( 'Normal form output process', 'jet-form-builder' );
	}

	/**
	 * @return bool
	 */
	public function is_supported(): bool {
		return false;
	}
}