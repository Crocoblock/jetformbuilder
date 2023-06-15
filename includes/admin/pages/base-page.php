<?php

namespace Jet_Form_Builder\Admin\Pages;

use JFB_Components\Admin\Page\Interfaces\Admin_Dashboard_Page_It;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use JFB_Components\Admin\Page\Traits\Admin_Dashboard_Page_Trait;
use JFB_Components\Admin\Vui_Boxes\Traits\With_Boxes_Trait;
use JFB_Components\Repository\Repository_Item_Instance_Trait;
use Jet_Form_Builder\Classes\Theme\With_Theme_Info;
use JFB_Components\Admin\Notices\Traits\With_Notices_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Base dashboard page
 */
abstract class Base_Page implements
	Repository_Item_Instance_Trait,
	Admin_Dashboard_Page_It {

	use Admin_Dashboard_Page_Trait;
	use With_Notices_Trait;
	use With_Theme_Info;
	use With_Boxes_Trait;

	public function rep_item_id(): string {
		return $this->slug();
	}

	/**
	 * If it returns FALSE, this page is not registered
	 *
	 * @return bool
	 */
	public function is_active(): bool {
		return true;
	}

	/**
	 * @throws Not_Found_Page_Exception
	 */
	public function render() {
		Pages_Manager::instance()->get_current()->render_page();
	}

	/**
	 * Returns current page url
	 *
	 * @param array $query_args
	 *
	 * @return string
	 */
	public function get_url( $query_args = array() ): string {
		return $this->admin_url(
			array_merge(
				array( 'page' => $this->slug() ),
				$query_args
			)
		);
	}

}
