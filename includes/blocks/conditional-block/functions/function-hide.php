<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Functions;


class Function_Hide extends Base_Function {

	public function get_id(): string {
		return 'hide';
	}

	public function get_title(): string {
		return __( 'Hide this field if...', 'jet-form-builder' );
	}

}