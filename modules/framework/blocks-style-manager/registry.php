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

		add_filter(
			'register_block_type_args',
			function( $block_args, $block_type ) use ( $block_name, $args ) {

				if ( $block_type !== $block_name ) {
					return $block_args;
				}

				if ( empty( $block_args['supports'] ) ) {
					$block_args['supports'] = array();
				}

				$block_args['supports'][ $this->get_support_name() ] = true;

				// Ensure attributes array exists.
				if ( empty( $block_args['attributes'] ) ) {
					$block_args['attributes'] = array();
				}

				if ( empty( $block_args['attributes'][ $this->get_support_name() ] ) ) {
					$defaults = array(
						'_uniqueClassName' => '',
					);

					$block_args['attributes'][ $this->get_support_name() ] = array(
						'type'    => 'object',
						'default' => $defaults,
					);
				}

				return $block_args;
			},
			10, 2
		);

		if ( ! class_exists( 'Crocoblock\Blocks_Style\Block' ) ) {
			require_once $this->get_path( 'style-cache.php' );
			require_once $this->get_path( 'style-engine.php' );
			require_once $this->get_path( 'block.php' );
		}

		// Also, when first block is registered we need to load editor ans style render engine
		if ( ! $this->handles_inited ) {

			$this->handles_inited = true;

			if ( ! class_exists( '\Crocoblock\Blocks_Style\Editor' ) ) {
				require_once $this->get_path( 'editor.php' );
			}

			Editor::instance()->set_url( $this->url )->init();
		}

		if ( ! isset( $this->registry[ $block_name ] ) ) {
			$this->registry[ $block_name ] = new Block( $block_name, $args );
		} else {
			$this->registry[ $block_name ]->set_attributes( $args );
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
