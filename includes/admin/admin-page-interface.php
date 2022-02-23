<?php


namespace Jet_Form_Builder\Admin;


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

}