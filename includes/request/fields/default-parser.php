<?php


namespace Jet_Form_Builder\Request\Fields;

use Jet_Form_Builder\Request\Field_Data_Parser;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Default_Parser extends Field_Data_Parser {

	public function type() {
		return 'default';
	}

}
