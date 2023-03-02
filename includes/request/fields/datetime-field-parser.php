<?php


namespace Jet_Form_Builder\Request\Fields;

use Jet_Form_Builder\Request\Field_Data_Parser;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Datetime_Field_Parser extends Field_Data_Parser {

	use Datetime_Trait;

	public function type() {
		return 'datetime-field';
	}

}
