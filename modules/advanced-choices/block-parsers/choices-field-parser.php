<?php


namespace JFB_Modules\Advanced_Choices\Block_Parsers;

use Jet_Form_Builder\Request\Field_Data_Parser;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Choices_Field_Parser extends Field_Data_Parser {

	public function type() {
		return 'choices-field';
	}
}