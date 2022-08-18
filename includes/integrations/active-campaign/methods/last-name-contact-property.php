<?php


namespace Jet_Form_Builder\Integrations\Active_Campaign\Methods;


use Jet_Form_Builder\Actions\Methods\Base_Object_Property;

class Last_Name_Contact_Property extends Base_Object_Property {

	// It can be empty
	// in action we use dynamic fetching properties
	public function get_label(): string {
		return '';
	}

	public function get_id(): string {
		return 'lastName';
	}
}