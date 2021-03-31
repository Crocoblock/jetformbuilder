<?php


namespace Jet_Form_Builder\Request\Fields;


use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Request\Field_Data_Parser;

class Text_Field_Parser extends Field_Data_Parser {

	public function type() {
		return 'text-field';
	}

	public function _is_custom_check() {
		return (
			isset( $this->settings['field_type'] )
			&& 'email' === $this->settings['field_type']
			&& ! empty( $value )
			&& ! is_email( $this->value )
		);
	}

}