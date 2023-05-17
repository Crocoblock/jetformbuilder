<?php


namespace JFB_Modules\Base_Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Base_Module_Url_It {

	public function get_url( string $url ): string;

}