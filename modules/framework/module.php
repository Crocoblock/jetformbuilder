<?php


namespace JFB_Modules\Framework;

use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Components\Module\Base_Module_It;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

final class Module implements Base_Module_It, Base_Module_After_Install_It, Base_Module_Dir_It {

	use Base_Module_Dir_Trait;

	private $loader;
	private $cx_vui;

	public function rep_item_id() {
		return 'framework';
	}

	public function condition(): bool {
		return true;
	}

	public function on_install() {
		$this->loader = new CX_Loader(
			array(
				$this->get_dir( 'vue-ui/cherry-x-vue-ui.php' ),
				$this->get_dir( 'admin-bar/jet-admin-bar.php' ),
			)
		);
	}

	public function on_uninstall() {
		unset( $this->loader );
	}

	public function init_hooks() {
	}

	public function remove_hooks() {
	}

	/**
	 * @return CX_Loader
	 */
	public function get_loader(): CX_Loader {
		return $this->loader;
	}

	public function get_cx_vue_ui(): \CX_Vue_UI {
		if ( $this->cx_vui ) {
			return $this->cx_vui;
		}
		$ui_data = $this->get_loader()->get_included_module_data( 'cherry-x-vue-ui.php' );

		$this->cx_vui = new \CX_Vue_UI( $ui_data );

		return $this->cx_vui;
	}
}