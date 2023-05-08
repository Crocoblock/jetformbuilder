<?php


namespace Jet_Form_Builder\Modules\Base_Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Classes\Repository\Repository_Item_Instance_Trait;

interface Base_Module_It extends Repository_Item_Instance_Trait {

	public function condition(): bool;

	public function init_hooks();

	public function remove_hooks();

}