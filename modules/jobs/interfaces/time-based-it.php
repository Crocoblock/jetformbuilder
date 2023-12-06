<?php


namespace JFB_Modules\Jobs\Interfaces;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

interface Time_Based_It {

	public function set_timestamp( int $time );

	public function get_timestamp(): int;
}
