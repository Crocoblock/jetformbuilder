<?php
/**
 * input[type="hidden"] template
 */

$this->add_attribute( 'placeholder', $args['placeholder'] );
$this->add_attribute( 'value', $args['default'] );
$this->add_attribute( 'required', $this->get_required_val( $args ) );
$this->add_attribute( 'name', $this->get_field_name( $args['name'] ) );
$this->add_attribute( 'id', $this->get_field_id( $args ) );
$this->add_attribute( 'type', 'time' );
$this->add_attribute( 'data-field-name', $args['name'] );

?>
<input class="jet-form__field time-field"<?php $this->render_attributes_string(); ?>>