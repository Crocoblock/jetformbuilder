<?php

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

if ( version_compare( PHP_VERSION, '7.0.0', '>=' ) ) {
	require_once __DIR__ . '/includes/functions.php';
	require_once __DIR__ . '/vendor/woocommerce/action-scheduler/action-scheduler.php';

	add_action( 'plugins_loaded', 'jet_form_builder_init' );

	return;
}

function jet_form_builder_print_notice() {
	$class   = 'notice notice-error';
	$message = __(
		'<b>Error:</b> <b>JetFormBuilder</b> plugin requires a PHP version ">= 7.0"',
		'jet-form-builder'
	);
	printf( '<div class="%1$s"><p>%2$s</p></div>', esc_attr( $class ), wp_kses_post( $message ) );
}

add_action( 'admin_notices', 'jet_form_builder_print_notice' );