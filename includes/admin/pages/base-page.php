<?php

namespace Jet_Form_Builder\Admin\Pages;

use Jet_Form_Builder\Classes\Repository_Item_Instance_Trait;
use Jet_Form_Builder\Plugin;

/**
 * Base dashboard page
 */
abstract class Base_Page implements Repository_Item_Instance_Trait {

	public function rep_item_id(): string {
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
		printf( '<div id="%s"></div>', esc_attr( 'jet-form-builder_page_' . $this->slug() ) );
	}

	/**
	 * Return page config array
	 */
	abstract public function page_config(): array;

	/**
	 * Page specific assets
	 */
	public function assets() {
		wp_enqueue_script( 'jet-form-builder-admin-package' );
		wp_enqueue_script( $this->slug() );
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
	 *
	 * @param array $query_args
	 *
	 * @return string
	 */
	public function get_url( $query_args = array() ): string {
		return add_query_arg(
			array_merge(
				array(
					'page'      => $this->slug(),
					'post_type' => jet_form_builder()->post_type->slug(),
				),
				$query_args
			),
			esc_url_raw( admin_url( 'edit.php' ) )
		);
	}

	public function base_script_url(): string {
		return Plugin::instance()->plugin_url( "assets/js/admin/pages/{$this->slug()}.js" );
	}

}
