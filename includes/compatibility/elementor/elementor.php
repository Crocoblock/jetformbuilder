<?php


namespace Jet_Form_Builder\Compatibility\Elementor;


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