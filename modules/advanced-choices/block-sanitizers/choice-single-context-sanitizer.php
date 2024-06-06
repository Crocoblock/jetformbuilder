<?php


namespace JFB_Modules\Advanced_Choices\Block_Sanitizers;

use Jet_Form_Builder\Blocks\Module;
use JFB_Modules\Advanced_Choices\Block_Types\Choices_Field;
use JFB_Modules\Block_Sanitizer\Interfaces\Block_Context_Sanitizer_Interface;
use JFB_Modules\Block_Sanitizer\Interfaces\For_Blocks_Sanitizer_Interface;
use JFB_Modules\Block_Sanitizer\Traits\For_Blocks_Sanitizer_Trait;
use JFB_Modules\Blocks_V2\Repeater_Field\Block_Type_Row;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Choice_Single_Context_Sanitizer implements Block_Context_Sanitizer_Interface, For_Blocks_Sanitizer_Interface {

	use For_Blocks_Sanitizer_Trait;

	public function for_blocks(): array {
		return array(
			'choice',
			'choice-control',
		);
	}

	public function apply_block_context( array $block_context, array $parsed_block, $parent_block = null ): array {

		/** @var Module $blocks */
		/** @noinspection PhpUnhandledExceptionInspection */
		$blocks = jet_form_builder()->module( 'blocks' );
		$block  = $blocks->get_field_by_name( $parsed_block );
		$root   = $blocks->get_field_by_name( 'choices-field' );
		$name   = $block_context[ Choices_Field::CONTEXT_NAME ] ?? '';

		if ( ! $block ||
			! $name ||
			! empty( $block_context[ Choices_Field::CONTEXT_DEFAULT ] ) ||
			! isset( $block_context[ Block_Type_Row::CONTEXT_DEFAULT ][ $name ] )
		) {
			return $block_context;
		}

		$multiple   = $block_context[ Choices_Field::CONTEXT_MULTIPLE ] ?? false;
		$preset_ref = &$block_context[ Choices_Field::CONTEXT_DEFAULT ];

		$preset_ref = $root->get_prepared_default( $block_context[ Block_Type_Row::CONTEXT_DEFAULT ][ $name ] );

		// if enabled "checkbox-mode" - just skip
		if ( $multiple ) {
			return $block_context;
		}

		// save only first value
		foreach ( $preset_ref as $item ) {
			$preset_ref = array( $item );
			break;
		}

		return $block_context;
	}

}
