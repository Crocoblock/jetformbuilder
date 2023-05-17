<?php


namespace JFB_Modules\Security\Exceptions;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Exceptions\Handler_Exception;

class Spam_Exception extends Handler_Exception {

}