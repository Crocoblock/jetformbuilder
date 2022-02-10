<?php

namespace Jet_Form_Builder\Admin\Pages;

use Jet_Form_Builder\Admin\Admin_Page;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Classes\Repository_Item_Instance_Trait;
use Jet_Form_Builder\Plugin;

/**
 * Base dashboard page
 */
abstract class Base_Page implements Repository_Item_Instance_Trait, Admin_Page {

	public function rep_item_id(): string {
		return $this->slug();
	}

	/**
	 * Page slug
	 */
	abstract public function slug(): string;

	/**
	 * Page render function
	 */
	public function render() {
		printf( '<div id="%s"></div>', esc_attr( 'jet-form-builder_page_' . $this->slug() ) );
	}

	/**
	 * Page specific assets
	 */
	public function assets() {
		wp_enqueue_script( $this->slug() );
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
	 * @return Base_Single_Page
	 * @throws Not_Found_Page_Exception
	 */
	public function single_page(): Base_Single_Page {
		throw new Not_Found_Page_Exception( static::class . ' does not have a single page' );
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
