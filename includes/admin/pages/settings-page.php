<?php


namespace Jet_Form_Builder\Admin\Pages;

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
		return array(
			'is_active' => jet_form_builder()->addons_manager->is_active(),
		);
	}

	public function assets() {
		wp_enqueue_script( 'jet-form-builder-admin-package' );

		parent::assets();
	}
}
