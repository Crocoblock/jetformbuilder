<?php


namespace JFB_Components\Admin\Page\Traits;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Action_Page_Trait {

	public function rep_item_id() {
		return $this->slug();
	}

	public function get_url( $query_args = array() ): string {
		return $this->admin_url(
			array_merge(
				array(
					'slug' => $this->slug(),
				),
				$query_args
			)
		);
	}

	/**
	 * Returns current page url
	 *
	 * @param array $query_args
	 *
	 * @return string
	 */
	public function admin_url( $query_args = array() ): string {
		return add_query_arg(
			array_merge(
				array(
					'action' => 'jfb',
				),
				$query_args
			),
			esc_url_raw( admin_url( 'admin.php' ) )
		);
	}

}
