<?php
namespace Jet_Form_Builder\Admin\Pages;

/**
 * Base dashboard page
 */
abstract class Base {

	/**
	 * Page slug
	 * @return string
	 */
	abstract public function slug();

	/**
	 * Page title
	 * @return string
	 */
	abstract public function title();

	/**
	 * Page render funciton
	 * @return void
	 */
	abstract public function render();

	/**
	 * Returns menu title
	 *
	 * @return [type] [description]
	 */
	public function menu_title() {
		return $this->title();
	}

	/**
	 * Page specific assets
	 *
	 * @return [type] [description]
	 */
	public function assets() {
	}

	/**
	 * Returns current page url
	 *
	 * @return [type] [description]
	 */
	public function get_url( $args = array() ) {

		$query_args = array( 'page' => $this->slug() );

		if ( ! empty( $args ) ) {
			$query_args = array_merge( $query_args, $args );
		}

		return add_query_arg( $query_args, esc_url( admin_url( 'admin.php' ) ) );

	}

	/**
	 * Check if this page is hidden from menu or not
	 *
	 * @return boolean [description]
	 */
	public function is_hidden() {
		return false;
	}

}
