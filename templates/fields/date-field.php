<?php
/**
 * input[type="hidden"] template
 *
 * @var \Jet_Form_Builder\Blocks\Render\Date_Field_Render $this
 */

use Jet_Form_Builder\Classes\Date_Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

$this->set_value();
$this->add_attribute( 'class', 'jet-form-builder__field date-field' );
$this->add_attribute( 'class', $args['class_name'] );
$this->add_attribute( 'placeholder', $args['placeholder'] );
$this->add_attribute( 'required', $this->block_type->get_required_val() );
$this->add_attribute( 'name', $this->block_type->get_field_name( $args['name'] ) );
$this->add_attribute( 'type', 'date' );
$this->add_attribute( 'data-field-name', $args['name'] );
$this->add_attribute( 'id', $this->block_type->get_field_id( $args ) );
$this->add_attribute( 'data-jfb-sync' );

if ( jet_form_builder()->regexp->has_macro( $this->args['min'] ) ) {
	wp_enqueue_script( \Jet_Form_Builder\Blocks\Dynamic_Value::HANDLE );
	$this->add_attribute( 'data-min', $this->args['min'] );
} else {
	$this->add_attribute( 'min', Date_Tools::time_to_string( $this->args['min'] ) );
}

if ( jet_form_builder()->regexp->has_macro( $this->args['max'] ) ) {
	wp_enqueue_script( \Jet_Form_Builder\Blocks\Dynamic_Value::HANDLE );
	$this->add_attribute( 'data-max', $this->args['max'] );
} else {
	$this->add_attribute( 'max', Date_Tools::time_to_string( $this->args['max'] ) );
}
?>
<?php do_action( 'jet-form-builder/before-field', $this ); ?>
<input <?php $this->render_attributes_string(); ?>>
<?php do_action( 'jet-form-builder/after-field', $this ); ?>
<?php
