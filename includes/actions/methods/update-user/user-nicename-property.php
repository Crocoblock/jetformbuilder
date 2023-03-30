<?php


namespace Jet_Form_Builder\Actions\Methods\Update_User;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Actions\Methods\Exceptions\Modifier_Exclude_Property;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class User_Nicename_Property extends Base_Object_Property {

	public function get_id(): string {
		return 'user_nicename';
	}

	public function get_label(): string {
		return __( 'User Nice Name', 'jet-form-builder' );
	}

}
