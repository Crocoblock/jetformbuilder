<?php


namespace Jet_Form_Builder\Admin;

use Jet_Form_Builder\Admin\Pages\Actions\Base_Page_Action;
use Jet_Form_Builder\Plugin;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Admin_Page_Trait {

	protected $config = array();

	/**
	 * Page specific assets
	 */
	public function assets() {
		wp_enqueue_script( $this->slug() );
	}

	/**
	 * Page render function
	 */
	public function render_page() {
		printf( '<div id="%s"></div>', esc_attr( 'jet-form-builder_page_' . $this->slug() ) );
	}

	/**
	 * @return Base_Page_Action[]
	 */
	public function get_actions(): array {
		return array();
	}

	public function query_config(): array {
		if ( ! empty( $this->config ) ) {
			return $this->config;
		}
		$this->config = apply_filters(
			"jet-form-builder/page-config/{$this->slug()}",
			$this->page_config(),
			$this
		);

		return $this->config;
	}

	public function base_script_url(): string {
		return Plugin::instance()->plugin_url( "assets/js/admin/pages/{$this->slug()}{min}.js" );
	}

	public function render_config() {
		$config = $this->query_config();

		if ( ! empty( $config ) ) {
			wp_localize_script( 'cx-vue', 'JetFBPageConfig', $config );
		}
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
					'post_type' => jet_form_builder()->post_type->slug(),
				),
				$query_args
			),
			esc_url_raw( admin_url( 'edit.php' ) )
		);
	}

}
