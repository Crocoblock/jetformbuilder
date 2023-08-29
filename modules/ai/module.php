<?php


namespace JFB_Modules\Ai;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;

class Module implements Base_Module_It, Base_Module_Url_It, Base_Module_Handle_It {

	use Base_Module_Url_Trait;
	use Base_Module_Handle_Trait;

	public function rep_item_id() {
		return 'ai';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		// TODO: Implement init_hooks() method.
	}

	public function remove_hooks() {
		// TODO: Implement remove_hooks() method.
	}
}
