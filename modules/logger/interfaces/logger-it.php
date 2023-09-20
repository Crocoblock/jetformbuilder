<?php


namespace JFB_Modules\Logger\Interfaces;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Logger_It {

	public function log( string $message, $value = null );

}
