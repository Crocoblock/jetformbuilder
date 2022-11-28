<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Operators;


class Operator_Not_Between extends Base_Operator {

	const ID = 'not_between';

	public function get_id(): string {
		return self::ID;
	}

	public function get_title(): string {
		return __( 'Not between', 'jet-form-builder' );
	}

	public function is_supported(): bool {
		return false;
	}

}