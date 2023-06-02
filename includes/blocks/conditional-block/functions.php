<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block;

use Jet_Form_Builder\Blocks\Conditional_Block\Functions\Base_Function;
use Jet_Form_Builder\Blocks\Conditional_Block\Functions\Function_Hide;
use Jet_Form_Builder\Blocks\Conditional_Block\Functions\Function_Show;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use JFB_Components\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Functions implements Arrayable {

	use Repository_Pattern_Trait;

	public function __construct() {
		$this->rep_install();
	}

	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/conditional-block/functions',
			array(
				new Function_Show(),
				new Function_Hide(),
			)
		);
	}

	/**
	 * @param string $slug
	 *
	 * @return Base_Function
	 * @throws Repository_Exception
	 */
	public function get_function( string $slug ): Base_Function {
		return $this->rep_get_item( $slug );
	}

	/**
	 * @return array
	 */
	public function to_array(): array {
		return Array_Tools::to_array( $this->rep_get_items() );
	}
}
