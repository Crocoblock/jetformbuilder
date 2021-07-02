<?php

namespace Jet_Form_Builder;

// If this file is called directly, abort.
use Jet_Form_Builder\Actions\Manager as ActionsManager;
use Jet_Form_Builder\Admin\Pages\Pages_Manager;
use Jet_Form_Builder\Admin\Pages\Settings_Page;
use Jet_Form_Builder\Admin\Pages\Addons_Page;
use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Blocks\Manager as BlocksManager;
use Jet_Form_Builder\Form_Actions\Form_Actions_Manager;
use Jet_Form_Builder\Framework\CX_Loader;
use Jet_Form_Builder\Integrations\Forms_Captcha;
use Jet_Form_Builder\Integrations\Wc_Integration;
use Jet_Form_Builder\Widgets\Elementor_Controller;
use Jet_Form_Builder\License\Manager as LicenseManager;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @property Post_Type $post_type
 * @property BlocksManager $blocks
 * @property ActionsManager $actions
 * @property Form_Manager $form
 * @property Form_Handler $form_handler
 * @property Forms_Captcha $captcha
 * @property Admin\Editor $editor
 * @property LicenseManager $license_manager
 * @property Wc_Integration wc
 * Class Plugin
 * @package Jet_Form_Builder
 */
class Plugin {

	public $post_type;
	public $blocks;
	public $actions;
	public $form;
	public $form_handler;
	public $editor;
	public $captcha;
	public $dev_manager;

	public $is_activated_jet_sm;
	public $allow_gateways;
	public $framework;
	public $license_manager;
	public $wc;

	public static $instance;

	/**
	 * Instance.
	 *
	 * Ensures only one instance of the plugin class is loaded or can be loaded.
	 *
	 * @since 1.0.0
	 * @access public
	 * @static
	 */
	public static function instance() {

		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	public static function clear() {
		self::$instance = null;
	}

	/**
	 * Register autoloader.
	 */
	private function register_autoloader() {
		require JET_FORM_BUILDER_PATH . 'includes' . DIRECTORY_SEPARATOR . 'autoloader.php';
		Autoloader::run();
	}

	/**
	 * Initialize plugin parts
	 *
	 * @return void
	 */
	public function init_components() {
		$this->allow_gateways = apply_filters( 'jet-form-builder/allow-gateways', false );
		$this->maybe_enable_gateways();

		$this->post_type       = new Post_Type();
		$this->blocks          = new Blocks\Manager();
		$this->actions         = new Actions\Manager();
		$this->form            = new Form_Manager();
		$this->form_handler    = new Form_Handler();
		$this->captcha         = new Forms_Captcha();
		$this->license_manager = new LicenseManager();
		$this->wc              = new Wc_Integration();

		Dev_Mode\Manager::instance();
		File_Upload::instance();
		new Elementor_Controller();


		if ( is_admin() ) {
			$this->editor = new Admin\Editor();
			new Form_Actions_Manager();
			new Pages_Manager( array(
				new Settings_Page(),
				new Addons_Page()
			) );
		}
	}

	public function init_framework() {
		require $this->plugin_dir( 'framework/loader.php' );

		$this->framework = new CX_Loader( array(
			$this->plugin_dir( 'framework/vue-ui/cherry-x-vue-ui.php' ),
		) );
	}

	public function maybe_enable_gateways() {
		Tab_Handler_Manager::instance()->tab( 'payments-gateways' )->save_global_options();
		$gateways = Tab_Handler_Manager::instance()->tab( 'payments-gateways' )->get_global_options();

		if ( isset( $gateways['enable_test_mode'] ) ) {
			add_filter( 'jet-form-builder/gateways/paypal/sandbox-mode', function () use ( $gateways ) {
				return $gateways['enable_test_mode'];
			} );
		}

		if ( isset( $gateways['use_gateways'] ) ) {
			$this->allow_gateways = $gateways['use_gateways'];
		}
	}


	/**
	 * Returns url to file or dir inside plugin folder
	 *
	 * @param string $path Path inside plugin dir.
	 *
	 * @return string
	 */
	public function plugin_url( $path = null ) {
		return JET_FORM_BUILDER_URL . $path;
	}

	public function plugin_dir( $path = '' ) {
		return JET_FORM_BUILDER_PATH . $path;
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

		$this->init_framework();
	}

}

Plugin::instance();
