<?php


namespace Jet_Form_Builder\Actions\Methods\Update_User;

use Jet_Form_Builder\Actions\Methods\Base_Object_Property;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Description_Property extends Base_Object_Property {

	public function get_id(): string {
		return 'description';
	}

	public function get_label(): string {
		return __( 'Description', 'jet-form-builder' );
	}

}