<?php
/**
 * Field Template
 * input[type="hidden"] template
 */

use Jet_Form_Builder\Blocks\Dynamic_Value;
use Jet_Form_Builder\Classes\Regexp_Tools;

$this->add_attribute( 'class', 'jet-form-builder__field hidden-field' );
$this->add_attribute( 'class', $args['class_name'] );
$this->add_attribute( 'name', $this->block_type->get_field_name( $args['name'] ) );
$this->add_attribute( 'data-field-name', $args['name'] );
$this->add_attribute( 'data-jfb-sync' );

if ( ! Regexp_Tools::has_macro( $this->args['field_value'] ) ) {
	$this->add_attribute( 'value', $this->args['field_value'] );
} else {
	wp_enqueue_script( Dynamic_Value::HANDLE );

	$this->add_attribute( 'data-value', $this->args['field_value'] );
}

// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
?>
<input type="hidden" <?php $this->render_attributes_string(); ?>>
<?php // phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped ?>
