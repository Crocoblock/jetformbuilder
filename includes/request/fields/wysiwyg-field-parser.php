<?php


namespace Jet_Form_Builder\Request\Fields;

use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Request\Field_Data_Parser;

class Wysiwyg_Field_Parser extends Field_Data_Parser {

	public function type() {
		return 'wysiwyg-field';
	}

	public function get_response() {
		return Tools::sanitize_wysiwyg( $this->value );
	}

}
