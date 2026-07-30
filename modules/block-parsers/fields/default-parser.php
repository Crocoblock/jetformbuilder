<?php


namespace JFB_Modules\Block_Parsers\Fields;

use JFB_Modules\Block_Parsers\Field_Data_Parser;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Default_Parser extends Field_Data_Parser {

	public function type() {
		return 'default';
	}

	protected function allows_array_value(): bool {
		switch ( $this->get_type() ) {
			case 'checkbox-field':
				return true;
			case 'select-field':
				return (bool) $this->get_setting( 'multiple' );
			default:
				return false;
		}
	}

}
