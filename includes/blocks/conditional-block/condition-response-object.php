<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block;


use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Types\Base_Condition_Type;

interface Condition_Response_Object {

	public function to_response( array $base, Base_Condition_Type $item ): array;

}