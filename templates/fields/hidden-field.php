<?php
/**
 * input[type="hidden"] template
 */
$this->add_attribute( 'class', 'jet-form-builder__field hidden-field' );
$this->add_attribute( 'class', $args['class_name'] );

?>
<input <?php $this->render_attributes_string(); ?> type="hidden" name="<?php echo $this->block_type->get_field_name( $args['name'] ); ?>" value="<?php echo $args['field_value']; ?>" data-field-name="<?php echo $args['name']; ?>">