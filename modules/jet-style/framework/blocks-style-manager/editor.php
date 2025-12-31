<?php
namespace Crocoblock\Blocks_Style;

class Editor {

	use Path_Url_Trait;

	/**
	 * Is editor initialized
	 *
	 * @var boolean
	 */
	protected $inited = false;

	/**
	 * Editor instance
	 *
	 * @var object
	 */
	protected static $instance = null;

	protected $defaults = array();

	/**
	 * Get instance of the class
	 *
	 * @return Editor
	 */
	public static function instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Initialize editor
	 *
	 * @return void
	 */
	public function init() {

		if ( $this->inited ) {
			return;
		}

		$this->inited = true;
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ), -10 );
	}

	/**
	 * Enqueue editor assets
	 *
	 * @return void
	 */
	public function editor_assets() {

		$asset_file = $this->get_path( 'assets/build/editor.asset.php' );
		$js_file    = $this->get_path( 'assets/build/editor.js' );
		$js_url     = $this->get_url( 'assets/build/editor.js' );

		if ( ! file_exists( $js_file ) || ! file_exists( $asset_file ) ) {
			return;
		}

		$asset = include $asset_file;

		wp_enqueue_script(
			'crocoblock-blocks-style-editor',
			$js_url,
			$asset['dependencies'],
			$asset['version'],
			true
		);

		$fonts_manager_url = esc_url( admin_url( 'site-editor.php?p=/styles&section=/typography' ) );
		$settings = wp_get_global_settings();
		$fonts = [];

		if ( ! empty( $settings['typography']['fontFamilies'] ) ) {
			foreach ( $settings['typography']['fontFamilies'] as $fonts_set ) {
				if ( is_array( $fonts_set ) ) {
					foreach ( $fonts_set as $font ) {
						if ( ! empty( $font['name'] ) && ! empty( $font['fontFamily'] ) ) {
							$fonts[] = [
								'value' => $font['fontFamily'],
								'label' => $font['name'],
							];
						}
					}
				}
			}
		}

		/**
		 * Note!
		 *
		 * get_blocks_supports() always must be called before get_block_defaults()
		 * because it internally calls extract_children(),
		 * which extract also defaults of these children.
		 */
		$supports = $this->get_blocks_supports();
		$defaults = $this->get_block_defaults();

		wp_localize_script(
			'crocoblock-blocks-style-editor',
			'crocoStyleEditorData',
			array(
				'blocks_supports'   => $supports,
				'support_name'      => Registry::instance()->get_support_name(),
				'defaults'          => $defaults,
				'class_prefix'      => 'cb-',
				'fonts_manager_url' => $fonts_manager_url,
				'fonts'             => $fonts,
			)
		);

		$rtl_suffix = is_rtl() ? '-rtl' : '';

		wp_enqueue_style(
			'crocoblock-blocks-style-editor',
			$this->get_url( 'assets/build/editor' . $rtl_suffix . '.css' ),
			array(),
			$asset['version']
		);
	}

	/**
	 * Get blocks supports
	 *
	 * @return array
	 */
	public function get_blocks_supports() {

		$result = array();
		$blocks = Registry::instance()->get_blocks();

		foreach ( $blocks as $block ) {

			$this->defaults[ $block->get_block_name() ] = $block->get_defaults();

			$result[ $block->get_block_name() ] = $this->extract_children(
				$block->get_controls_stack()
			);
		}

		return $result;
	}

	public function get_block_defaults() {

		$result = array();
		$blocks = Registry::instance()->get_blocks();

		foreach ( $blocks as $block ) {
			$result[ $block->get_block_name() ] = $block->get_defaults();
		}

		return $result;
	}

	/**
	 * Recursively convert children prop of ech control (if exists)
	 * to indexed array instead of associative array to process in JS as array
	 * and not as object, because we can't keep order of object properties in JS
	 * (they always be sorted alphabetically).
	 *
	 * @param array $controls Controls stack.
	 * @return array
	 */
	public function extract_children( array $controls = array() ) {

		$result = array();

		foreach ( $controls as $control ) {

			if ( ! isset( $control['children'] ) ) {
				$result[] = $control;
				continue;
			}

			$children = $this->extract_children( $control['children'] );

			if ( ! empty( $children ) ) {
				$control['children'] = array_values( $children );
			}

			$result[] = $control;
		}

		return $result;
	}
}
