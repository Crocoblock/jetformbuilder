<?php
/**
 * input[type="hidden"] template
 */
?>
<input class="jet-form__field hidden-field" type="hidden" name="<?php echo $this->get_field_name( $args['name'] ); ?>" value="<?php echo $args['default']; ?>" data-field-name="<?php echo $args['name']; ?>">