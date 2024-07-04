<?php


namespace JFB_Modules\Actions_V2\Update_User\Properties;

use Jet_Form_Builder\Actions\Methods\Base_Object_Property;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Display_Name_Property extends Base_Object_Property {

	public function get_id(): string {
		return 'display_name';
	}

	public function get_label(): string {
		return __( 'Display Name', 'jet-form-builder' );
	}

}
