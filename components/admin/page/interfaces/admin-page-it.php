<?php


namespace JFB_Components\Admin\Page\Interfaces;

use JFB_Components\Repository\Repository_Item_Instance_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Admin_Page_It extends Repository_Item_Instance_Trait {

	/**
	 * Page slug
	 */
	public function slug(): string;

	/**
	 * Page render function
	 */
	public function render_page();

	/**
	 * Returns current page url
	 *
	 * @param array $query_args
	 *
	 * @return string
	 */
	public function get_url( $query_args = array() ): string;

}
