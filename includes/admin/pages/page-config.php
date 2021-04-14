<?php


namespace Jet_Form_Builder\Admin\Pages;


class Page_Config {

	private $handle;
	private $config;

	/**
	 * Setup props
	 *
	 * @param Base_Page $page
	 */
	public function __construct( Base_Page $page ) {
		$this->config = apply_filters( 'jet-msg/admin/helpers/page-config/config', $page->page_config() );
	}

	/**
	 * Check if config is not empty
	 */
	public function is_set(): bool {
		return ( ! empty( $this->handle ) && ! empty( $this->config ) );
	}

	public function render_config(): void {
		if ( $this->is_set() ) {
			wp_localize_script( 'cx-vue', 'JetFBPageConfig', $this->config );
		}
	}

}