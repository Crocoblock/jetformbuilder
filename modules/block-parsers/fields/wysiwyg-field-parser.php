<?php


namespace JFB_Modules\Block_Parsers\Fields;

use Jet_Form_Builder\Classes\Tools;
use JFB_Modules\Block_Parsers\Field_Data_Parser;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Wysiwyg_Field_Parser extends Field_Data_Parser {

	public function type() {
		return 'wysiwyg-field';
	}

	public function get_response() {
		return Tools::sanitize_wysiwyg( $this->value );
	}

}
