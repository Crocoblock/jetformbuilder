<?php


namespace Jet_Form_Builder\Actions\Methods\Update_User;


use Jet_Form_Builder\Actions\Methods\Base_Object_Property;

class First_Name_Property extends Base_Object_Property {

	public function get_prop_name(): string {
		return 'first_name';
	}

	public function get_label(): string {
		return __( 'First Name', 'jet-form-builder' );
	}

}