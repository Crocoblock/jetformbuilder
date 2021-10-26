<?php
/**
 * Field label template
 */

if ( isset( $args['type'] ) && 'heading-field' === $args['type'] ) {
	$this->add_attribute( 'class', 'jet-form-builder__heading' );
	$this->add_attribute( 'class', $args['class_name'] );
} else {
	$this->add_attribute( 'class', 'jet-form-builder__label' );
}

?>
<div <?php $this->render_attributes_string(); ?>>
	<div class="jet-form-builder__label-text">
		<?php
        // phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
		echo $args['label'];

		if ( $this->block_type->get_required_val( $args ) && ! empty( $this->live_form->spec_data->required_mark ) ) {
			printf( ' <span class="jet-form-builder__required">%s</span>', $this->live_form->spec_data->required_mark );
		}
		// phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
		?>
	</div>
	<?php require $this->get_global_template( 'common/prev-page-button.php' ); ?>
</div>
