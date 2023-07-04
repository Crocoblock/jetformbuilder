<?php

namespace Jet_Form_Builder\Blocks\Render;

// If this file is called directly, abort.
use Jet_Form_Builder\Classes\Builder_Helper;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define text field renderer class
 */
class Checkbox_Field_Render extends Base_Select_Radio_Check {

	public function __construct( $block_type ) {
		parent::__construct( $block_type );

		$this->set_options();
	}

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
			$value,
			$option,
			$this
		);

		$html .= '</div>';

		return $html;
	}

	public function get_name_suffix(): string {
		return count( $this->args['field_options'] ) > 1 ? '[]' : '';
	}

}
