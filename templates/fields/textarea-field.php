<?php
/**
 * Textarea template
 */

$this->add_attribute( 'class', 'jet-form-builder__field textarea-field' );
$this->add_attribute( 'class', $args['class_name'] );
$this->add_attribute( 'placeholder', $args['placeholder'] );
$this->add_attribute( 'required', $this->block_type->get_required_val( $args ) );
$this->add_attribute( 'name', $this->block_type->get_field_name( $args['name'] ) );
$this->add_attribute( 'data-field-name', $args['name'] );
$this->add_attribute( 'id', $this->block_type->get_field_id( $args ) );

if ( ! empty( $args['minlength'] ) ) {
	$this->add_attribute( 'minlength', $args['minlength'] );
}

if ( ! empty( $args['maxlength'] ) ) {
	$this->add_attribute( 'maxlength', $args['maxlength'] );
}

// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
?>
<div class="jet-form-builder__field-wrap">
	<textarea <?php $this->render_attributes_string(); ?>><?php echo $args['default']; ?></textarea>
</div>
<?php // phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped ?>
