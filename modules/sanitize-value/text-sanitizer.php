<?php


namespace JFB_Modules\Sanitize_Value;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Classes\Tools;
use JFB_Modules\Block_Parsers\Field_Data_Parser;
use JFB_Modules\Sanitize_Value\Interfaces\Value_Sanitizer_It;

class Text_Sanitizer implements Value_Sanitizer_It {

	public function rep_item_id() {
		return 'text';
	}

	public function do_sanitize( Field_Data_Parser $parser ) {
		$parser->set_value(
			sanitize_text_field( Tools::to_string( $parser->get_value() ) )
		);
	}
}
