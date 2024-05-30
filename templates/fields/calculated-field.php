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
$id_attr       = $this->block_type->get_field_id();
$default_value = ! empty( $args['default'] ) ? $args['default'] : '';
$prefix        = ! empty( $args['calc_prefix'] ) ? $args['calc_prefix'] : false;
$suffix        = ! empty( $args['calc_suffix'] ) ? $args['calc_suffix'] : false;
$precision     = isset( $args['precision'] ) ? $args['precision'] : 0;
$is_hidden     = isset( $args['calc_hidden'] ) ? filter_var( $args['calc_hidden'], defined( 'FILTER_VALIDATE_BOOL' ) ? FILTER_VALIDATE_BOOL : FILTER_VALIDATE_BOOLEAN ) : false;

$this->add_attribute( 'class', $args['class_name'] );
$this->add_attribute( 'data-formula', $formula );
$this->add_attribute( 'data-name', $args['name'] );
$this->add_attribute( 'data-precision', $precision );
$this->add_attribute( 'data-sep-decimal', $args['separate_decimals'] );
$this->add_attribute( 'data-sep-thousands', $args['separate_thousands'] );
$this->add_attribute( 'data-value-type', $this->args['value_type'] );

$this->add_attribute( 'class', 'jet-form-builder__calculated-field' );
$this->add_attribute( 'class', $is_hidden ? 'jet-form-builder__calculated-field--hidden' : '' );

// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped, WordPress.WhiteSpace.PrecisionAlignment.Found
?>
<div <?php $this->render_attributes_string(); ?>>
	<?php do_action( 'jet-form-builder/before-field', $this ); ?>
	<?php if ( false !== $prefix ) : ?>
		<div class="jet-form-builder__calculated-field-prefix"><?php echo wp_kses_post( $prefix ); ?></div>
	<?php endif; ?>
	<input type="hidden"
			name="<?php echo esc_attr( $name ); ?>"
			id="<?php echo esc_attr( $id_attr ); ?>"
			value="<?php echo esc_attr( $default_value ); ?>"
			class="jet-form-builder__calculated-field-input jet-form-builder__field"
			data-field-name="<?php echo esc_attr( $args['name'] ); ?>"
			data-jfb-sync
	/>
	<div class="jet-form-builder__calculated-field-val"><?php echo wp_kses_post( $this->render_editor_placeholder() ); ?></div>
	<?php if ( false !== $suffix ) : ?>
		<div class="jet-form-builder__calculated-field-suffix"><?php echo wp_kses_post( $suffix ); ?></div>
	<?php endif; ?>
	<?php do_action( 'jet-form-builder/after-field', $this ); ?>
</div>
<?php
