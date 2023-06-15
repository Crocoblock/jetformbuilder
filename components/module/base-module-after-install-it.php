<?php


namespace JFB_Components\Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Base_Module_After_Install_It {

	public function on_install();

	public function on_uninstall();

}