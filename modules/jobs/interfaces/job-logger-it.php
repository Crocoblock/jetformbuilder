<?php


namespace JFB_Modules\Jobs\Interfaces;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

interface Job_Logger_It {

	public function log( string $message );

	public function get_logs(): array;

}
