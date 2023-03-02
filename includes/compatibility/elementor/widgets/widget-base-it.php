<?php


namespace Jet_Form_Builder\Compatibility\Elementor\Widgets;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Widget_Base_It {

	public function init_hooks();
}
