<?php


namespace Jet_Form_Builder\Exceptions;


class Silence_Exception extends Handler_Exception {

	public function save_exception(): bool {
		return false;
	}
}