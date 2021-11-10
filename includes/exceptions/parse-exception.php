<?php


namespace Jet_Form_Builder\Exceptions;


class Parse_Exception extends Handler_Exception {

	public function get_inner() {
		return $this->get_additional()[0] ?? array();
	}

	public function save_exception(): bool {
		return false;
	}

}