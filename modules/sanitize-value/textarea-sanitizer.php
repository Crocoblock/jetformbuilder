<?php


namespace JFB_Modules\Sanitize_Value;

use Jet_Form_Builder\Classes\Tools;
use JFB_Modules\Block_Parsers\Field_Data_Parser;
use JFB_Modules\Sanitize_Value\Interfaces\Value_Sanitizer;

class Textarea_Sanitizer implements Value_Sanitizer {

	public function rep_item_id() {
		return 'textarea';
	}

	public function do_sanitize( Field_Data_Parser $parser ) {
		$parser->set_value(
			sanitize_textarea_field( Tools::to_string( $parser->get_value() ) )
		);
	}
}
