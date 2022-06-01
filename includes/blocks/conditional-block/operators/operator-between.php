<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Operators;


class Operator_Between extends Base_Operator {

	const ID = 'between';

	public function get_id(): string {
		return self::ID;
	}

	public function get_title(): string {
		return __( 'Between', 'jet-form-builder' );
	}

	public function is_supports(): bool {
		return false;
	}

}