<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Functions;


class Function_Hide extends Base_Function {

	const ID = 'hide';

	public function get_id(): string {
		return self::ID;
	}

	public function get_title(): string {
		return __( 'Hide this field if...', 'jet-form-builder' );
	}

}