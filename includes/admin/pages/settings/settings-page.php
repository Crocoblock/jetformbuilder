<?php


namespace Jet_Form_Builder\Admin\Pages\Settings;

use Jet_Form_Builder\Admin\Pages\Base_Page;
use Jet_Form_Builder\Admin\Pages\Pages_Manager;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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
		$this->boxes()->register_box( new Helpful_Links_Box() );

		if ( ! jet_form_builder()->addons_manager->is_active() ) {
			$this->notices()->register_notice( new Pro_Notice() );
			$this->boxes()->register_box( new Useful_Banner_Box() );
		}

		return array(
			'is_active' => jet_form_builder()->addons_manager->is_active(),
			'notices'   => Array_Tools::to_array( $this->notices()->get_notices() ),
			'boxes'     => Array_Tools::to_array( $this->boxes()->get_boxes() ),
			'addons'    => apply_filters(
				'jfb-addons-page/page-localize-data',
				array(
					'licenseMode' => false,
					'licenseKey'  => '',
					'licenseList' => array(),
					'themeInfo'   => jet_form_builder()->addons_manager->get_theme_info(),
				)
			),
		);
	}

	public function assets() {
		wp_enqueue_style( Pages_Manager::STYLE_ADMIN );
		wp_enqueue_script( Pages_Manager::SCRIPT_VUEX_PACKAGE );

		parent::assets();
	}
}
