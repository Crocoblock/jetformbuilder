<?php
/**
 * Plugin Name: JetFormBuilder
 * Plugin URI:  https://crocoblock.com/plugins/jetappointmentsbooking/
 * Description:
 * Version:     0.1
 * Author:      Crocoblock
 * Author URI:  https://crocoblock.com/
 * Text Domain: jet-form-builder
 * License:     GPL-3.0+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 * Domain Path: /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

add_action( 'plugins_loaded', 'jet_form_builder_init' );

function jet_form_builder_init() {

	define( 'JET_FORM_BUILDER_VERSION', '1.1.1' );

	define( 'JET_FORM_BUILDER__FILE__', __FILE__ );
	define( 'JET_FORM_BUILDER_PLUGIN_BASE', plugin_basename( JET_FORM_BUILDER__FILE__ ) );
	define( 'JET_FORM_BUILDER_PATH', plugin_dir_path( JET_FORM_BUILDER__FILE__ ) );
	define( 'JET_FORM_BUILDER_URL', plugins_url( '/', JET_FORM_BUILDER__FILE__ ) );

	require JET_FORM_BUILDER_PATH . 'includes/plugin.php';

}

function jet_form_builder() {
	return Jet_Form_Builder\Plugin::instance();
}

/*register_activation_hook( __FILE__, function() {
	jet_form_builder_init();
	jet_form_builder()->init_components();
	jet_form_builder()->db->install_table();
} );*/
