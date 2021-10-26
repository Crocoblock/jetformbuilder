<?php
/**
 * input[type="hidden"] template
 */

$this->add_attribute( 'class', 'jet-form-builder__field text-field' );
$this->add_attribute( 'class', $args['class_name'] );
$this->add_attribute( 'placeholder', $args['placeholder'] );
$this->add_attribute( 'value', $args['default'] );
$this->add_attribute( 'required', $this->block_type->get_required_val( $args ) );
$this->add_attribute( 'min', $args['min'] );
$this->add_attribute( 'max', $args['max'] );
$this->add_attribute( 'step', $args['step'] );
$this->add_attribute( 'name', $this->block_type->get_field_name( $args['name'] ) );
$this->add_attribute( 'data-field-name', $args['name'] );
$this->add_attribute( 'id', $this->block_type->get_field_id( $args ) );
?>
<div class="jet-form-builder__field-wrap">
	<input type="number" <?php $this->render_attributes_string(); ?>>
</div>
