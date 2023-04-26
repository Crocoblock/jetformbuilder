<?php


namespace Jet_Form_Builder\Blocks\Sanitizers;

use Jet_Form_Builder\Classes\Repository\Repository_Item_Instance_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Choices_Default_Value_Sanitizer extends Base_Block_Sanitizer implements
	Repository_Item_Instance_Trait {

	public function get_id(): string {
		return 'choices_default_value';
	}

	public function for_blocks(): array {
		return array(
			'choices-field',
		);
	}

	public function apply_data( array $parsed_block ): array {
		$block = jet_form_builder()->blocks->get_field_by_name( $parsed_block );

		if ( ! $block || empty( $parsed_block['attrs']['default'] ) ) {
			$parsed_block['attrs']['default'] = array();

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

	public function rep_item_id() {
		return $this->get_id();
	}
}
