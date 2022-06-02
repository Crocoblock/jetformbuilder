<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Operators;


class Operator_Greater extends Base_Operator {

	const ID = 'greater';

	public function get_id(): string {
		return self::ID;
	}

	public function get_title(): string {
		return __( 'Greater than', 'jet-form-builder' );
	}

}