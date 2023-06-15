<?php


namespace JFB_Components\Admin\Page\Interfaces;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Admin\Pages\Actions\Base_Page_Action;

interface Admin_Dashboard_Page_It extends Admin_Page_It {

	/**
	 * Page title
	 */
	public function title(): string;

	/**
	 * Return page config array
	 */
	public function page_config(): array;

	/**
	 * Page specific assets
	 */
	public function assets();

	/**
	 * @return Base_Page_Action[]
	 */
	public function get_actions(): array;

}