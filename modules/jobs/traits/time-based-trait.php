<?php


namespace JFB_Modules\Jobs\Traits;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

trait Time_Based_Trait {

	private $timestamp = 0;

	public function set_timestamp( int $time ) {
		$this->timestamp = $time;
	}

	public function get_timestamp(): int {
		return $this->timestamp;
	}

}
