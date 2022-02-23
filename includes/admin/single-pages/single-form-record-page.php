<?php


namespace Jet_Form_Builder\Admin\Single_Pages;


use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_View;
use Jet_Form_Builder\Admin\Admin_Page_Trait;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

class Single_Form_Record_Page extends Base_Single_Page {

	use Admin_Page_Trait;

	/**
	 * @return array
	 * @throws Not_Found_Page_Exception
	 */
	public function page_config(): array {
		try {
			return Record_View::findById( $this->id );
		} catch ( Query_Builder_Exception $exception ) {
			throw new Not_Found_Page_Exception( $exception, ...$exception->get_additional() );
		}
	}

	public function assets() {
		wp_enqueue_script( 'jet-form-builder-admin-vuex-package' );

		parent::assets();
	}
}