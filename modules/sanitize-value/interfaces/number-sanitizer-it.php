<?php


namespace JFB_Modules\Sanitize_Value\Interfaces;

use JFB_Modules\Block_Parsers\Field_Data_Parser;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Number_Sanitizer_It extends Value_Sanitizer_It {

	public function do_number_sanitize( Field_Data_Parser $parser );

}
