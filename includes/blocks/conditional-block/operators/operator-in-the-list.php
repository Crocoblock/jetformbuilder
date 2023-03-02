<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Operators;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Operator_In_The_List extends Base_Operator {

	const ID = 'one_of';

	public function get_id(): string {
		return self::ID;
	}

	public function get_title(): string {
		return __( 'In the list', 'jet-form-builder' );
	}

	public function is_supported(): bool {
		return false;
	}
}