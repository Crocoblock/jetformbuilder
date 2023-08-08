<?php


namespace JFB_Modules\Block_Sanitizer\Sanitizers;

use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Blocks\Module;
use Jet_Form_Builder\Blocks\Types\Repeater_Row;
use JFB_Modules\Block_Sanitizer\Interfaces\Block_Data_Sanitizer_Interface;
use JFB_Modules\Block_Sanitizer\Interfaces\For_Blocks_Sanitizer_Interface;
use JFB_Modules\Block_Sanitizer\Traits\For_Blocks_Sanitizer_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Repeater_Sanitizer implements Block_Data_Sanitizer_Interface, For_Blocks_Sanitizer_Interface {

	use For_Blocks_Sanitizer_Trait;

	public function for_blocks(): array {
		return array(
			'repeater-field',
		);
	}

	public function apply_block_data( array $parsed_block, array $source_block, $parent_block = null ): array {
		/** @var Module $blocks */
		/** @noinspection PhpUnhandledExceptionInspection */
		$blocks = jet_form_builder()->module( 'blocks' );

		$block = $blocks->get_field_by_name( $parsed_block );

		if ( ! $block || empty( $parsed_block['innerBlocks'] ) ) {
			return $parsed_block;
		}


		return $parsed_block;
	}

}
