<?php
/**
 * Prev page button template
 */

if ( ! empty( $args['add_prev'] ) && ( $this->has_prev || 1 < $this->page ) ) {

	$prev_label = ! empty( $args['prev_label'] ) ? $args['prev_label'] : __( 'Back', 'jet-engine' );

	printf(
		'<button type="button" class="jet-form__prev-page" data-to-page="%2$d">%1$s</button>',
		$prev_label,
		$this->page - 1
	);

}
