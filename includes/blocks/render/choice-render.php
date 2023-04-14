<?php


namespace Jet_Form_Builder\Blocks\Render;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Types\Choice;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @property Choice $block_type
 *
 * Class Choice_Render
 * @package Jet_Form_Builder\Blocks\Render
 */
class Choice_Render extends Base {

	public function get_name() {
		return 'choice';
	}

	public function render( $wp_block = null, $template = null ) {
		$attrs = get_block_wrapper_attributes(
			array(
				'class'        => 'jet-form-builder-choice--item',
				// accessibility
				'aria-pressed' => 'false',
				'role'         => 'button',
				'tabindex'     => '0',
			)
		);

		$attributes = array(
			array( 'type', $this->block_type->is_allowed_multiple() ? 'checkbox' : 'radio' ),
			array( 'name', $this->block_type->get_field_name() ),
			array( 'value', esc_attr( $this->block_type->get_field_value() ) ),
			array( 'data-calculate', esc_attr( $this->block_type->get_calculated_value() ) ),
			array( 'required', $this->block_type->get_required_val() ),
			array( 'class', 'jet-form-builder__field' ),
			array( 'style', 'display:none;' ),
		);

		$attributes_stack = array();

		foreach ( $attributes as list( $name, $value ) ) {
			if ( ! $value ) {
				continue;
			}
			$attributes_stack[] = sprintf( '%1$s="%2$s"', $name, $value );
		}

		$input = sprintf(
			'<input %s/>',
			implode( ' ', $attributes_stack )
		);

		$html = sprintf(
			'<li %1$s>%2$s</li>',
			$attrs,
			( $this->block_type->block_content . $input )
		);

		return parent::render( null, $html );
	}
}