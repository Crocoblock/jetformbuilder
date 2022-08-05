<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block;


use Jet_Form_Builder\Blocks\Conditional_Block\Functions\Base_Function;
use Jet_Form_Builder\Blocks\Conditional_Block\Functions\Function_Hide;
use Jet_Form_Builder\Blocks\Conditional_Block\Functions\Function_Hide_Dom;
use Jet_Form_Builder\Blocks\Conditional_Block\Functions\Function_Set_Value;
use Jet_Form_Builder\Blocks\Conditional_Block\Functions\Function_Show;
use Jet_Form_Builder\Blocks\Conditional_Block\Functions\Function_Show_Dom;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;

class Functions implements Arrayable {

	use Repository_Pattern_Trait;

	public function __construct() {
		$this->rep_install();
	}

	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/conditional-block/functions',
			array(
				new Function_Hide(),
				new Function_Show(),
				new Function_Set_Value(),
				new Function_Show_Dom(),
				new Function_Hide_Dom(),
			)
		);
	}

	/**
	 * @param string $slug
	 *
	 * @throws Repository_Exception
	 */
	public function isset_function( string $slug ) {
		$this->rep_throw_if_undefined( $slug );
	}

	/**
	 * @return array
	 */
	public function to_array(): array {
		return Array_Tools::to_array( $this->rep_get_items() );
	}
}