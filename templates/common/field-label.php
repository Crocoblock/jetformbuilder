<?php
/**
 * Field label template
 */

if ( 'heading' === $args['type'] ) {
	$class = 'jet-form__heading';
} else {
	$class = 'jet-form__label';
}

if ( ! empty( $this->args['label_tag'] ) && 'label' === $this->args['label_tag'] ) {
	$tag = 'label';
	$for = 'for="' . $this->get_field_id( $args ) . '"';
} else {
	$tag = 'span';
	$for = '';
}

?>
<div class="<?php echo $class; ?>">
	<<?php echo $tag; ?> class="jet-form__label-text" <?php echo $for; ?>><?php
	echo $args['label'];

	if ( 'heading' !== $args['type'] && $this->get_required_val( $args ) && ! empty( $this->args['required_mark'] ) ) {
		printf( '<span class="jet-form__required">%s</span>', $this->args['required_mark'] );
	}

	?></<?php echo $tag; ?>>
	<?php
	if ( 'hidden' !== $args['type'] ) {
		include jet_engine()->get_template( 'forms/common/prev-page-button.php' );
	}
?></div>