<?php


namespace JFB_Modules\Actions_V2\Update_User\Properties;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Actions\Methods\Exceptions\Modifier_Exclude_Property;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class User_Url_Property extends Base_Object_Property {

	public function get_id(): string {
		return 'user_url';
	}

	public function get_label(): string {
		return __( 'User URL', 'jet-form-builder' );
	}

}
