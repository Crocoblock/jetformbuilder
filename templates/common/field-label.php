<?php
/**
 * Field label template
 */

if ( isset( $args['type'] ) && 'heading-field' === $args['type'] ) {
	$class = 'jet-form-builder__heading';
} else {
	$class = 'jet-form-builder__label';
}

if ( ! empty( $args['label_tag'] ) && 'label' === $args['label_tag'] ) {
	$tag = 'label';
	$for = 'for="' . $this->block_type->get_field_id( $args ) . '"';
} else {
	$tag = 'div';
	$for = '';
}

?>
<div class="<?php echo $class; ?>">
	<<?php echo $tag; ?> class="jet-form-builder__label-text" <?php echo $for; ?>><?php
	echo $args['label'];

	if ( $this->block_type->get_required_val( $args ) && ! empty( $this->live_form->spec_data->required_mark ) ) {
		printf( ' <span class="jet-form-builder__required">%s</span>', $this->live_form->spec_data->required_mark );
	}

	?></<?php echo $tag; ?>>
	<?php include $this->get_global_template( 'common/prev-page-button.php' ); ?>
</div>