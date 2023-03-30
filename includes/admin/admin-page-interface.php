<?php


namespace Jet_Form_Builder\Admin;

use Jet_Form_Builder\Admin\Pages\Actions\Base_Page_Action;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Admin_Page_Interface {

	/**
	 * Page slug
	 */
	public function slug(): string;

	/**
	 * Page title
	 */
	public function title(): string;

	/**
	 * Page render function
	 */
	public function render_page();

	/**
	 * Return page config array
	 */
	public function page_config(): array;

	/**
	 * Page specific assets
	 */
	public function assets();

	/**
	 * Returns current page url
	 *
	 * @param array $query_args
	 *
	 * @return string
	 */
	public function get_url( $query_args = array() ): string;

	/**
	 * @return Base_Page_Action[]
	 */
	public function get_actions(): array;

}
