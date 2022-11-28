<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Operators;


class Operator_Not_Empty extends Base_Operator {

	const ID = 'not_empty';

	public function get_id(): string {
		return self::ID;
	}

	public function get_title(): string {
		return __( 'Not empty', 'jet-form-builder' );
	}

	public function is_supported(): bool {
		return false;
	}
}