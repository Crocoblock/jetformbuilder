<?php

namespace Jet_Form_Builder;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Autoloader handler class is responsible for loading the different
 * classes needed to run the plugin.
 */
class Autoloader {

	/**
	 * Run autoloader.
	 *
	 * Register a function as `__autoload()` implementation.
	 *
	 * @since 1.6.0
	 * @access public
	 * @static
	 */
	public static function run() {
		spl_autoload_register( array( __CLASS__, 'autoload' ) );
	}

	/**
	 * Load class.
	 *
	 * For a given class name, require the class file.
	 *
	 * @param string $relative_class_name Class name.
	 *
	 * @since 1.6.0
	 * @access private
	 * @static
	 */
	private static function load_class( $class_name ) {

		$file     = str_replace( '\\', DIRECTORY_SEPARATOR, $class_name );
		$file     = strtolower( str_replace( '_', '-', $file ) );
		$filepath = JET_FORM_BUILDER_PATH . 'includes/' . $file . '.php';

		if ( is_readable( $filepath ) ) {
			require $filepath;
		}
	}

	/**
	 * Autoload.
	 *
	 * For a given class, check if it exist and load it.
	 *
	 * @param string $class Class name.
	 *
	 * @since 1.6.0
	 * @access private
	 * @static
	 */
	private static function autoload( $class ) {

		if ( 0 !== strpos( $class, __NAMESPACE__ . '\\' ) ) {
			return;
		}

		$relative_class_name = preg_replace( '/^' . __NAMESPACE__ . '\\\/', '', $class );
		$final_class_name    = __NAMESPACE__ . '\\' . $relative_class_name;

		if ( ! class_exists( $final_class_name ) ) {
			self::load_class( $relative_class_name );
		}
	}
}
