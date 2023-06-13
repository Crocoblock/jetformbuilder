<?php


namespace JFB_Components\Export\Interfaces;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Base_Export_It {

	public function open();

	public function close();

	public function add_row( array $row );

	public function set_title( string $title );

	public function get_title(): string;

}