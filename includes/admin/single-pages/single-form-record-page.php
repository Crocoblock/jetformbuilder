<?php


namespace Jet_Form_Builder\Admin\Single_Pages;


use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_View;
use Jet_Form_Builder\Admin\Admin_Page_Trait;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Form_Record_General_Box;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Form_Record_Side_Box;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Containers\Normal_Meta_Container;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Containers\Side_Meta_Container;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

class Single_Form_Record_Page extends Base_Single_Page {

	public function meta_containers(): array {
		return array(
			new Side_Meta_Container(
				new Form_Record_Side_Box()
			),
			new Normal_Meta_Container(
				new Form_Record_General_Box()
			),
		);
	}

	public function assets() {
		wp_enqueue_script( 'jet-form-builder-admin-vuex-package' );

		parent::assets();
	}
}