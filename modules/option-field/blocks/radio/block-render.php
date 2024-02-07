<?php

namespace JFB_Modules\Option_Field\Blocks\Radio;

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

	public function get_name() {
		return 'radio-field';
	}

	public function render_without_layout( $template = null, $args = array() ) {
		parent::render_without_layout( $template, $args );

		return $this->render_options();
	}

	public function render_options(): string {
		$required = $this->block_type->get_required_val();

		$this->add_attribute( 'class', 'jet-form-builder__field radio-field checkradio-field' );
		$this->add_attribute( 'class', $this->args['class_name'] );
		$this->add_attribute( 'required', $required );

		$html = '<div class="jet-form-builder__fields-group checkradio-wrap" data-jfb-sync>';

		if ( ! empty( $this->args['field_options'] ) ) {
			foreach ( $this->args['field_options'] as $value => $option ) {
				$html .= $this->render_option( $value, $option );
			}
		}

		if ( ! empty( $this->args['custom_option'] ) ) {
			$html .= $this->render_custom_option();
		}

		$html .= '</div>';
		$this->reset_attributes();

		return $html;
	}

	public function render_option( $value, $option ): string {
		$default = (string) ( $this->args['default'] ?? false );

		if ( is_array( $option ) ) {
			$val   = $option['value'] ?? $value;
			$label = $option['label'] ?? $val;
		} else {
			$val   = $value;
			$label = $option;
		}

		$html = '<div class="jet-form-builder__field-wrap radio-wrap checkradio-wrap">';

		$item = sprintf(
			'<label class="jet-form-builder__field-label for-radio">
<input %1$s %2$s><span>%3$s</span></label>',
			Builder_Helper::attrs(
				array(
					array( 'type', 'radio' ),
					array( 'name', esc_attr( $this->block_type->get_field_name() ) ),
					array( 'value', esc_attr( $val ) ),
					array( 'data-field-name', esc_attr( $this->args['name'] ) ),
					array( 'checked', ( (string) $val ) === $default ? 'checked' : '' ),
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

		/**
		 * @since 3.1.0
		 */
		$html .= apply_filters(
			'jet-form-builder/render/radio-field/option',
			$item,
			$val,
			$option,
			$this
		);

		$html .= '</div>';

		return $html;
	}

	protected function render_custom_option(): string {
		$html       = '<div class="jet-form-builder__field-wrap radio-wrap checkradio-wrap custom-option">';
		$class_name = $this->args['class_name'] ?? '';

		$item = sprintf(
			'<label class="jet-form-builder__field-label for-radio">
<input %1$s value=""><span>%2$s</span></label>',
			Builder_Helper::attrs(
				array(
					array( 'type', 'radio' ),
					array( 'name', esc_attr( $this->block_type->get_field_name() ) ),
					array( 'data-field-name', esc_attr( $this->args['name'] ) ),
					array( 'data-custom', 1 ),
					array(
						'class',
						'jet-form-builder__field radio-field checkradio-field' . ( $class_name ? " {$class_name}" : '' ),
					),
				)
			),
			sprintf(
				'<input %s>',
				Builder_Helper::attrs(
					array(
						array( 'type', 'text' ),
						array( 'name', esc_attr( $this->block_type->get_field_name() ) ),
						array( 'data-field-name', esc_attr( $this->args['name'] ) ),
						array( 'class', 'jet-form-builder__field text-field' ),
						array( 'disabled', 'disabled' ),
						array( 'required', $this->block_type->get_required_val() ),
					)
				)
			)
		);

		/**
		 * @since 3.2.0
		 */
		$html .= apply_filters(
			'jet-form-builder/render/radio-field/custom-option',
			$item,
			$this
		);

		$html .= '</div>';

		return $html;
	}

	/**
	 * @return string
	 * @see \Jet_Form_Builder\Blocks\Render\Calculated_Field_Render::get_fields_label_tag
	 */
	protected function get_fields_label_tag(): string {
		return 'div';
	}

}
