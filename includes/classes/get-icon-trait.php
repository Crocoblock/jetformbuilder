<?php


namespace Jet_Form_Builder\Classes;


trait Get_Icon_Trait {
	use Get_Template_Trait;

	public function get_icon_path( $name ) {
		return $this->get_global_template( 'icons/' ) . $name;
	}

}