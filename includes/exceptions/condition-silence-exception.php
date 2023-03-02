<?php


namespace Jet_Form_Builder\Exceptions;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Condition_Silence_Exception extends Handler_Exception {

	public function save_exception(): bool {
		return false;
	}

}