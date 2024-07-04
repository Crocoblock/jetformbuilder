<?php


namespace JFB_Modules\Actions_V2\Update_User\Properties;

use Jet_Form_Builder\Actions\Methods\Base_Object_Property;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Nick_Name_Property extends Base_Object_Property {

	public function get_id(): string {
		return 'nickname';
	}

	public function get_label(): string {
		return __( 'Nickname', 'jet-form-builder' );
	}

}
