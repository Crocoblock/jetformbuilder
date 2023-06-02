<?php


namespace JFB_Compatibility\Elementor;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Elementor {

	public static function register() {
		if ( ! defined( 'ELEMENTOR_VERSION' ) ) {
			return;
		}
		new static();
	}

	public function __construct() {
		new Widget_Controller();
	}

}
