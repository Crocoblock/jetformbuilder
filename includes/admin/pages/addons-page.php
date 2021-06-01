<?php
namespace Jet_Form_Builder\Admin\Pages;

use Jet_Form_Builder\Plugin;

class Addons_Page extends Base_Page {

	/**
	 * Page slug
	 */
	public function slug(): string {
		return 'jfb-addons';
	}

	/**
	 * Page title
	 */
	public function title(): string {
		return __( 'Addons', 'jet-form-builder' );
	}

	/**
	 * Page Assets
	 */
	public function assets() {
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

		//array_values( Utils::get_license_list() )
		return array(
			'ajaxUrl'     => esc_url( admin_url( 'admin-ajax.php' ) ),
			'allAddons'   => Plugin::instance()->license_manager->get_plugin_data_list(),
			'licenseKey'  => Plugin::instance()->license_manager->get_license_key(),
			'licenseList' => Plugin::instance()->license_manager->get_license_data(),
		);
	}
}