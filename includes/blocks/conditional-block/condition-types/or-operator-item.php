<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Condition_Types;


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