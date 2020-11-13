<?php
/**
 * Prev page button template
 */
$add_button = isset( $data ) && isset( $data->has_prev ) && ( $data->has_prev || 1 < $data->page );

if ( isset( $args['add_prev'] ) && $args['add_prev'] && $add_button ) {

	$prev_label = ! empty( $args['prev_label'] ) ? $args['prev_label'] : __( 'Back', 'jet-form-builder' );

	printf(
		'<button type="button" class="jet-form__prev-page" data-to-page="%2$d">%1$s</button>',
		$prev_label,
        $data->page - 1
	);

}
