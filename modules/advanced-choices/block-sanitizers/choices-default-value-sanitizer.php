<?php


namespace JFB_Modules\Advanced_Choices\Block_Sanitizers;

use Jet_Form_Builder\Blocks\Module;
use JFB_Modules\Block_Sanitizer\Base_Block_Sanitizer;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Choices_Default_Value_Sanitizer extends Base_Block_Sanitizer {

	public function for_blocks(): array {
		return array(
			'choices-field',
		);
	}

	public function apply_data( array $parsed_block ): array {

		/** @var Module $blocks */
		/** @noinspection PhpUnhandledExceptionInspection */
		$blocks = jet_form_builder()->module( 'blocks' );

		$block = $blocks->get_field_by_name( $parsed_block );

		if ( ! $block ) {
			return $parsed_block;
		}

		$parsed_block['attrs']['default'] = $block->get_prepared_default(
			$block->get_default_from_preset( $parsed_block['attrs'] )
		);

		// if enabled "checkbox-mode" - just skip
		if ( ! empty( $parsed_block['attrs']['allow_multiple'] ) ) {
			return $parsed_block;
		}

		// save only first value
		foreach ( $parsed_block['attrs']['default'] as $value ) {
			$parsed_block['attrs']['default'] = array( $value );
			break;
		}

		return $parsed_block;
	}

}
