<?php


namespace Jet_Form_Builder\Blocks\Modules\Fields_Errors;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Repeater_Field_Error extends Base_Field_Error {

	public function get_name() {
		return 'repeater-field';
	}

	public function get_title() {
		return 'Repeater';
	}
}
