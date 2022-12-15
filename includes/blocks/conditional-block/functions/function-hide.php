<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Functions;


use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Types\Base_Condition_Type;
use Jet_Form_Builder\Blocks\Exceptions\Condition_Exception;

class Function_Hide extends Base_Function {

	const ID = 'hide';

	public function get_id(): string {
		return self::ID;
	}

	public function get_title(): string {
		return __( 'Hide if...', 'jet-form-builder' );
	}

	public function get_display(): string {
		return __( 'Hide current block', 'jet-form-builder' );
	}

}