<?php


namespace JFB_Modules\Logger;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Empty_Logger implements Interfaces\Logger_It {

	public function log( string $message, $value = null ) {
		// silence is golden
	}

}
