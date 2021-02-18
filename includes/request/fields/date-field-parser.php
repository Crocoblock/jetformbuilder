<?php


namespace Jet_Form_Builder\Request\Fields;


use Jet_Form_Builder\Request\Field_Data_Parser;

class Date_Field_Parser extends Field_Data_Parser {

	use Datetime_Trait;

	public function type() {
		return 'date-field';
	}


}