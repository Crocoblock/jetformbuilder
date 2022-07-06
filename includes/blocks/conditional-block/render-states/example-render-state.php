<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Render_States;


class Example_Render_State extends Base_Render_State {

	public function get_id(): string {
		return 'EXAMPLE.STATE';
	}

	public function get_title(): string {
		return __( 'Some description', 'jet-form-builder' );
	}

	public function is_supported(): bool {
		return false;
	}

}