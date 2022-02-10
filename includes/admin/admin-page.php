<?php


namespace Jet_Form_Builder\Admin;


interface Admin_Page {

	/**
	 * Page title
	 */
	public function title(): string;

	/**
	 * Page render function
	 */
	public function render();

	/**
	 * Return page config array
	 */
	public function page_config(): array;

	/**
	 * Page specific assets
	 */
	public function assets();

	/**
	 * If it returns FALSE, this page is not registered
	 *
	 * @return bool
	 */
	public function is_active(): bool;

	/**
	 * Returns current page url
	 *
	 * @param array $query_args
	 *
	 * @return string
	 */
	public function get_url( $query_args = array() ): string;

}