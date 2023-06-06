<?php


namespace JFB_Components\Export;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Table_Entries_Export_It extends Base_Export_It {

	public function add_row( array $row );

	public function headers();

	public function close();

}