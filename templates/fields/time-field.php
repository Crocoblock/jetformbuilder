<?php
/**
 * input[type="hidden"] template
 */

$this->set_value();
$this->add_attribute( 'class', 'jet-form-builder__field time-field' );
$this->add_attribute( 'class', $args['class_name'] );
$this->add_attribute( 'placeholder', $args['placeholder'] );
$this->add_attribute( 'required', $this->block_type->get_required_val( $args ) );
$this->add_attribute( 'name', $this->block_type->get_field_name( $args['name'] ) );
$this->add_attribute( 'id', $this->block_type->get_field_id( $args ) );
$this->add_attribute( 'type', 'time' );
$this->add_attribute( 'data-field-name', $args['name'] );
$this->add_attribute( 'data-jfb-sync' );

?>
<input <?php $this->render_attributes_string(); ?>>
