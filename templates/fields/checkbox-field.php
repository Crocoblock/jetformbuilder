<?php
/**
 * input[type="hidden"] template
 *
 * @var array $args
 * @var \Jet_Form_Builder\Blocks\Render\Base $this
 */

$required = $this->block_type->get_required_val();
$name     = $this->block_type->get_field_name( $args['name'] );
$default  = ! empty( $args['default'] ) ? $args['default'] : false;
$this->add_attribute( 'class', 'jet-form-builder__field checkboxes-field checkradio-field' );
$this->add_attribute( 'class', $args['class_name'] );
$this->add_attribute( 'required', $required );

if ( ! empty( $args['field_options'] ) ) {

	if ( 1 < count( $args['field_options'] ) ) {
		$name_suffix = '[]';
	} else {
		$name_suffix = '';
	}

	if ( 1 < count( $args['field_options'] ) && ! empty( $required ) ) {
		$this->add_attribute( 'class', 'checkboxes-group-required' );
	}

	echo '<div class="jet-form-builder__fields-group checkradio-wrap">';

	foreach ( $args['field_options'] as $value => $option ) {

		$checked = '';
		$calc    = '';

		if ( is_array( $option ) ) {
			$val   = isset( $option['value'] ) ? $option['value'] : $value;
			$label = isset( $option['label'] ) ? $option['label'] : $val;
		} else {
			$val   = $value;
			$label = $option;
		}

		if ( $default ) {
			if ( is_array( $default ) ) {
				$checked = in_array( $val, $default, true ) ? 'checked' : '';
			} else {
				$checked = checked( $default, $val, false );
			}
		}

		if ( is_array( $option ) && isset( $option['calculate'] ) && '' !== $option['calculate'] ) {
			$calc = ' data-calculate="' . $option['calculate'] . '"';
		}

		$custom_template = false;

		if ( ! empty( $args['custom_item_template'] ) ) {
			$custom_template = $this->get_custom_template( $val, $args );
		}

		?>
		<div class="jet-form-builder__field-wrap checkboxes-wrap checkradio-wrap">
			<?php
			//phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
			if ( $custom_template ) {
				echo $custom_template;
			}
			?>
			<label class="jet-form-builder__field-label for-checkbox">
				<input
						type="checkbox"
						name="<?php echo $name . $name_suffix; ?>"
					<?php $this->render_attributes_string_save(); ?>
						value="<?php echo esc_attr( $val ); ?>"
						data-field-name="<?php echo esc_attr( $args['name'] ); ?>"
					<?php echo $checked; ?>
					<?php echo $calc; ?>
				>
				<span><?php echo $label; ?></span>
			</label>
		</div>
		<?php
		//phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
	}
	$this->reset_attributes();

	if ( $custom_template ) {
		wp_reset_postdata();
	}

	echo '</div>';

}
