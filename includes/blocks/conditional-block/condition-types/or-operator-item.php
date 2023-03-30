<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Condition_Types;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Or_Operator_Item extends Base_Condition_Type {

	public function is_supported( array $condition ): bool {
		return ! empty( $condition['or_operator'] );
	}

	public function init( array $condition ) {
		$this->base = $condition;
	}

	public function to_array(): array {
		return $this->base;
	}

}
