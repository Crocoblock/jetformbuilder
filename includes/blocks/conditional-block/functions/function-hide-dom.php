<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Functions;


use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Item;
use Jet_Form_Builder\Blocks\Exceptions\Condition_Exception;

class Function_Hide_Dom extends Function_Hide {

	const ID = 'hide_dom';

	public function get_id(): string {
		return self::ID;
	}

	public function get_title(): string {
		return __( 'Hide (remove from DOM) if...', 'jet-form-builder' );
	}

}