<?php

namespace JFB_Modules\Option_Field\Blocks\Checkbox;

use Jet_Form_Builder\Blocks\Render\Base;
use Jet_Form_Builder\Classes\Builder_Helper;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define text field renderer class
 */
class Block_Render extends Base {

    public bool $is_uniq_name = true;

	public function get_name() {
		return 'checkbox-field';
	}

	public function render_without_layout( $template = null, $args = array() ) {
		parent::render_without_layout( $template, $args );

		return $this->render_options();
	}

	public function render_options(): string {
		$required = $this->block_type->get_required_val();

		$this->add_attribute( 'class', 'jet-form-builder__field checkboxes-field checkradio-field' );
		$this->add_attribute( 'class', $this->args['class_name'] );
		$this->add_attribute( 'required', $required );

		$html = '<div class="jet-form-builder__fields-group checkradio-wrap" data-jfb-sync>';

		if ( ! empty( $this->args['field_options'] ) ) {
			foreach ( $this->args['field_options'] as $value => $option ) {
				$html .= $this->render_option( $value, $option );
			}
		}

		if ( ! empty( $this->args['custom_option']['allow'] ) ) {
			$html .= $this->render_custom_option();
		}

        $html .= '</div>';
		$this->reset_attributes();

		return $html;
	}

	public function render_option( $value, $option ): string {
		$default = $this->args['default'] ?? array();

		if ( is_array( $option ) ) {
			$val   = $option['value'] ?? $value;
			$label = $option['label'] ?? $val;
		} else {
			$val   = $value;
			$label = $option;
		}

		$html = '<div class="jet-form-builder__field-wrap checkboxes-wrap checkradio-wrap">';

		$item = sprintf(
			'<label class="jet-form-builder__field-label for-checkbox">
<input %1$s %2$s><span>%3$s</span></label>',
			Builder_Helper::attrs(
				array(
					array( 'type', 'checkbox' ),
					array( 'name', esc_attr( $this->block_type->get_field_name() . $this->get_name_suffix() ) ),
					array( 'value', esc_attr( $val ) ),
					array( 'data-field-name', esc_attr( $this->args['name'] ) ),
					array( 'checked', in_array( (string) $val, $default, true ) ? 'checked' : '' ),
					array(
						'data-calculate',
						( is_array( $option ) && isset( $option['calculate'] ) && '' !== $option['calculate'] )
							? esc_attr( $option['calculate'] )
							: '',
					),
				)
			),
			$this->get_attributes_string_save(),
			wp_kses_post( $label )
		);

		$html .= apply_filters(
			'jet-form-builder/render/checkbox-field/option',
			$item,
			$val,
			$option,
			$this
		);

		$html .= '</div>';

		return $html;
	}

	protected function render_custom_option(): string {
		$html       = '<div class="jet-form-builder__field-wrap checkboxes-wrap checkradio-wrap custom-option">';
		$class_name = $this->args['class_name'] ?? '';

		$name     = esc_attr( $this->block_type->get_field_name() . $this->get_name_suffix() );
		$checkbox = sprintf(
			'<input %1$s value="">',
			Builder_Helper::attrs(
				array(
					array( 'type', 'checkbox' ),
					array( 'checked', 'checked' ),
					array( 'data-field-name', esc_attr( $this->args['name'] ) ),
					array( 'data-custom', 1 ),
					array(
						'class',
						'jet-form-builder__field checkboxes-field checkradio-field' . (
						$class_name ? " {$class_name}" : ''
						),
					),
				)
			)
		);

		$input = sprintf(
			'<input %s>',
			Builder_Helper::attrs(
				array(
					array( 'type', 'text' ),
					array( 'name', $name ),
					array( 'data-field-name', esc_attr( $this->args['name'] ) ),
					array( 'class', 'jet-form-builder__field text-field' ),
				)
			)
		);

		/**
		 * @since 3.2.0
		 */
		$item_template = apply_filters(
			'jet-form-builder/render/checkbox-field/custom-option',
			sprintf(
				'<label class="jet-form-builder__field-label for-checkbox">%1$s<span>%2$s</span><label>',
				$checkbox,
				$input
			)
		);

		$custom_label = $this->args['custom_option']['label'] ?? '';
		$custom_label = $custom_label ?: __( '+ Add New', 'jet-form-builder' );

		$button = sprintf(
			'<button type="button" class="add-custom-option">%1$s<template>%2$s</template></button>',
			$custom_label,
			$html . $item_template . '</div>'
		);

		$html .= $button . '</div>';

		return $html;
	}

	public function get_name_suffix(): string {
		return count( $this->args['field_options'] ) > 1 ? '[]' : '';
	}

	/**
	 * @see \Jet_Form_Builder\Blocks\Render\Calculated_Field_Render::get_fields_label_tag
	 *
	 * @return string
	 */
	protected function get_fields_label_tag(): string {
		return 'div';
	}

}
