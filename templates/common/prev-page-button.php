<?php

use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Prev page button template
 *
 * @var \Jet_Form_Builder\Blocks\Render\Base $this
 */
$break = $this->block_type->get_current_form_break();
$prev_label = ! empty( $args['prev_label'] ) ? $args['prev_label'] : __( 'Back', 'jet-form-builder' );

if ( isset( $args['add_prev'] ) && $args['add_prev'] && 1 < $break->get_current() ) {
	printf(
		'<button type="button" class="jet-form-builder__prev-page" data-to-page="%2$d">%1$s</button>',
		wp_kses_post( $prev_label ),
		absint( $break->get_current() - 1 )
	);
} elseif ( Tools::is_editor() && 'form-break-field' === $args['type'] ) {
	$prev_label = ! empty( $args['prev_label'] ) ? $args['prev_label'] : __( 'Back', 'jet-form-builder' );

	printf(
		'<button type="button" class="jet-form-builder__prev-page">%1$s</button>',
		wp_kses_post( $prev_label )
	);
}
