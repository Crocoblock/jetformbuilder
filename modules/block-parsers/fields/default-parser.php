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

}
