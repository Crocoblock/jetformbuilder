<?php
/**
 * input[type="hidden"] template
 *
 * @var Radio_Field_Render $this
 */

use Jet_Form_Builder\Blocks\Render\Radio_Field_Render;
use Jet_Form_Builder\Classes\Tools;

$required    = $this->block_type->get_required_val();
$name        = $this->block_type->get_field_name( $args['name'] );
$default     = ! empty( $args['default'] ) ? $args['default'] : false;
$data_switch = '';
$this->add_attribute( 'class', 'jet-form-builder__field radio-field checkradio-field' );
$this->add_attribute( 'class', $args['class_name'] );

if ( ! empty( $args['field_options'] ) ) {

	echo '<div class="jet-form-builder__fields-group checkradio-wrap">';

	foreach ( $args['field_options'] as $value => $option ) {

		if ( is_array( $option ) ) {
			$val   = isset( $option['value'] ) ? $option['value'] : $value;
			$label = isset( $option['label'] ) ? $option['label'] : $val;
		} else {
			$val   = $value;
			$label = $option;
		}

		$custom_template = false;

		if ( ! empty( $args['custom_item_template'] ) ) {
			$custom_template = $this->get_custom_template( $val, $args );
		}

		//phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
		?>
		<div class="jet-form-builder__field-wrap radio-wrap checkradio-wrap">
			<?php 
			if ( $custom_template ) {
				echo $custom_template;
			}
			?>
			<label class="jet-form-builder__field-label for-radio">
				<input
						type="radio"
						name="<?php echo esc_attr( $name ); ?>"
					<?php $this->render_attributes_string_save(); ?>
						value="<?php echo esc_attr( $val ); ?>"
						data-field-name="<?php echo esc_attr( $args['name'] ); ?>"
					<?php
					if ( $default ) {
						checked( $default, $val );
					}
					if ( $required ) {
						echo ' required="' . esc_attr( $required ) . '"';
					}
					if ( is_array( $option ) && isset( $option['calculate'] ) && '' !== $option['calculate'] ) {
						echo ' data-calculate="' . esc_attr( $option['calculate'] ) . '"';
					}
					if ( ! empty( $args['switch_on_change'] ) ) {
						echo ' data-switch="1"';
					}
					?>
				>
				<span><?php echo wp_kses_post( $label ); ?></span>
			</label>
		</div>
		<?php
		//phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
	}
	$this->reset_attributes();

	echo '</div>';

}
