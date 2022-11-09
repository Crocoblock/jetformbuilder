<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Operators;


class Operator_Render_State extends Base_Operator {

	const SELF = 'render_state';

	/**
	 * @return string
	 */
	public function get_id(): string {
		return self::SELF;
	}

	/**
	 * @return string
	 */
	public function get_title(): string {
		return __( 'Is render state', 'jet-form-builder' );
	}

	public function is_supported(): bool {
		return false;
	}

	public function is_field_relative(): bool {
		return false;
	}

}