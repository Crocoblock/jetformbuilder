<?php


namespace Jet_Form_Builder\Actions\Methods\Update_User;


use Jet_Form_Builder\Actions\Methods\Base_Object_Property;

class Last_Name_Property extends Base_Object_Property {

	public function get_id(): string {
		return 'last_name';
	}

	public function get_label(): string {
		return __( 'Last Name', 'jet-form-builder' );
	}

}