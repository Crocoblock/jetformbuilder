<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\Pages;

use Jet_Form_Builder\Admin\Single_Pages\Base_Single_Page;
use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\Meta_Boxes;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Containers;

class Single_Form_Record_Page extends Base_Single_Page {

	public function parent_slug(): string {
		return Form_Records::SLUG;
	}

	public function title(): string {
		return __( 'Form Record', 'jet-form-builder' );
	}

	public function meta_containers(): array {
		return array(
			new Meta_Containers\Normal_Meta_Container(
				new Meta_Boxes\Form_Record_General_Box()
			),
			new Meta_Containers\Side_Meta_Container(
				new Meta_Boxes\Form_Record_Side_Box()
			),
		);
	}

	public function assets() {
		wp_enqueue_script( 'jet-form-builder-admin-vuex-package' );

		parent::assets();
	}
}
