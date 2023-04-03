<?php
/**
 * Start from template
 *
 * @var \Jet_Form_Builder\Blocks\Render\Base $this
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
printf( '<div %1$s>', $this->get_attributes_string() );
