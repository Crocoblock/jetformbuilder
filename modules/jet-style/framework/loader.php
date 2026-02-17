<?php
namespace JFB_Modules\Jet_Style\Framework;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Loader class
 */
class Loader {

	/**
	 * Key for object cache where are stored information about all modules in current environment
	 *
	 * @var string
	 */
	private $key = 'cherry_x_modules';

	protected $modules = array();
	protected $included_modules = array();

	/**
	 * Loads latest versions of all modules passed into modules array.
	 *
	 * Form can't load modules at the same time as rest of the Crocobolcok plugins
	 * to avoid backward comppatibility conflicts, so we use this loader to include modules
	 * wich are not loaded by other plugins, if module was already loaded - we're using it.
	 *
	 * @param array $modules List of loaded modules. Format:
	 * array(
	 *     get_theme_file_path( 'framework/modules/module-1/module-1.php' ),
	 *     get_theme_file_path( 'framework/modules/module-2/module-2.php' ),
	 *     get_theme_file_path( 'framework/modules/module-3/module-3.php' ),
	 * )
	 */
	public function __construct( array $modules = array() ) {
		$this->modules = $modules;
		$this->include_modules();
	}

	/**
	 * Include latest versions of modules in current loader instance.
	 * All available version preiously stored by 'store_versions' methods of each loader instance.
	 *
	 * @return boolean
	 */
	public function include_modules() {

		$modules_data = wp_cache_get( $this->key );

		foreach ( $this->modules as $module_path ) {

			// If module path not passed, skip it.
			if ( empty( $module_path ) || ! is_string( $module_path ) ) {
				continue;
			}

			// If module already included, skip it.
			if ( isset( $this->included_modules[ $module_path ] ) ) {
				continue;
			}

			$module_slug = basename( $module_path );

			if ( ! empty( $modules_data[ $module_slug ] ) ) {
				$module_path = $this->get_latest_version_path( $modules_data[ $module_slug ] );
			} else {

				$modules_data[ $module_slug ] = array(
					'1.0.0' => $module_path,
				);

				wp_cache_set( $this->key, $modules_data );

				require_once $module_path;
			}

			$module_dir = pathinfo( $module_path, PATHINFO_DIRNAME );
			$module_url = $this->get_module_url( $module_dir );
			$module_dir = trailingslashit( $module_dir );

			$this->included_modules[ $module_slug ] = array(
				'path' => $module_dir,
				'url'  => $module_url,
			);
		}
	}

	/**
	 * Get URL of module directory by it's path.
	 *
	 * @param string $dir Directory path.
	 * @return string Returns normalized path to module directory.
	 */
	public function get_module_url( $dir ) {
		$normalize_dir = wp_normalize_path( $dir );
		$plugin_dir    = wp_normalize_path( WP_PLUGIN_DIR );

		if ( 0 === strpos( $normalize_dir, $plugin_dir ) ) {
			$url = str_replace(
				'\\',
				'/',
				str_replace( $plugin_dir, plugins_url(), $normalize_dir )
			);
		} else {
			$url = str_replace(
				'\\',
				'/',
				str_replace( wp_normalize_path( WP_CONTENT_DIR ), content_url(), $normalize_dir )
			);
		}

		return apply_filters( 'cx_include_module_url', trailingslashit( $url ), $dir );
	}

	/**
	 * Get latest version of module by paths and versions.
	 *
	 * @param array $paths_by_versions Array of paths by versions.
	 * @return string|boolean Returns path to latest version of module or false if not found.
	 */
	public function get_latest_version_path( $paths_by_versions = array() ) {

		if ( empty( $paths_by_versions ) || ! is_array( $paths_by_versions ) ) {
			return false;
		}

		$latest_version = false;
		$highest_version = null;
		foreach ( $paths_by_versions as $version => $path ) {
			if ( null === $highest_version || version_compare( $version, $highest_version, '>' ) ) {
				$highest_version = $version;
				$latest_version  = $path;
			}
		}

		if ( ! file_exists( $latest_version ) ) {
			return false;
		}

		return $latest_version;
	}

	/**
	 * Retireve path and URL of included module directory
	 *
	 * @param  [type] $file [description]
	 * @return [type]       [description]
	 */
	public function get_included_module_data( $file ) {
		return isset( $this->included_modules[ $file ] ) ? $this->included_modules[ $file ] : false;
	}
}
