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

	public function assets(): void {
		parent::assets();

		wp_enqueue_style(
			$this->slug(),
			Plugin::instance()->plugin_url( 'assets/css/admin/settings.css' ),
			array(),
			Plugin::instance()->get_version()
		);
	}


	/**
	 * Return page config array
	 */
	public function page_config(): array {
		return array();
	}
}