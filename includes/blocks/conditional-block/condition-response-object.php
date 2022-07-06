<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block;


interface Condition_Response_Object {

	public function to_response( array $base, Condition_Item $item ): array;

}