<?php

namespace Jet_Form_Builder\Blocks\Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define text field renderer class
 */
class Checkbox_Field_Render extends Base_Select_Radio_Check {

	public function __construct( $block_type ) {
		parent::__construct( $block_type );

		$this->set_options();
	}

	public function get_name() {
		return 'checkbox-field';
	}
}
