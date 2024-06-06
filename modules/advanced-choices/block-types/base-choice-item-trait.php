<?php


namespace JFB_Modules\Advanced_Choices\Block_Types;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Trait Base_Choice_Item_Trait
 *
 * @package JFB_Modules\Advanced_Choices\Block_Types
 */
trait Base_Choice_Item_Trait {

	public function is_allowed_multiple(): bool {
		return $this->block_context[ Choices_Field::CONTEXT_MULTIPLE ] ?? false;
	}

	public function is_checked_current(): bool {
		$context = $this->block_context[ Choices_Field::CONTEXT_DEFAULT ] ?? array();

		if ( ! is_array( $context ) ) {
			return false;
		}

		return in_array( $this->get_field_value(), $context, true );
	}

	public function get_required_val(): bool {
		return $this->block_context[ Choices_Field::CONTEXT_REQUIRED ] ?? false;
	}

	// phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.Found
	public function get_field_name( $name = '' ) {
		return $this->block_context[ Choices_Field::CONTEXT_NAME ] ?? '';
	}

	public function get_field_id( $name = '', $for_element = 'input' ) {
		return parent::get_field_id( $this->block_context[ Choices_Field::CONTEXT_RAW_NAME ], $for_element );
	}

}
