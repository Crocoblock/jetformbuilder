<?php


namespace Jet_Form_Builder\Admin\Pages;

use Jet_Form_Builder\Actions\Methods\Form_Record\Table_Views\Records_Table_View;
use Jet_Form_Builder\Admin\Single_Pages\Single_Form_Record_Page;

class Form_Records extends Base_Page {

	const SLUG = 'jfb-records';

	public function slug(): string {
		return self::SLUG;
	}

	public function title(): string {
		return __( 'Form Records', 'jet-form-builder' );
	}

	protected function single_page(): string {
		return Single_Form_Record_Page::class;
	}

	public function page_config(): array {
		return ( new Records_Table_View() )->load_view();
	}

	public function assets() {
		wp_enqueue_script( 'jet-form-builder-admin-vuex-package' );

		parent::assets();
	}
}
