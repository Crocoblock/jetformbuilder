<?php


namespace Jet_Form_Builder\Request\Fields;

use Jet_Form_Builder\Request\Field_Data_Parser;

class Checkbox_Field_Parser extends Field_Data_Parser {

	public function type() {
		return 'checkbox-field';
	}

	public function get_response() {
		if ( ! $this->value ) {
			return $this->value;
		}

		return is_array( $this->value ) ? $this->value : array( $this->value );
	}

}
