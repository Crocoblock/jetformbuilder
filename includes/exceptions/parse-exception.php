<?php


namespace Jet_Form_Builder\Exceptions;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Parse_Exception extends Silence_Exception {

	public function get_inner() {
		return $this->get_additional()[0] ?? array();
	}

}
