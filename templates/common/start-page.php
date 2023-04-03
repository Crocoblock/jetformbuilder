<?php
/**
 * Start from page template
 *
 * @var Form_Break $this
 */

use Jet_Form_Builder\Form_Break;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

printf(
	'<div class="jet-form-builder-page %1$s" data-page="%2$s" data-page-offset="%3$s">',
	esc_attr( $hidden_class ),
	esc_attr( $this->get_current() ),
	absint( $this->get_page_offset() )
);
