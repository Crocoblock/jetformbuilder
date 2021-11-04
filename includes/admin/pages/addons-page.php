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
	 * Return page config array
	 */
	public function page_config(): array {

		return apply_filters( 'jfb-addons-page/page-localize-data', [
			'ajaxUrl'        => esc_url( admin_url( 'admin-ajax.php' ) ),
			'allAddons'      => Plugin::instance()->addons_manager->get_plugin_data_list(),
			'licenseMode'    => false,
			'licenseKey'     => '',
			'licenseList'    => [],
			'themeInfo'      => Plugin::instance()->addons_manager->get_theme_info(),
			'miscInfo'       => [
				'mainSiteUrl'    => 'https://jetformbuilder.com/',
				'pricingPageUrl' => 'https://jetformbuilder.com/pricing/'
			]
		] );
	}
}
