<?php


namespace JFB_Compatibility\Bricks;

use JFB_Components\Compatibility\Base_Compat_Handle_Trait;
use JFB_Components\Compatibility\Base_Compat_Url_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Bricks implements Base_Module_It {

	public function rep_item_id() {
		return 'bricks';
	}

	public function condition(): bool {
		// todo correct check
		return false;
	}

	public function init_hooks() {
		// todo add hooks & filters
	}

	public function remove_hooks() {
		// todo remove hooks & filters
	}

}
