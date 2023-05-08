<?php


namespace Jet_Form_Builder\Modules\Advanced_Choices\Block_Types;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Trait Base_Choice_Item_Trait
 *
 * @package Jet_Form_Builder\Modules\Advanced_Choices\Block_Types
 */
trait Base_Choice_Item_Trait {

	public function is_allowed_multiple(): bool {
		return $this->block_context['jet-forms/choices-field--multiple'] ?? false;
	}

	public function is_checked_current(): bool {
		$context = $this->block_context['jet-forms/choices-field--default'] ?? array();

		if ( ! is_array( $context ) ) {
			return false;
		}

		return in_array( $this->get_field_value(), $context, true );
	}

	public function get_required_val(): bool {
		return $this->block_context['jet-forms/choices-field--required'] ?? false;
	}

	public function get_field_name( $name = '' ) {
		$suffix = $this->is_allowed_multiple() ? '[]' : '';

		if ( $name ) {
			return parent::get_field_name( $name ) . $suffix;
		}

		return parent::get_field_name( $this->get_raw_field_name() ) . $suffix;
	}

	public function get_raw_field_name(): string {
		return $this->block_context['jet-forms/choices-field--name'] ?? '';
	}

}
