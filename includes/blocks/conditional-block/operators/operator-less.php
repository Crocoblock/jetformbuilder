<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Operators;


class Operator_Less extends Base_Operator {

	const ID = 'less';

	public function get_id(): string {
		return self::ID;
	}

	public function get_title(): string {
		return __( 'Less than', 'jet-form-builder' );
	}

	public function is_supported(): bool {
		return false;
	}

}