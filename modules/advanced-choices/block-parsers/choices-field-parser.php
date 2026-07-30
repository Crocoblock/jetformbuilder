<?php


namespace JFB_Modules\Advanced_Choices\Block_Parsers;

use JFB_Modules\Block_Parsers\Field_Data_Parser;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Choices_Field_Parser extends Field_Data_Parser {

	public function type() {
		return 'choices-field';
	}

	protected function allows_array_value(): bool {
		return (bool) $this->get_setting( 'allow_multiple' );
	}
}
