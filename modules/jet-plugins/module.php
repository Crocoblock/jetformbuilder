<?php


namespace JFB_Modules\Jet_Plugins;

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

	use Base_Module_Handle_Trait;
	use Base_Module_Url_Trait;

	const HANDLE = 'jet-plugins';

	public function rep_item_id() {
		return self::HANDLE;
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
	}

	public function remove_hooks() {
	}

	public function register_scripts() {
		wp_register_script(
			self::HANDLE,
			$this->get_url( 'assets/build/js/index.js' ),
			array( 'jquery' ),
			'1.0.0',
			true
		);
	}
}
