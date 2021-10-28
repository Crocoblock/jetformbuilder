<?php
use Jet_Form_Builder\Classes\Tools;
/**
 * Prev page button template
 * @var \Jet_Form_Builder\Blocks\Render\Base $this
 */
$break = $this->block_type->get_current_form_break();

if ( isset( $args['add_prev'] ) && $args['add_prev'] && 1 < $break->get_current() ) {

	$prev_label = ! empty( $args['prev_label'] ) ? $args['prev_label'] : __( 'Back', 'jet-form-builder' );

	printf(
		'<button type="button" class="jet-form-builder__prev-page" data-to-page="%2$d">%1$s</button>',
		$prev_label,
		$break->get_current() - 1
	);
} elseif( Tools::is_editor() && $args['type'] === 'form-break-field' ) {
	$prev_label = ! empty( $args['prev_label'] ) ? $args['prev_label'] : __( 'Back', 'jet-form-builder' );

	printf(
		'<button type="button" class="jet-form-builder__prev-page">%1$s</button>',
		$prev_label
	);
}
