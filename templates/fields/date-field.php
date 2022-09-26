<?php
/**
 * input[type="hidden"] template
 * @var \Jet_Form_Builder\Blocks\Render\Date_Field_Render $this
 */

use Jet_Form_Builder\Classes\Date_Tools;

$this->add_attribute( 'class', 'jet-form-builder__field date-field' );
$this->add_attribute( 'class', $args['class_name'] );
$this->add_attribute( 'placeholder', $args['placeholder'] );
$this->add_attribute( 'value', $args['default'] );
$this->add_attribute( 'required', $this->block_type->get_required_val() );
$this->add_attribute( 'name', $this->block_type->get_field_name( $args['name'] ) );
$this->add_attribute( 'type', 'date' );
$this->add_attribute( 'data-field-name', $args['name'] );
$this->add_attribute( 'id', $this->block_type->get_field_id( $args ) );
$this->add_attribute( 'data-jfb-sync' );
$this->add_attribute( 'min', Date_Tools::time_to_string( $this->args['min'] ) );
$this->add_attribute( 'max', Date_Tools::time_to_string( $this->args['max'] ) );
?>
<input <?php $this->render_attributes_string(); ?>>
