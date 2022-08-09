<?php


namespace Jet_Form_Builder\Actions\Methods\Update_User;


use Jet_Form_Builder\Actions\Methods\Base_Object_Property;

class Nick_Name_Property extends Base_Object_Property {

	public function get_prop_name(): string {
		return 'nickname';
	}

	public function get_label(): string {
		return __( 'Nickname', 'jet-form-builder' );
	}

}