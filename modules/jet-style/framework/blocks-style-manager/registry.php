<?php
/**
 * Blocks Styles registry
 */
namespace Crocoblock\Blocks_Style;

class Registry {

	use Path_Url_Trait;

	/**
	 * Registry instance
	 *
	 * @var object
	 */
	protected static $instance = null;

	/**
	 * Block styles registry
	 *
	 * @var array
	 */
	protected $registry = array();

	/**
	 * Handlers initialized state
	 *
	 * @var bool
	 */
	protected $handles_inited = false;

	/**
	 * Constructor
	 */
	public function __construct() {}

	/**
	 * Get instance of the class
	 *
	 * @return object
	 */
	public static function instance() {

		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}
	/**
	 * Register new block to supported blocks registry
	 *
	 * @param string $block_name Block name.
	 * @param array  $args Style-manager related arguments.
	 */
	public function register_block( $block_name, $args = array() ) {

		if ( ! class_exists( 'Crocoblock\Blocks_Style\Block' ) ) {
			require_once $this->get_path( 'style-cache.php' );
			require_once $this->get_path( 'style-engine.php' );
			require_once $this->get_path( 'style-inserter.php' );
			require_once $this->get_path( 'block.php' );
		}

		// Also, when first block is registered we need to load editor ans style render engine
		if ( ! $this->handles_inited ) {

			$this->handles_inited = true;

			if ( ! class_exists( '\Crocoblock\Blocks_Style\Editor' ) ) {
				require_once $this->get_path( 'editor.php' );
			}

			Editor::instance()->set_url( $this->url )->init();

			$this->register_global_block_support();
		}

		if ( ! isset( $this->registry[ $block_name ] ) ) {
			$this->registry[ $block_name ] = new Block( $block_name, $args );
		} else {
			$this->registry[ $block_name ]->set_args( $args );
		}



		return $this->registry[ $block_name ];
	}

	/**
	 * Get blocks support name
	 *
	 * @return string
	 */
	public function get_support_name() {
		return 'crocoblock_styles';
	}

	/**
	 * Register 'crocoblock_styles' for block supports.
	 *
	 * @return void
	 */
	public function register_global_block_support() {

		\WP_Block_Supports::get_instance()->register(
			$this->get_support_name(),
			array(
				'apply' => array( $this, 'apply_support' ),
			)
		);

		add_action( 'wp_loaded', array( $this, 'add_blocks_support' ), 999 );
	}

	/**
	 * Add 'crocoblock_styles' support for all registered blocks
	 *
	 * @return void
	 */
	public function add_blocks_support() {

		$blocks_names = array_keys( $this->registry );
		$block_type_registry = \WP_Block_Type_Registry::get_instance();

		foreach ( $blocks_names as $block_name ) {

			$block_type = $block_type_registry->get_registered( $block_name );

			if ( ! $block_type ) {
				continue;
			}

			if ( ! block_has_support( $block_type, array( $this->get_support_name() ) ) ) {

				if ( ! isset( $block_type->supports ) ) {
					$block_type->supports = array();
				}

				$block_type->supports[ $this->get_support_name() ] = true;

				if ( ! isset( $block_type->attributes ) ) {
					$block_type->attributes = array();
				}

				$block_type->attributes[ $this->get_support_name() ] = array(
					'type' => 'object',
				);
			}
		}
	}

	/**
	 * Get block instance by name
	 *
	 * @param string $block_name
	 * @return Block|false
	 */
	public function get_block( $block_name = '' ) {

		if ( empty( $block_name ) ) {
			return false;
		}

		if ( ! isset( $this->registry[ $block_name ] ) ) {
			return false;
		}

		return $this->registry[ $block_name ];
	}

	/**
	 * Apply block support
	 *
	 * @param \WP_Block_Type $block_type
	 * @param array $block_attributes
	 * @return array
	 */
	public function apply_support( $block_type, array $block_attributes ): array {
		return array();
	}

	/**
	 * Get all registered blocks
	 *
	 * @return array
	 */
	public function get_blocks() {
		return $this->registry;
	}
}
