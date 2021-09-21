<?php
use Jet_Form_Builder\Classes\Tools;
/**
 * Prev page button template
 * @var \Jet_Form_Builder\Blocks\Render\Base $this
 */
$current = $this->live_form->get_form_break()->get_current();

if ( isset( $args['add_prev'] ) && $args['add_prev'] && 1 < $current ) {

	$prev_label = ! empty( $args['prev_label'] ) ? $args['prev_label'] : __( 'Back', 'jet-form-builder' );

	printf(
		'<button type="button" class="jet-form-builder__prev-page" data-to-page="%2$d">%1$s</button>',
		$prev_label,
		$current - 1
	);
} elseif( Tools::is_editor() && $args['type'] === 'form-break-field' ) {
	$prev_label = ! empty( $args['prev_label'] ) ? $args['prev_label'] : __( 'Back', 'jet-form-builder' );

	printf(
		'<button type="button" class="jet-form-builder__prev-page">%1$s</button>',
		$prev_label
	);
}
