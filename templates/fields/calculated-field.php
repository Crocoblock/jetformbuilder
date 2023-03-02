<?php
/**
 * Calculated field template
 *
 * @var Calculated_Field_Render $this
 * @var $args
 */

use Jet_Form_Builder\Blocks\Render\Calculated_Field_Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

$formula = $this->get_calculated_data( $args );

if ( empty( $formula ) ) {
	return;
}

$name          = $this->block_type->get_field_name( $args['name'] );
$default_value = ! empty( $args['default'] ) ? $args['default'] : '';
$prefix        = ! empty( $args['calc_prefix'] ) ? $args['calc_prefix'] : false;
$suffix        = ! empty( $args['calc_suffix'] ) ? $args['calc_suffix'] : false;
$precision     = isset( $args['precision'] ) ? $args['precision'] : 0;
$is_hidden     = isset( $args['calc_hidden'] ) ? filter_var( $args['calc_hidden'], FILTER_VALIDATE_BOOLEAN ) : false;

$this->add_attribute( 'class', $args['class_name'] );
$this->add_attribute( 'data-formula', $formula );
$this->add_attribute( 'data-name', $args['name'] );
$this->add_attribute( 'data-precision', $precision );
$this->add_attribute( 'data-sep-decimal', $args['separate_decimals'] );
$this->add_attribute( 'data-sep-thousands', $args['separate_thousands'] );
$this->add_attribute( 'data-value-type', $this->args['value_type'] );

$this->add_attribute(
	'class',
	empty( $this->block_type->get_current_repeater() )
	? 'jet-form-builder__calculated-field'
	: 'jet-form-builder__calculated-field--child'
);

$this->add_attribute( 'class', $is_hidden ? 'jet-form-builder__calculated-field--hidden' : '' );

// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped, WordPress.WhiteSpace.PrecisionAlignment.Found
?>
<div <?php $this->render_attributes_string(); ?>>
	<?php if ( false !== $prefix ) : ?>
		<div class="jet-form-builder__calculated-field-prefix"><?php echo wp_kses_post( $prefix ); ?></div>
	<?php endif; ?>
	<input type="hidden"
           name="<?php echo esc_attr( $name ); ?>"
           value="<?php echo esc_attr( $default_value ); ?>"
		   class="jet-form-builder__calculated-field-input jet-form-builder__field"
		   data-field-name="<?php echo esc_attr( $args['name'] ); ?>"
           data-jfb-sync
    />
	<div class="jet-form-builder__calculated-field-val"><?php echo wp_kses_post( $this->render_editor_placeholder() ); ?></div>
	<?php if ( false !== $suffix ) : ?>
		<div class="jet-form-builder__calculated-field-suffix"><?php echo wp_kses_post( $suffix ); ?></div>
	<?php endif; ?>
</div>
<?php // phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped, WordPress.WhiteSpace.PrecisionAlignment.Found
