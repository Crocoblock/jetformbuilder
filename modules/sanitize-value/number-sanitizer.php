<?php


namespace JFB_Modules\Sanitize_Value;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use JFB_Modules\Block_Parsers\Field_Data_Parser;
use JFB_Modules\Sanitize_Value\Interfaces\Number_Sanitizer_It;
use JFB_Modules\Sanitize_Value\Traits\Number_Sanitizer_Trait;

class Number_Sanitizer implements Number_Sanitizer_It {

	use Number_Sanitizer_Trait;

	public function rep_item_id() {
		return 'number';
	}

	public function do_number_sanitize( Field_Data_Parser $parser ) {
		$parser->set_value( + $parser->get_value() );
	}
}
