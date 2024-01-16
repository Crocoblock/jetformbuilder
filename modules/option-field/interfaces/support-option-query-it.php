<?php


namespace JFB_Modules\Option_Field\Interfaces;

use JFB_Modules\Option_Query\Interfaces\Option_Query_It;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Support_Option_Query_It {

	public function get_query(): Option_Query_It;

	public function set_query( Option_Query_It $query );

}
