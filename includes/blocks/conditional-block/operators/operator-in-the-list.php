<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Operators;


class Operator_In_The_List extends Base_Operator {

	const ID = 'one_of';

	public function get_id(): string {
		return self::ID;
	}

	public function get_title(): string {
		return __( 'In the list', 'jet-form-builder' );
	}

	public function is_supports(): bool {
		return false;
	}

}