<?php


namespace JFB_Components\Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Module_Controller_It {

	public function init_hooks();

	/**
	 * @param string $name_or_class
	 *
	 * @return Base_Module_It|Base_Module_Handle_It|Base_Module_Url_It|Base_Module_Dir_It|Base_Module_After_Install_It
	 */
	public function module( string $name_or_class ): Base_Module_It;

	public function has_module( string $name_or_class ): bool;

	public function install( Base_Module_It $item ): bool;

}
