<?php


namespace Jet_Form_Builder\Admin\Pages;


class Page_Config {

	private $config;

	/**
	 * Setup props
	 *
	 * @param Base_Page $page
	 */
	public function __construct( Base_Page $page ) {
		$this->config = apply_filters( "jet-form-builder/page-config/{$page->slug()}", $page->page_config() );
	}

	/**
	 * Check if config is not empty
	 */
	public function is_set(): bool {
		return ( ! empty( $this->config ) );
	}

	public function render_config(): void {
		if ( $this->is_set() ) {
			wp_localize_script( 'cx-vue', 'JetFBPageConfig', $this->config );
		}
	}

}