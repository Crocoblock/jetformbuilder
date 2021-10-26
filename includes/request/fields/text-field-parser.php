<?php


namespace Jet_Form_Builder\Request\Fields;

use Jet_Form_Builder\Request\Field_Data_Parser;

class Text_Field_Parser extends Field_Data_Parser {

	public function type() {
		return 'text-field';
	}

	public function _is_custom_check() {
		$type = $this->settings['field_type'] ?? 'text';

		return ( 'email' === $type && ! is_email( $this->value ) && $this->_is_required() );
	}

}
