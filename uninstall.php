<?php
/**
 * @since 3.0.0
 */

// phpcs:disable WordPress.DB.DirectDatabaseQuery

// if uninstall.php is not called by WordPress, die
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	die;
}

$options = get_option( 'jet_form_builder_settings__options-tab' );

if ( ! $options ) {
	return;
}

$options = json_decode( $options, true );

if ( empty( $options['clear_on_uninstall'] ) ) {
	return;
}

$opt_prefixes        = array(
	'jet\_form\_builder\_settings\_\_',
	'jet\_fb\_',
	'jfb\-',
	'jfb\_',
);
$additional_prefixes = array();

foreach ( $opt_prefixes as $prefix ) {
	array_push(
		$additional_prefixes,
		'\_transient\_' . $prefix,
		'\_site\_transient\_' . $prefix,
		'\_transient\_timeout\_' . $prefix,
		'\_site\_transient\_timeout\_' . $prefix
	);
}

$opt_prefixes = array_merge( $opt_prefixes, $additional_prefixes );

$options_condition = "option_name LIKE '" . implode( "%' OR option_name LIKE '", $opt_prefixes ) . "%'";

$tables = array(
	// secondary tables
	'tokens_to_records',
	'records_actions',
	'records_errors',
	'records_fields',
	'subscription_to_payer_shipping',
	'subscriptions_to_records',
	'subscriptions_to_payments',
	'subscriptions_notes',
	'payment_to_payer_shipping',
	'payments_to_records',
	'payers_shipping',
	// primary tables
	'tokens',
	'csrf_tokens',
	'recurring_cycles',
	'subscriptions',
	'payments',
	'migrations',
	'payers',
	'records',
);

global $wpdb;

// phpcs:disable WordPress.DB.PreparedSQL

foreach ( $tables as $table_name ) {
	$wpdb->query( 'DROP TABLE IF EXISTS ' . $wpdb->prefix . 'jet_fb_' . $table_name );
}

$wpdb->query( "DELETE FROM {$wpdb->options} WHERE {$options_condition}" );

// phpcs:enable WordPress.DB.PreparedSQL

$forms = get_posts(
	array(
		'post_type'   => array( 'jet-form-builder' ),
		'post_status' => 'any',
		'numberposts' => - 1,
		'fields'      => 'ids',
	)
);
if ( $forms ) {
	foreach ( $forms as $form_id ) {
		wp_delete_post( $form_id, true );
	}
}

/**
 * @var WP_Filesystem_Base $wp_filesystem
 */
global $wp_filesystem;

$uploads_directory = wp_upload_dir();
if ( empty( $uploads_directory['error'] ) ) {
	$wp_filesystem->rmdir( $uploads_directory['basedir'] . '/jet-form-builder/', true );
}
