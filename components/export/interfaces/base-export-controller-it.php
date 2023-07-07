<?php


namespace JFB_Components\Export\Interfaces;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Base_Export_Controller_It {

	public function do_export();

	public function set_exporter( Base_Export_It $exporter );

	public function get_exporter(): Base_Export_It;

}
