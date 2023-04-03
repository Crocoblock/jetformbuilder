<?php

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

printf(
	'<div class="%1$s">%2$s</div>',
	esc_attr( $class ),
	wp_kses_post( $message_content )
);
