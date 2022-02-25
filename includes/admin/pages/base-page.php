<?php

namespace Jet_Form_Builder\Admin\Pages;

use Jet_Form_Builder\Admin\Admin_Page_Interface;
use Jet_Form_Builder\Admin\Admin_Page_Trait;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Base_Single_Page;
use Jet_Form_Builder\Classes\Repository_Item_Instance_Trait;

/**
 * Base dashboard page
 */
abstract class Base_Page implements Repository_Item_Instance_Trait, Admin_Page_Interface {

	use Admin_Page_Trait;

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
