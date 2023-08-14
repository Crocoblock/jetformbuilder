<?php


namespace JFB_Modules\Block_Sanitizer\Sanitizers;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Block_Helper;
use JFB_Modules\Block_Sanitizer\Interfaces\Block_Context_Sanitizer_Interface;
use JFB_Modules\Block_Sanitizer\Interfaces\Block_Data_Sanitizer_Interface;
use JFB_Modules\Block_Sanitizer\Interfaces\Is_Supported_Sanitizer_Interface;
use JFB_Modules\Block_Sanitizer\Module;

if ( ! defined( 'WPINC' ) ) {
	die;
}

class Core_Block_Container_Sanitizer implements
	Block_Data_Sanitizer_Interface,
	Is_Supported_Sanitizer_Interface {

	public function is_supported( array $parsed_block ): bool {
		return ! empty( $parsed_block['innerBlocks'] );
	}

	public function apply_block_data( array $parsed_block, array $source_block, $parent_block = null ): array {
		$inner = &$parsed_block['innerBlocks'];

		/** @noinspection PhpUnhandledExceptionInspection */
		/** @var Module $module */
		$module = jet_form_builder()->module( Module::class );

		foreach ( $inner as &$inner_block ) {
			$inner_block = $module->apply_blocks_data( $inner_block, $inner_block, $parsed_block );
		}

		return $parsed_block;
	}

}
