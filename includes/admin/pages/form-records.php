<?php


namespace Jet_Form_Builder\Admin\Pages;


use Jet_Form_Builder\Actions\Methods\Form_Record\Table_Views\Records_Table_View;

class Form_Records extends Base_Page {

	public function slug(): string {
		return 'jfb-records';
	}

	public function title(): string {
		return __( 'Form Records', 'jet-form-builder' );
	}

	public function page_config(): array {
		return ( new Records_Table_View )->load_view();
	}

	public function assets() {
		wp_enqueue_script( 'jet-form-builder-admin-vuex-package' );

		parent::assets();
	}
}