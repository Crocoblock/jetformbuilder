<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Functions;


class Function_Show extends Base_Function {

	public function get_id(): string {
		return 'show';
	}

	public function get_title(): string {
		return __( 'Show this field if...', 'jet-form-builder' );
	}

}