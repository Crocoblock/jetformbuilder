<?php


namespace JFB_Components\Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use JFB_Components\Repository\Repository_Item_Instance_Trait;

interface Base_Module_It extends Repository_Item_Instance_Trait {

	public function condition(): bool;

	public function init_hooks();

	public function remove_hooks();

}