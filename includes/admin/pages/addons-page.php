<?php

namespace Jet_Form_Builder\Admin\Pages;

use Jet_Form_Builder\Addons\Manager;
use Jet_Form_Builder\Plugin;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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

		return apply_filters(
			'jfb-addons-page/page-localize-data',
			array(
				'nonce'       => wp_create_nonce( Manager::NONCE_ACTION ),
				'ajaxUrl'     => esc_url_raw( admin_url( 'admin-ajax.php' ) ),
				'allAddons'   => Plugin::instance()->addons_manager->get_plugin_data_list(),
				'licenseMode' => false,
				'licenseKey'  => '',
				'licenseList' => array(),
				'themeInfo'   => Plugin::instance()->addons_manager->get_theme_info(),
				'miscInfo'    => array(
					'mainSiteUrl'    => 'https://jetformbuilder.com/',
					'pricingPageUrl' => 'https://jetformbuilder.com/pricing/',
				),
			)
		);
	}

	public function assets() {
		wp_enqueue_script( 'jet-form-builder-admin-package' );

		parent::assets();
	}
}
