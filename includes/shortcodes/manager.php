<?php


namespace Jet_Form_Builder\Shortcodes;


class Manager {

	public static $instance = null;

	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}


	private function __construct() {
		new Form_Shortcode();
	}
}