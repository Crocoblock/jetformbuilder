<?php


namespace Jet_Form_Builder\Actions\Methods\Update_User;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Actions\Methods\Exceptions\Modifier_Exclude_Property;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class User_Url_Property extends Base_Object_Property {

	public function get_id(): string {
		return 'user_url';
	}

	public function get_label(): string {
		return __( 'User URL', 'jet-form-builder' );
	}

}