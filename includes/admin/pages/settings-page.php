<?php


namespace Jet_Form_Builder\Admin\Pages;


class Settings_Page extends Base_Page {

	/**
	 * Page slug
	 */
	public function slug(): string {
		return 'settings';
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
			'test' => 123
		);
	}
}