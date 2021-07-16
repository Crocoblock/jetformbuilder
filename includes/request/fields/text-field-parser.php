<?php


namespace Jet_Form_Builder\Request\Fields;

use Jet_Form_Builder\Request\Field_Data_Parser;

class Text_Field_Parser extends Field_Data_Parser {

	public function type() {
		return 'text-field';
	}

	public function _is_custom_check() {
		if ( empty( $this->settings['field_type'] ) ) {
			return true;
		}

		return 'email' === $this->settings['field_type'] ? is_email( $this->value ) : true;
	}

}