<?php
/**
 * Textarea template
 *
 * @var \Jet_Form_Builder\Blocks\Render\Base $this
 */

use Jet_Form_Builder\Blocks\Dynamic_Value;
use Jet_Form_Builder\Classes\Regexp_Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

$this->add_attribute( 'class', 'jet-form-builder__field textarea-field' );
$this->add_attribute( 'class', $args['class_name'] );
$this->add_attribute( 'placeholder', $args['placeholder'] );
$this->add_attribute( 'required', $this->block_type->get_required_val( $args ) );
$this->add_attribute( 'name', $this->block_type->get_field_name( $args['name'] ) );
$this->add_attribute( 'data-field-name', $args['name'] );
$this->add_attribute( 'id', $this->block_type->get_field_id( $args ) );
$this->add_attribute( 'data-jfb-sync' );

if ( jet_form_builder()->regexp->has_macro( $this->args['default'] ) ) {
	wp_enqueue_script( Dynamic_Value::HANDLE );

	$this->add_attribute( 'data-value', $this->args['default'] );
}

if ( ! empty( $args['minlength'] ) ) {
	$this->add_attribute( 'minlength', $args['minlength'] );
}

if ( ! empty( $args['maxlength'] ) ) {
	$this->add_attribute( 'maxlength', $args['maxlength'] );
}

// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
?>
<div class="jet-form-builder__field-wrap">
	<textarea <?php $this->render_attributes_string(); ?>><?php echo $this->has_attribute( 'data-value' ) ? '' : esc_textarea( $args['default'] ); ?></textarea>
</div>
<?php // phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
