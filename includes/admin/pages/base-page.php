<?php

namespace Jet_Form_Builder\Admin\Pages;

use Jet_Form_Builder\Classes\Repository_Item_Instance_Trait;
use Jet_Form_Builder\Plugin;

/**
 * Base dashboard page
 */
abstract class Base_Page implements Repository_Item_Instance_Trait {

	public function rep_item_id() {
		return $this->slug();
	}

	/**
	 * Page slug
	 */
	abstract public function slug(): string;

	/**
	 * Page title
	 */
	abstract public function title(): string;

	/**
	 * Page render function
	 */
	public function render() {
		printf( '<div id="%s"></div>', 'jet-form-builder_page_' . $this->slug() );
	}

	/**
	 * Return page config array
	 */
	abstract public function page_config(): array;

	/**
	 * Page specific assets
	 */
	public function assets() {
		wp_enqueue_script(
			$this->slug(),
			Plugin::instance()->plugin_url( 'assets/js/admin.js' ),
			array(),
			Plugin::instance()->get_version(),
			true
		);

		wp_set_script_translations(
			$this->slug(),
			'jet-form-builder',
			Plugin::instance()->plugin_dir( 'languages' )
		);
	}


	/**
	 * Enqueue script
	 *
	 * @param $handle string
	 * @param $file_path string
	 */
	public function enqueue_script( string $handle, string $file_path ) {
		wp_enqueue_script(
			$handle,
			Plugin::instance()->plugin_url( "assets/js/$file_path" ),
			array( 'wp-api-fetch' ),
			Plugin::instance()->get_version(),
			true
		);
	}

	/**
	 * Enqueue style
	 *
	 * @param string $handle
	 * @param string $file_path
	 */
	public function enqueue_style( string $handle, string $file_path ) {
		wp_enqueue_style(
			$handle,
			Plugin::instance()->plugin_url( "assets/css/$file_path" ),
			array(),
			Plugin::instance()->get_version()
		);
	}


	/**
	 * Returns current page url
	 */
	public function get_url(): string {
		return add_query_arg(
			array( 'page' => $this->slug() ),
			esc_url( admin_url( 'admin.php' ) )
		);
	}

}