<?php
/**
 * Calculated field template
 */
$calc_data = $this->get_calculated_data( $args );

if ( empty( $calc_data['formula'] ) ){
	return;
}

$name          = $this->block_type->get_field_name( $args['name'] );
$default_value = ! empty( $args['default'] ) ? $args['default'] : '';
$prefix        = ! empty( $args['calc_prefix'] ) ? $args['calc_prefix'] : false;
$suffix        = ! empty( $args['calc_suffix'] ) ? $args['calc_suffix'] : false;
$precision     = isset( $args['precision'] ) ? $args['precision'] : 0;

$this->add_attribute( 'data-formula', $calc_data['formula'] );
$this->add_attribute( 'data-name', $args['name'] );
$this->add_attribute( 'data-listen_to', htmlspecialchars( json_encode( $calc_data['listen_fields'] ) ) );
$this->add_attribute( 'data-precision', $precision );

if ( ! empty( $this->live_form->current_repeater ) ) {
	$class_name = 'jet-form__calculated-field--child';
} else {
	$class_name = 'jet-form__calculated-field';
}

?>
<div class="<?php echo $class_name; ?>"<?php $this->render_attributes_string(); ?>>
	<?php if ( false !== $prefix ) { ?><div class="jet-form__calculated-field-prefix">
	<?php echo $prefix; ?>
	</div><?php } ?>
	<input type="hidden" name="<?php echo $name; ?>" value="<?php echo $default_value; ?>" class="jet-form__calculated-field-input jet-form__field" data-field-name="<?php echo $args['name']; ?>">
	<div class="jet-form__calculated-field-val"></div>
	<?php if ( false !== $suffix ) { ?><div class="jet-form__calculated-field-suffix">
	<?php echo $suffix; ?>
	</div><?php } ?>
</div>