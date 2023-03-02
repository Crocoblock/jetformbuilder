<?php


namespace Jet_Form_Builder\Actions\Methods\Exceptions;


use Jet_Form_Builder\Exceptions\Handler_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Base_Method_Executed extends Handler_Exception {

	public function save_exception(): bool {
		return false;
	}

}