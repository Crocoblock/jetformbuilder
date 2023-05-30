<?php


namespace JFB_Modules\Form_Record\Admin\Pages;

use JFB_Modules\Base_Module\Module_Tools;
use JFB_Modules\Form_Record\Admin\Table_Views\Records_Table_View;
use Jet_Form_Builder\Admin\Pages\Base_Page;
use Jet_Form_Builder\Admin\Pages\Pages_Manager;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Form_Records extends Base_Page {

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
		wp_enqueue_script( Pages_Manager::SCRIPT_VUEX_PACKAGE );

		parent::assets();
	}

	public function base_script_url(): string {
		return Module_Tools::get_url(
			'form-record',
			"assets/build/js/admin/pages/{$this->slug()}{min}.js"
		);
	}
}
