<?php


namespace JFB_Modules\Form_Record\Admin\Pages;

use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Pages\Pages_Manager;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Base_List_Box;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Base_Table_Box;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Containers\Base_Meta_Container;
use JFB_Modules\Form_Record\Admin\View_Columns\Form_Link_Column;
use JFB_Modules\Form_Record\Admin\View_Columns\Referrer_Link_Column;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Components\Admin\Page\Interfaces\Action_Page_It;
use JFB_Components\Admin\Page\Traits\Action_Page_Trait;
use JFB_Components\Admin\Print_Page\Footer;
use JFB_Components\Admin\Print_Page\Header;
use JFB_Modules\Form_Record\Admin\Meta_Boxes\Form_Record_Fields_Box;
use JFB_Modules\Form_Record\Admin\Meta_Boxes\Form_Record_Values_Box;
use JFB_Modules\Framework\Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Print_Page implements Action_Page_It {

	use Action_Page_Trait;

	/**
	 * @inheritDoc
	 */
	public function slug(): string {
		return 'record-print';
	}

	public function check_permission(): bool {
		return current_user_can( 'manage_options' );
	}

	public function render_page() {
		$page = new Single_Form_Record_Print_Page();

		Pages_Manager::instance()->set_current_page_raw( $page );
		Pages_Manager::instance()->single()->render_standalone();
	}

}
