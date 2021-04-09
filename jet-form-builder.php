<?php
/**
 * Plugin Name: JetFormBuilder
 * Plugin URI:  https://crocoblock.com/
 * Description: Advanced form builder plugin for Gutenberg. Create forms from the ground up, customize the existing ones, and style them up – all in one editor
 * Version:     1.1.6
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

	define( 'JET_FORM_BUILDER_VERSION', '1.1.6' );

	define( 'JET_FORM_BUILDER__FILE__', __FILE__ );
	define( 'JET_FORM_BUILDER_PLUGIN_BASE', plugin_basename( JET_FORM_BUILDER__FILE__ ) );
	define( 'JET_FORM_BUILDER_PATH', plugin_dir_path( JET_FORM_BUILDER__FILE__ ) );
	define( 'JET_FORM_BUILDER_URL', plugins_url( '/', JET_FORM_BUILDER__FILE__ ) );

	require JET_FORM_BUILDER_PATH . 'includes/classes/instance-trait.php';
	require JET_FORM_BUILDER_PATH . 'includes/plugin.php';

}

function jet_form_builder() {
	return Jet_Form_Builder\Plugin::instance();
}

if ( ! function_exists( 'jet_fb_render_form' ) ) {
	function jet_fb_render_form( $settings ) {
		return Jet_Form_Builder\Plugin::instance()->blocks->get_form_class()->render_callback_field( $settings );
	}
}
