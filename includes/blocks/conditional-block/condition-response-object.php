<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block;

use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Types\Base_Condition_Type;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Condition_Response_Object {

	public function to_response( array $base, Base_Condition_Type $item ): array;

}
