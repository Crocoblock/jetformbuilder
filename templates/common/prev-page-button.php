<?php

use Jet_Form_Builder\Classes\Tools;

/**
 * Prev page button template
 */
$add_button = ( $this->live_form->has_prev || 1 < $this->live_form->page );
$prev_label = ! empty( $args['prev_label'] ) ? $args['prev_label'] : __( 'Back', 'jet-form-builder' );

if ( isset( $args['add_prev'] ) && $args['add_prev'] && $add_button ) {
	printf(
		'<button type="button" class="jet-form-builder__prev-page" data-to-page="%2$d">%1$s</button>',
		wp_kses_post( $prev_label ),
		absint( $this->live_form->page - 1 )
	);
} elseif ( Tools::is_editor() && 'form-break-field' === $args['type'] ) {
	printf(
		'<button type="button" class="jet-form-builder__prev-page">%1$s</button>',
		wp_kses_post( $prev_label )
	);
}
