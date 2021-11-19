<?php


namespace Jet_Form_Builder\Exceptions;


class Parse_Exception extends Silence_Exception {

	public function get_inner() {
		return $this->get_additional()[0] ?? array();
	}

}