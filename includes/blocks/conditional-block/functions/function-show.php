<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Functions;

use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Types\Base_Condition_Type;
use Jet_Form_Builder\Blocks\Exceptions\Condition_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Function_Show extends Base_Function {

	const ID = 'show';

	public function get_id(): string {
		return self::ID;
	}

	public function get_title(): string {
		return __( 'Show if...', 'jet-form-builder' );
	}

	public function get_display(): string {
		return __( 'Show current block', 'jet-form-builder' );
	}

}
