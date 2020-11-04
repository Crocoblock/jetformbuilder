<?php
namespace Jet_Form_Builder;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Main file
 */
class Plugin {

	/**
	 * Instance.
	 *
	 * Holds the plugin instance.
	 *
	 * @since 1.0.0
	 * @access public
	 * @static
	 *
	 * @var Plugin
	 */
	public static $instance = null;

	public $post_type;
	public $blocks;
	public $actions;
	public $form;

	/**
	 * Instance.
	 *
	 * Ensures only one instance of the plugin class is loaded or can be loaded.
	 *
	 * @since 1.0.0
	 * @access public
	 * @static
	 *
	 * @return Plugin An instance of the class.
	 */
	public static function instance() {

		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Register autoloader.
	 */
	private function register_autoloader() {
		require JET_FORM_BUILDER_PATH . 'includes/autoloader.php';
		Autoloader::run();
	}

	/**
	 * Initialize plugin parts
	 *
	 * @return void
	 */
	public function init_components() {

		//$this->rest       = new Rest\Manager();
		//$this->db         = new DB();
		$this->post_type    = new Post_Type();
		$this->blocks       = new Blocks\Manager();
		$this->actions      = new Actions\Manager();
		$this->form         = new Form_Manager();



		if ( is_admin() ) {

			/*$this->dashboard = new Admin\Dashboard( array(
				new Admin\Pages\Forms_List(),
				new Admin\Pages\Edit(),
			) ); */

			$this->editor = new Admin\Editor();

		}

	}

	/*
	* Returns url to file or dir inside plugin folder
	*
	* @param  string $path Path inside plugin dir.
	* @return string
	*/
   public function plugin_url( $path = null ) {
	   return JET_FORM_BUILDER_URL . $path;
   }

   /**
	* Returns plugin version
    */
   public function get_version() {
	   return JET_FORM_BUILDER_VERSION;
   }

	/**
	 * Plugin constructor.
	 */
	private function __construct() {

		$this->register_autoloader();

		add_action( 'after_setup_theme', array( $this, 'init_components' ), 0 );
	}

}

Plugin::instance();
