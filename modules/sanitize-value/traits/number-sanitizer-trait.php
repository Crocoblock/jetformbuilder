<?php


namespace JFB_Modules\Sanitize_Value\Traits;

use JFB_Modules\Block_Parsers\Field_Data_Parser;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Number_Sanitizer_Trait {

	public function do_sanitize( Field_Data_Parser $parser ) {
		if ( ! is_numeric( $parser->get_value() ) ) {
			$parser->set_value( 0 );

			return;
		}

		$this->do_sanitize( $parser );
	}

}
