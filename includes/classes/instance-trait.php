<?php


namespace Jet_Form_Builder\Classes;

trait Instance_Trait {

	public static $instance;

	/**
	 * Instance.
	 *
	 * Ensures only one instance of the plugin class is loaded or can be loaded.
	 *
	 * @return Instance_Trait An instance of the class.
	 * @since 1.0.0
	 * @access public
	 * @static
	 */
	public static function instance() {

		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	public static function clear() {
		self::$instance = null;
	}
}
