<?php

namespace Jet_Form_Builder\Admin\Pages;

use Jet_Form_Builder\Plugin;

/**
 * Base dashboard page
 */
abstract class Base_Page {

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
	public function render(): void {
		printf( '<div id="%s"></div>', $this->slug() );
	}

	/**
	 * Return page config array
	 */
	abstract public function page_config(): array;

	/**
	 * Page specific assets
	 */
	public function assets(): void {
	}

	/**
	 * Page components templates
	 */
	public function vue_templates(): array {
		return array();
	}

	/**
	 * Render vue templates
	 */
	public function render_vue_templates(): void {
		foreach ( $this->vue_templates() as $template ) {
			if ( is_array( $template ) ) {
				$this->render_vue_template( $template['file'], $template['dir'] );
			} else {
				$this->render_vue_template( $template );
			}
		}
	}

	/**
	 * Render vue template
	 *
	 * @param string $template
	 * @param string|null $path
	 */
	public function render_vue_template( string $template, string $path = null ): void {

		if ( ! $path ) {
			$path = $this->slug();
		}

		$file = Plugin::instance()->plugin_dir() . "templates/admin/{$path}/{$template}.php";

		if ( ! is_readable( $file ) ) {
			return;
		}

		ob_start();
		include $file;
		$content = ob_get_clean();

		printf(
			'<script type="text/x-template" id="jet-fb-%1$s">%2$s</script>',
			$template,
			$content
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
	public function enqueue_style( string $handle, string $file_path ): void {
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