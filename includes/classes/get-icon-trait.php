<?php


namespace Jet_Form_Builder\Classes;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Get_Icon_Trait {
	use Get_Template_Trait;

	public function get_icon_path( $name ) {
		return $this->get_global_template( 'icons/' ) . $name;
	}

}
