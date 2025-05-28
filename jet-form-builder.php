<?php
/**
 * Plugin Name:         JetFormBuilder
 * Plugin URI:          https://jetformbuilder.com/
 * Description:         Advanced form builder plugin for WordPress block editor. Create forms from the ground up, customize the existing ones, and style them up – all in one editor.
 * Version:             3.5.1
 * Author:              Crocoblock
 * Author URI:          https://crocoblock.com/
 * Text Domain:         jet-form-builder
 * License:             GPL-3.0+
 * License URI:         http://www.gnu.org/licenses/gpl-3.0.txt
 * Domain Path:         /languages
 * Requires at least:    6.1
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

const JET_FORM_BUILDER_VERSION = '3.5.1';

const JET_FORM_BUILDER__FILE__ = __FILE__;
const JET_FORM_BUILDER_SITE    = 'https://jetformbuilder.com';

define( 'JET_FORM_BUILDER_PLUGIN_BASE', plugin_basename( JET_FORM_BUILDER__FILE__ ) );
define( 'JET_FORM_BUILDER_PATH', plugin_dir_path( JET_FORM_BUILDER__FILE__ ) );
define( 'JET_FORM_BUILDER_URL', plugins_url( '/', JET_FORM_BUILDER__FILE__ ) );

require __DIR__ . '/load.php';
