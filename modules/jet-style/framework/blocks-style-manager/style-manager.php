<?php
/**
 * Blocks Style Manager
 *
 * Version: 2.0.0
 */
namespace Crocoblock\Blocks_Style;

class Manager {

	/**
	 * Module directory path.
	 *
	 * @since 1.0.0
	 * @access protected
	 * @var srting.
	 */
	protected $path;

	/**
	 * Module directory URL.
	 *
	 * @since 1.0.0
	 * @access protected
	 * @var srting.
	 */
	protected $url;

	/**
	 * Module version
	 *
	 * @var string
	 */
	protected $version = '2.0.0';

	/**
	 * Constructor
	 *
	 * @param array $args Arguments.
	 */
	public function __construct( $args = array() ) {
		$this->path = $args['path'];
		$this->url  = $args['url'];
		require_once $this->path . 'path-url-trait.php';
	}

	/**
	 * Regsiter new block to supported blocks registry.
	 *
	 * Should be called before after init hook but wp_loaded hook with 999 priority.
	 *
	 * @since 1.0.0
	 * @access public
	 * @param string $block_name Block name.
	 * @param array  $args Style-manager related arguments.
	 * @return void
	 */
	public function register_block_support( $block_name = '', $args = array() ) {

		if ( ! $block_name ) {
			_doing_it_wrong(
				'Crocoblock\Blocks_Style\Manager::register_block_support',
				'Block name is required.',
				$this->version
			);

			return;
		}

		$this->ensure_block_registry();
		Registry::instance()->register_block( $block_name, $args );
	}

	/**
	 * Get proxy class instance.
	 *
	 * @param string $block_name
	 * @return Proxy|false
	 */
	public function get_proxy( $block_name = '' ) {

		$this->ensure_block_registry();
		$block = Registry::instance()->get_block( $block_name );

		if ( ! $block ) {
			return false;
		}

		if ( ! class_exists( '\Crocoblock\Blocks_Style\Proxy' ) ) {
			require_once $this->path . 'proxy.php';
		}

		return new Proxy( $block );
	}

	/**
	 * Get block instance by name.
	 *
	 * @param string $block_name
	 * @return Block|false
	 */
	public function get_block( $block_name = '' ) {
		$this->ensure_block_registry();
		return Registry::instance()->get_block( $block_name );
	}

	/**
	 * Allow to manually enqueue block editor assets
	 *
	 * @return void
	 */
	public function enqueue_editor_assets() {

		if ( ! class_exists( '\Crocoblock\Blocks_Style\Editor' ) ) {
			require_once $this->path . 'editor.php';
		}

		Editor::instance()
			->set_url( $this->url )
			->set_path( $this->path )
			->editor_assets();
	}

	/**
	 * Ensure block registry is initialized.
	 *
	 * @since 1.0.0
	 * @access protected
	 * @return void
	 */
	protected function ensure_block_registry() {
		if ( ! class_exists( '\Crocoblock\Blocks_Style\Registry' ) ) {
			require_once $this->path . 'registry.php';
			// Must be always called before registering the 1st block.
			Registry::instance()->set_path( $this->path )->set_url( $this->url );
		}
	}

}
