<?php
/**
 * input[type="range"] template
 */

$this->add_attribute( 'value', $args['default'] );
$this->add_attribute( 'min', $args['min'] );
$this->add_attribute( 'max', $args['max'] );
$this->add_attribute( 'step', $args['step'] );
$this->add_attribute( 'name', $this->get_field_name( $args['name'] ) );
$this->add_attribute( 'data-field-name', $args['name'] );
$this->add_attribute( 'id', $this->get_field_id( $args ) );

?>
<div class="jet-form__field-wrap range-wrap">
	<input type="range" class="jet-form__field range-field"<?php $this->render_attributes_string(); ?>>

	<div class="jet-form__field-value range-value">
		<?php if ( ! empty( $args['prefix'] ) ): ?>
			<span class="jet-form__field-value-prefix"><?php echo $args['prefix']; ?></span>
		<?php endif; ?>
		<span class="jet-form__field-value-number"></span>
		<?php if ( ! empty( $args['suffix'] ) ): ?>
			<span class="jet-form__field-value-suffix"><?php echo $args['suffix']; ?></span>
		<?php endif; ?>
	</div>
</div>