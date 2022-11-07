<?php
/**
 * input[type="hidden"] template
 */

use Jet_Form_Builder\Classes\Regexp_Tools;
use Jet_Form_Builder\Classes\Date_Tools;

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

if ( Regexp_Tools::has_macro( $this->args['min'] ) ) {
	wp_enqueue_script( \Jet_Form_Builder\Blocks\Dynamic_Value::HANDLE );
	$this->add_attribute( 'data-min', $this->args['min'] );
} else {
	$this->add_attribute(
		'min',
		Date_Tools::time_to_string( $this->args['min'], Date_Tools::TIME )
	);
}

if ( Regexp_Tools::has_macro( $this->args['max'] ) ) {
	wp_enqueue_script( \Jet_Form_Builder\Blocks\Dynamic_Value::HANDLE );
	$this->add_attribute( 'data-max', $this->args['max'] );
} else {
	$this->add_attribute(
		'max',
		Date_Tools::time_to_string( $this->args['max'], Date_Tools::TIME )
	);
}
?>
<input <?php $this->render_attributes_string(); ?>>
