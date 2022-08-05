<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Functions;


use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Item;
use Jet_Form_Builder\Blocks\Exceptions\Condition_Exception;

class Function_Show_Dom extends Function_Show {

	const ID = 'show_dom';

	public function get_id(): string {
		return self::ID;
	}

	public function get_title(): string {
		return __( 'Show (add to DOM) if...', 'jet-form-builder' );
	}

}