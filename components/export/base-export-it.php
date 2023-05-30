<?php


namespace JFB_Components\Export;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Base_Export_It {

	public function set_file_name( string $file_name, string $fallback = '' );

}