<?php
/**
 * input[type="hidden"] template
 *
 * @var Select_Field_Render $this
 * @var array $args
 */

use Jet_Form_Builder\Blocks\Render\Select_Field_Render;
use Jet_Form_Builder\Classes\Tools;

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

$placeholder = $args['placeholder'] ?? false;
$default     = $args['default'] ?? false;

$this->add_attribute( 'data-default-val', $default );
?>
<div class="jet-form-builder__field-wrap">
    <select <?php $this->render_attributes_string(); ?>>
		<?php

		if ( $placeholder ) {
			$additional_attrs = ( $args['is_disabled_placeholder'] ?? false ) ? 'disabled' : '';

			if ( ! $default ) {
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
					$val   = $option['value'] ?? $value;
					$label = $option['label'] ?? $val;
				} else {
					$val   = $value;
					$label = $option;
				}

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
	<?php echo Tools::esc_template_string( $this->maybe_render_error( $args ) ); ?>
</div>
<?php // phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped ?>
