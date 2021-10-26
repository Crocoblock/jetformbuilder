<?php
/**
 * input[type="hidden"] template
 *
 * @var Base $this
 * @var array $args
 */

use Jet_Form_Builder\Blocks\Render\Base;

$this->add_attribute( 'class', 'jet-form-builder__field select-field' );
$this->add_attribute( 'class', $args['class_name'] );
$this->add_attribute( 'required', $this->block_type->get_required_val( $args ) );
$this->add_attribute( 'name', $this->block_type->get_field_name( $args['name'] ) );
$this->add_attribute( 'data-field-name', $args['name'] );
$this->add_attribute( 'id', $this->block_type->get_field_id( $args ) );

if ( ! empty( $args['switch_on_change'] ) ) {
	$this->add_attribute( 'data-switch', 1 );
}

$placeholder = isset( $args['placeholder'] ) ? $args['placeholder'] : false;
$default     = isset( $args['default'] ) ? $args['default'] : false;

$this->add_attribute( 'data-default-val', $default );
?>
<div class="jet-form-builder__field-wrap">
	<select <?php $this->render_attributes_string(); ?>>
		<?php

		if ( $placeholder ) {
			$selected_placeholder = '';

			if ( ! $default ) {
				$selected_placeholder = 'selected';
			}
            // phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
			printf( '<option value="" %1$s>%2$s</option>', $selected_placeholder, $placeholder );
		}

		if ( ! empty( $args['field_options'] ) ) {

			foreach ( $args['field_options'] as $value => $option ) {

				$selected = '';
				$calc     = '';


				if ( is_array( $option ) ) {
					$val   = isset( $option['value'] ) ? $option['value'] : $value;
					$label = isset( $option['label'] ) ? $option['label'] : $val;
				} else {
					$val   = $value;
					$label = $option;
				}

				if ( $default ) {
					$selected = selected( $default, $val, false );
				}

				if ( is_array( $option ) && isset( $option['calculate'] ) ) {
					$calc = ' data-calculate="' . $option['calculate'] . '"';
				}

				printf( '<option value="%1$s" %3$s%4$s>%2$s</option>', $val, $label, $selected, $calc );

			}
		}

		?>
	</select>
	<?php echo $this->maybe_render_error( $args ); ?>
</div>
<?php // phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped ?>
