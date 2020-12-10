<?php
use Jet_Form_Builder\Classes\Tools;
/**
 * Prev page button template
 */
$add_button = ( $this->live_form->has_prev || 1 < $this->live_form->page );

if ( isset( $args['add_prev'] ) && $args['add_prev'] && $add_button ) {

	$prev_label = ! empty( $args['prev_label'] ) ? $args['prev_label'] : __( 'Back', 'jet-form-builder' );

	printf(
		'<button type="button" class="jet-form-builder__prev-page" data-to-page="%2$d">%1$s</button>',
		$prev_label,
        $this->live_form->page - 1
	);
} elseif( Tools::is_editor() && $args['type'] === 'form-break-field' ) {
	$prev_label = ! empty( $args['prev_label'] ) ? $args['prev_label'] : __( 'Back', 'jet-form-builder' );

	printf(
		'<button type="button" class="jet-form-builder__prev-page">%1$s</button>',
		$prev_label
	);
}
