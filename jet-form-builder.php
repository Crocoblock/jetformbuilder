<?php
/**
 * Plugin Name: JetFormBuilder
 * Plugin URI:  https://jetformbuilder.com/
 * Description: Advanced form builder plugin for WordPress block editor. Create forms from the ground up, customize the existing ones, and style them up – all in one editor.
 * Version:     3.1.0.13
 * Author:      Crocoblock
 * Author URI:  https://crocoblock.com/
 * Text Domain: jet-form-builder
 * License:     GPL-3.0+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 * Domain Path: /languages
 */

use Jet_Form_Builder\Plugin;
use JFB_Modules\Cli;
use JFB_Modules\Framework;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

function jet_form_builder_init() {

	define( 'JET_FORM_BUILDER_VERSION', '3.1.0.13' );

	define( 'JET_FORM_BUILDER__FILE__', __FILE__ );
	define( 'JET_FORM_BUILDER_PLUGIN_BASE', plugin_basename( JET_FORM_BUILDER__FILE__ ) );
	define( 'JET_FORM_BUILDER_PATH', plugin_dir_path( JET_FORM_BUILDER__FILE__ ) );
	define( 'JET_FORM_BUILDER_URL', plugins_url( '/', JET_FORM_BUILDER__FILE__ ) );
	define( 'JET_FORM_BUILDER_SITE', 'https://jetformbuilder.com' );

	require JET_FORM_BUILDER_PATH . 'includes/plugin.php';

	jet_form_builder()->register_autoloader();
	jet_form_builder()->init_lang();

	add_action(
		'after_setup_theme',
		array( jet_form_builder(), 'init_plugin' ),
		0
	);

	Plugin::instance()->get_modules()->install( new Cli\Module() );
	Plugin::instance()->get_modules()->install( new Framework\Module() );
}

if ( version_compare( PHP_VERSION, '7.0.0', '>=' ) ) {
	add_action( 'plugins_loaded', 'jet_form_builder_init' );

	require __DIR__ . '/includes/functions.php';
} else {
	add_action(
		'admin_notices',
		function () {
			$class   = 'notice notice-error';
			$message = __(
				'<b>Error:</b> <b>JetFormBuilder</b> plugin requires a PHP version ">= 7.0"',
				'jet-form-builder'
			);
			printf( '<div class="%1$s"><p>%2$s</p></div>', esc_attr( $class ), wp_kses_post( $message ) );
		}
	);
}
