<?php


namespace JFB_Modules\Form_Record\Admin\Pages;

use Jet_Form_Builder\Admin\Pages\interfaces\Page_Script_Declaration_Interface;
use Jet_Form_Builder\Admin\Pages\Pages_Manager;
use Jet_Form_Builder\Admin\Single_Pages\Base_Single_Page;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Containers;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Components\Module\Module_Tools;
use JFB_Modules\Form_Record\Admin\Meta_Boxes;
use JFB_Modules\Form_Record\Admin\Pages\Traits\Form_Records_Pages_Trait;
use JFB_Modules\Form_Record\Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Single_Form_Record_Print_Page extends Base_Single_Page implements Page_Script_Declaration_Interface {

	use Form_Records_Pages_Trait;

	public function parent_slug(): string {
		return Form_Records::SLUG;
	}

	public function slug(): string {
		return 'record-print';
	}

	public function title(): string {
		return __( 'JetFormBuilder Form Record', 'jet-form-builder' );
	}

	public function meta_containers(): array {
		return array(
			new Meta_Containers\Normal_Meta_Container(
				new Meta_Boxes\Form_Record_Print_Fields_Box()
			),
			new Meta_Containers\Side_Meta_Container(
				new Meta_Boxes\Form_Record_Print_Values_Box()
			),
		);
	}

	public function assets() {
		wp_enqueue_script( Pages_Manager::SCRIPT_VUEX_PACKAGE );
		wp_enqueue_style( Pages_Manager::STYLE_DASHICONS );

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
			'assets/build/admin/pages/record-print.asset.php'
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
