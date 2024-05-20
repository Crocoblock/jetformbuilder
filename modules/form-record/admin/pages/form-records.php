<?php


namespace JFB_Modules\Form_Record\Admin\Pages;

use Jet_Form_Builder\Admin\Pages\interfaces\Page_Script_Declaration_Interface;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Form_Record\Admin\Pages\Traits\Form_Records_Pages_Trait;
use JFB_Modules\Form_Record\Admin\Table_Views\Records_Table_View;
use Jet_Form_Builder\Admin\Pages\Base_Page;
use Jet_Form_Builder\Admin\Pages\Pages_Manager;
use JFB_Modules\Form_Record\Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Form_Records extends Base_Page implements Page_Script_Declaration_Interface {

	use Form_Records_Pages_Trait;

	const SLUG = 'jfb-records';

	public function slug(): string {
		return self::SLUG;
	}

	public function title(): string {
		return __( 'Form Records', 'jet-form-builder' );
	}

	public function page_config(): array {
		return ( new Records_Table_View() )->load_view();
	}

	public function assets() {
		wp_enqueue_style( Pages_Manager::STYLE_ADMIN );
		wp_enqueue_script( Pages_Manager::SCRIPT_VUEX_PACKAGE );

		parent::assets();
	}

	/**
	 * @return void
	 * @throws Repository_Exception
	 */
	public function register_scripts() {
		/** @var Module $module */
		/** @noinspection PhpUnhandledExceptionInspection */
		$module       = jet_form_builder()->module( 'form-record' );
		$script_asset = require_once $module->get_dir(
			'assets/build/admin/pages/jfb-records.asset.php'
		);

		wp_register_script(
			$this->slug(),
			$this->base_script_url(),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}
}
