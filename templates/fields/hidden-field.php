<?php
/**
 * input[type="hidden"] template
 */
?>
<input class="jet-form-builder__field hidden-field" type="hidden" name="<?php echo $this->block_type->get_field_name( $args['name'] ); ?>" value="<?php echo $args['field_value']; ?>" data-field-name="<?php echo $args['name']; ?>">