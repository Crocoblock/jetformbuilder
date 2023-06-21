<?php


namespace JFB_Modules\Block_Parsers\Fields;

use JFB_Modules\Block_Parsers\Field_Data_Parser;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Date_Field_Parser extends Field_Data_Parser {

	use Datetime_Trait;

	public function type() {
		return 'date-field';
	}


}
