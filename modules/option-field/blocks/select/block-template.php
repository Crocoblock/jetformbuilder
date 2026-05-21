<?php
/**
 * input[type="hidden"] template
 *
 * @var Block_Render $this
 * @var array $args
 */

use JFB_Modules\Option_Field\Blocks\Select\Block_Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

$this->add_attribute( 'class', 'jet-form-builder__field select-field' );
$this->add_attribute( 'class', $args['class_name'] );
$this->add_attribute( 'required', $this->block_type->get_required_val() );
$this->add_attribute( 'name', $this->block_type->get_field_name() );
$this->add_attribute( 'data-field-name', $args['name'] );
$this->add_attribute( 'id', $this->block_type->get_field_id( $args ) );
$this->add_attribute( 'multiple', $this->block_type->is_multiple() ? 1 : '' );
$this->add_attribute(
	'size',
	$this->block_type->is_multiple()
		? $this->block_type->get_multiple_size()
		: ''
);
$this->add_attribute( 'data-jfb-sync' );

// Add auto-update data attributes if configured
if ( ! empty( $args['_jfb_data_attrs'] ) ) {
	foreach ( $args['_jfb_data_attrs'] as $attr_key => $attr_value ) {
		$this->add_attribute( $attr_key, $attr_value );
	}
}

$placeholder = $args['placeholder'] ?? false;
$default     = $args['default'] ?? false;
$has_dynamic_default = false;
$is_array_like_string = static function ( $value ) {
	if ( ! is_string( $value ) ) {
		return false;
	}

	$value = trim( $value );

	return '[' === substr( $value, 0, 1 ) && ']' === substr( $value, -1 );
};

if (
	is_string( $default ) && (
		jet_form_builder()->regexp->has_macro( $default ) ||
		$is_array_like_string( $default )
	)
) {
	$has_dynamic_default = true;
	wp_enqueue_script( \Jet_Form_Builder\Blocks\Dynamic_Value::HANDLE );
	$this->add_attribute( 'data-default-val', $default );
} elseif ( is_array( $default ) ) {
	$normalized_default = array_values( $default );
	$single_default     = $normalized_default[0] ?? '';

	if (
		1 === count( $normalized_default ) &&
		is_string( $single_default ) &&
		'[' === substr( trim( $single_default ), 0, 1 )
	) {
		$dynamic_default = $single_default;
	} else {
		$dynamic_default = wp_json_encode( $normalized_default );
	}

	if (
		is_string( $dynamic_default ) && (
			jet_form_builder()->regexp->has_macro( $dynamic_default ) ||
			$is_array_like_string( $dynamic_default )
		)
	) {
		$has_dynamic_default = true;
		wp_enqueue_script( \Jet_Form_Builder\Blocks\Dynamic_Value::HANDLE );
		$this->add_attribute( 'data-default-val', $dynamic_default );
	}
}
?>
<div class="jet-form-builder__field-wrap">
	<select <?php $this->render_attributes_string(); ?>>
		<?php

	if ( $placeholder ) {
		$additional_attrs = ( $args['is_disabled_placeholder'] ?? false ) ? 'disabled' : '';

		if (
			! $default ||
			(
				$has_dynamic_default &&
				! $this->block_type->is_multiple()
			)
		) {
			$additional_attrs .= ' selected';
		}
			// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
			printf( '<option value="" %1$s>%2$s</option>', $additional_attrs, $placeholder );
		}

		if ( ! empty( $args['field_options'] ) ) {

			foreach ( $args['field_options'] as $value => $option ) {

				$selected = '';
				$calc     = '';

				if ( is_array( $option ) ) {
					$val   = $option['value'];
					$label = $option['label'];
				} else {
					$val   = $value;
					$label = $option;
				}

				$this->set_checked_option( $option );

				if ( ! empty( $option['selected'] ) ) {
					$selected = 'selected="selected"';
				}

				if ( is_array( $option ) && isset( $option['calculate'] ) ) {
					$calc = ' data-calculate="' . esc_attr( $option['calculate'] ) . '"';
				}

				printf( '<option value="%1$s" %3$s%4$s>%2$s</option>', $val, $label, $selected, $calc );

			}
		}

		?>
	</select>
</div>
<?php // phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
