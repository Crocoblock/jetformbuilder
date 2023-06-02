<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block;

use Jet_Form_Builder\Blocks\Conditional_Block\Operators\Base_Operator;
use Jet_Form_Builder\Blocks\Conditional_Block\Operators\Operator_Between;
use Jet_Form_Builder\Blocks\Conditional_Block\Operators\Operator_Contain;
use Jet_Form_Builder\Blocks\Conditional_Block\Operators\Operator_Empty;
use Jet_Form_Builder\Blocks\Conditional_Block\Operators\Operator_Equal;
use Jet_Form_Builder\Blocks\Conditional_Block\Operators\Operator_Not_Between;
use Jet_Form_Builder\Blocks\Conditional_Block\Operators\Operator_Not_Contain;
use Jet_Form_Builder\Blocks\Conditional_Block\Operators\Operator_Not_Empty;
use Jet_Form_Builder\Blocks\Conditional_Block\Operators\Operator_Not_Equal;
use Jet_Form_Builder\Blocks\Conditional_Block\Operators\Operator_Not_In_The_List;
use Jet_Form_Builder\Blocks\Conditional_Block\Operators\Operator_Render_State;
use Jet_Form_Builder\Blocks\Conditional_Block\Operators\Operator_Greater;
use Jet_Form_Builder\Blocks\Conditional_Block\Operators\Operator_In_The_List;
use Jet_Form_Builder\Blocks\Conditional_Block\Operators\Operator_Less;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use JFB_Components\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Operators implements Arrayable {

	use Repository_Pattern_Trait;

	public function __construct() {
		$this->rep_install();
	}

	/**
	 * @return array
	 */
	public function rep_instances(): array {
		$operators = array(
			new Operator_Equal(),
			new Operator_Not_Equal(),
			new Operator_Empty(),
			new Operator_Not_Empty(),
			new Operator_Greater(),
			new Operator_Less(),
			new Operator_Between(),
			new Operator_Not_Between(),
			new Operator_In_The_List(),
			new Operator_Not_In_The_List(),
			new Operator_Contain(),
			new Operator_Not_Contain(),
			new Operator_Render_State(),
		);

		return apply_filters(
			'jet-form-builder/conditional-block/operators',
			$operators
		);
	}

	/**
	 * @param string $slug
	 *
	 * @throws Repository_Exception
	 */
	public function isset_operator( string $slug ) {
		$this->rep_throw_if_undefined( $slug );
	}

	/**
	 * @param string $slug
	 *
	 * @return Base_Operator
	 */
	public function get_operator( string $slug ): Base_Operator {
		return $this->rep_get_item_or_die( $slug );
	}

	public function to_array(): array {
		return Array_Tools::to_array( $this->rep_get_items() );
	}
}
