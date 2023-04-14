<?php


namespace Jet_Form_Builder\Blocks\Types;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Exceptions\Render_Empty_Field;
use Jet_Form_Builder\Blocks\Render\Choice_Render;
use Jet_Form_Builder\Blocks\Render\Choices_Field_Render;
use function cli\render;

if ( ! defined( 'WPINC' ) ) {
	die;
}


class Choice extends Base {

	public function get_name() {
		return 'choice';
	}

	public function render_row_layout() {
		return false;
	}

	/**
	 * @param null|array $wp_block
	 *
	 * @throws Render_Empty_Field
	 */
	public function get_block_renderer( $wp_block = null ) {
		if ( empty( $wp_block['innerBlocks'] ) ) {
			throw new Render_Empty_Field();
		}

		return ( new Choice_Render( $this ) )->render( $wp_block );
	}

	public function is_allowed_multiple(): bool {
		return $this->block_context['jet-forms/choices-field--multiple'] ?? false;
	}

	public function get_required_val(): bool {
		return $this->block_context['jet-forms/choices-field--required'] ?? false;
	}

	public function get_field_name( $name = '' ) {
		if ( $name ) {
			return parent::get_field_name( $name );
		}

		return parent::get_field_name(
			$this->block_context['jet-forms/choices-field--name'] ?? ''
		);
	}

	public function get_field_value( $attributes = array() ) {
		return $this->block_attrs['value'] ?? '';
	}

	public function get_calculated_value() {
		return $this->block_attrs['calc_value'] ?? '';
	}
}
