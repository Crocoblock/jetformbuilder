<?php

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

printf(
	'<div class="jet-form-builder__field-error">%1$s</div>',
	wp_kses_post( $message_content )
);
