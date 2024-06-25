<?php

namespace JFB_Modules\Actions_V2\interfaces;

use Jet_Form_Builder\Actions\Manager;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Repository\Repository_Item_Instance_Trait;

interface Action_Integration_Interface extends
	Base_Module_Handle_It,
	Base_Module_Dir_It,
	Base_Module_Url_It,
	Repository_Item_Instance_Trait {

	public function init_hooks();

	public function on_install();

	public function register_actions( Manager $manager );

}
