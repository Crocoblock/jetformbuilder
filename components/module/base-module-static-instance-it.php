<?php


namespace JFB_Components\Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Base_Module_Static_Instance_It {

	public static function instance();

	public static function get_instance_id(): string;

}
