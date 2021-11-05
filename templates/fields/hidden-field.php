<?php
/**
 * input[type="hidden"] template
 */
$this->add_attribute( 'class', 'jet-form-builder__field hidden-field' );
$this->add_attribute( 'class', $args['class_name'] );
$this->add_attribute( 'name', $this->block_type->get_field_name( $args['name'] ) );
$this->add_attribute( 'value', $args['field_value'] );
$this->add_attribute( 'data-field-name', $args['name'] );

// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
?>
<input type="hidden" <?php $this->render_attributes_string(); ?>>
<?php // phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped ?>