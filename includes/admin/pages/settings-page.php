<?php


namespace Jet_Form_Builder\Admin\Pages;

use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Plugin;

class Settings_Page extends Base_Page {

	/**
	 * Page slug
	 */
	public function slug(): string {
		return 'jfb-settings';
	}

	/**
	 * Page title
	 */
	public function title(): string {
		return __( 'Settings', 'jet-form-builder' );
	}


	/**
	 * Return page config array
	 */
	public function page_config(): array {
		return array();
	}

	public function assets() {
		wp_enqueue_script( 'jet-form-builder-admin-package' );

		parent::assets();
	}
}
