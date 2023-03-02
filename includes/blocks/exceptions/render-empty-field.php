<?php


namespace Jet_Form_Builder\Blocks\Exceptions;

use Jet_Form_Builder\Exceptions\Silence_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Render_Empty_Field extends Silence_Exception {

}