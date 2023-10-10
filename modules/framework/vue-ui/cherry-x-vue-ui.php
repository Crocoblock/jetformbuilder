<?php
/**
 * Vue.js based Interface Builder module
 *
 * Version: 1.4.10
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

if ( ! class_exists( 'CX_Vue_UI' ) ) {

	/**
	 * Class Cherry Interface Builder.
	 *
	 * @since 1.0.0
	 */
	class CX_Vue_UI {

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
		 * Current instance templates path.
		 *
		 * @since 1.4.3
		 * @access protected
		 * @var srting.
		 */
		public static $templates_path;

		/**
		 * Module version
		 *
		 * @var string
		 */
		protected $version = '1.4.10';

		/**
		 * [$assets_enqueued description]
		 * @var boolean
		 */
		protected $assets_enqueued = false;

		/**
		 * CX_Vue_UI constructor.
		 *
		 * @since  1.0.0
		 * @access public
		 * @return void
		 */
		public function __construct( array $args = array() ) {

			$this->path = ! empty( $args['path'] ) ? $args['path'] : false;
			$this->url  = ! empty( $args['url'] ) ? $args['url'] : false;

			if ( ! $this->path || ! $this->url ) {
				wp_die(
					'CX_Vue_UI not initialized. Module URL and Path should be passed into constructor',
					'CX_Vue_UI Error'
				);
			}

			add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_assets' ) );

		}

		/**
		 * Enqueue builder assets
		 *
		 * @return void
		 */
		public function enqueue_assets() {

			if ( $this->assets_enqueued ) {
				return;
			}

			wp_enqueue_media();

			$suffix = '.min';

			if ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) {
				$suffix = '';
			}

			wp_register_script(
				'cx-vue',
				$this->url . 'assets/js/vue' . $suffix . '.js',
				array(),
				'2.6.11',
				true
			);

			wp_register_script(
				'cx-vue-components',
				$this->url . 'assets/js/cx-vue-ui-components.js',
				array(),
				$this->version,
				true
			);

			wp_enqueue_script(
				'cx-vue-ui',
				$this->url . 'assets/js/cx-vue-ui.js',
				array( 'cx-vue', 'cx-vue-components' ),
				$this->version,
				true
			);

			add_action( 'admin_footer', array( $this, 'print_templates' ), 0 );

			$this->assets_enqueued = true;

		}

		/**
		 * Enqueue builder assets
		 *
		 * @return void
		 */
		public function enqueue_assets_components() {

			if ( $this->assets_enqueued ) {
				return;
			}

			wp_enqueue_media();

			$suffix = '.min';

			if ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) {
				$suffix = '';
			}

			wp_enqueue_script(
				'cx-vue-ui-components',
				$this->url . 'assets/js/cx-vue-ui-components.js',
				array(),
				$this->version,
				true
			);

			add_action( 'admin_footer', array( $this, 'print_templates' ), 0 );

			$this->assets_enqueued = true;

		}

		/**
		 * Returns registered components list
		 *
		 * @return array
		 */
		public function components_list() {
			return apply_filters( 'cx-vue-ui/components-list', array(

				// Layout elements
				'title',
				'collapse',
				'component-wrapper',
				'button',
				'repeater',
				'repeater-item',
				'popup',
				'list-table',
				'list-table-heading',
				'list-table-item',
				'tabs',
				'tabs-panel',
				'pagination',
				'notice',

				// Form elements
				'input',
				'time',
				'textarea',
				'switcher',
				'iconpicker',
				'select',
				'f-select',
				'checkbox',
				'radio',
				'colorpicker',
				'wp-media',
				'dimensions',
			) );
		}

		/**
		 * Print components templates
		 *
		 * @return void
		 */
		public function print_templates() {

			$path        = $this->path . 'components/*.php';
			$whitelisted = $this->components_list();

			foreach ( glob( $path ) as $file ) {

				$slug = basename( $file, '.php' );

				if ( ! in_array( $slug, $whitelisted ) ) {
					continue;
				}

				ob_start();
				
				if ( self::$templates_path && file_exists( self::$templates_path . basename( $file ) ) ) {
					include self::$templates_path . basename( $file );
				} else {
					include $file;
				}
				
				$template = ob_get_clean();

				printf(
					'<script type="text/x-template" id="%2$s">%1$s</script>',
					$template,
					'cx-vui-' . $slug
				);

			}

		}

	}

}
