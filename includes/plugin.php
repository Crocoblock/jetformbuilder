<?php

namespace Jet_Form_Builder;

// If this file is called directly, abort.
use Jet_Form_Builder\Actions\Manager as ActionsManager;
use Jet_Form_Builder\Admin\Pages\Pages_Manager;
use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Blocks\Conditional_Block\Render_State;
use Jet_Form_Builder\Blocks\Dynamic_Value;
use Jet_Form_Builder\Blocks\Manager as BlocksManager;
use Jet_Form_Builder\Blocks\Validation;
use Jet_Form_Builder\Classes\Regexp_Tools;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Compatibility\Deprecated;
use Jet_Form_Builder\Compatibility\Elementor\Elementor;
use Jet_Form_Builder\Compatibility\Jet_Appointment\Jet_Appointment;
use Jet_Form_Builder\Compatibility\Jet_Booking\Jet_Booking;
use Jet_Form_Builder\Compatibility\Jet_Engine\Jet_Engine;
use Jet_Form_Builder\Compatibility\Woocommerce\Woocommerce;
use Jet_Form_Builder\Form_Actions\Form_Actions_Manager;
use Jet_Form_Builder\Form_Messages;
use Jet_Form_Builder\Form_Patterns\Manager as PatternsManager;
use Jet_Form_Builder\Framework\CX_Loader;
use Jet_Form_Builder\Gateways\Gateway_Manager;
use Jet_Form_Builder\Integrations\Active_Campaign\Active_Campaign;
use Jet_Form_Builder\Integrations\Forms_Captcha;
use Jet_Form_Builder\Addons\Manager as AddonsManager;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_It;
use Jet_Form_Builder\Modules\Modules_Controller;
use Jet_Form_Builder\Presets\Preset_Manager;
use Jet_Form_Builder\Wp_Cli\Wp_Cli_Manager;
use Jet_Form_Builder\Migrations;
use Jet_Form_Builder\Compatibility\Wp_Experiments\Wp_Experiments;

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
 * @property AddonsManager $addons_manager
 * @property \Jet_Admin_Bar $admin_bar
 * @property Form_Messages\Msg_Router $msg_router
 * @property Regexp_Tools $regexp
 * @property Wp_Experiments $wp_experiments
 * @property Blocks\Block_Sanitizer_Manager $blocks_sanitizer
 *
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
	public $allow_gateways;
	public $framework;
	public $addons_manager;
	public $admin_bar;
	public $msg_router;
	public $honeypot;
	public $wp_experiments;
	public $regexp;
	public $blocks_sanitizer;

	private $modules_controller;

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

		/**
		 * Compatibility & Integrations
		 */
		Woocommerce::register();
		Jet_Engine::register();
		Active_Campaign::register();
		Elementor::register();
		Jet_Appointment::register();
		Jet_Booking::register();
		new Deprecated();

		$this->admin_bar        = \Jet_Admin_Bar::get_instance();
		$this->msg_router       = new Form_Messages\Msg_Router();
		$this->post_type        = new Post_Type();
		$this->blocks           = new Blocks\Manager();
		$this->actions          = new Actions\Manager();
		$this->form             = new Form_Manager();
		$this->form_handler     = new Form_Handler();
		$this->captcha          = new Forms_Captcha();
		$this->addons_manager   = new AddonsManager();
		$this->wp_experiments   = new Wp_Experiments();
		$this->regexp           = new Regexp_Tools();
		$this->blocks_sanitizer = new Blocks\Block_Sanitizer_Manager();

		/**
		 * Modules & components
		 */
		Dev_Mode\Manager::instance();
		File_Upload::instance();
		Validation::instance();
		Render_State::instance();
		new Dynamic_Value();

		/**
		 * REST API
		 */
		( new Migrations\Rest_Api\Controller() )->rest_api_init();
		( new Blocks\Conditional_Block\Rest_Api\Rest_Api_Controller() )->rest_api_init();
		( new Blocks\Ssr_Validation\Rest_Controller() )->rest_api_init();

		if ( is_admin() ) {
			Preset_Manager::instance();

			$this->editor = new Admin\Editor();
			Pages_Manager::instance()->set_up();

			new Form_Actions_Manager();
			new PatternsManager();
		} else {
			$this->form_handler->call_form();
		}
	}

	public function init_framework() {
		require $this->plugin_dir( 'framework/loader.php' );

		$this->framework = new CX_Loader(
			array(
				$this->plugin_dir( 'framework/vue-ui/cherry-x-vue-ui.php' ),
				$this->plugin_dir( 'framework/admin-bar/jet-admin-bar.php' ),
			)
		);
	}

	public function maybe_enable_gateways() {
		Tab_Handler_Manager::instance()->tab( 'payments-gateways' )->save_global_options();
		$gateways = Tab_Handler_Manager::instance()->tab( 'payments-gateways' )->get_global_options();

		if ( isset( $gateways['enable_test_mode'] ) ) {
			add_filter(
				'jet-form-builder/gateways/paypal/sandbox-mode',
				function () use ( $gateways ) {
					return $gateways['enable_test_mode'];
				}
			);
		}

		if ( isset( $gateways['use_gateways'] ) ) {
			$this->allow_gateways = $gateways['use_gateways'];
		}

		Gateway_Manager::instance()->set_up();
	}

	/**
	 * Loads the translation files.
	 *
	 * @return void
	 * @since 1.0.0
	 * @access public
	 */
	public function init_lang() {
		load_plugin_textdomain(
			'jet-form-builder',
			false,
			dirname( plugin_basename( JET_FORM_BUILDER__FILE__ ) ) . '/languages'
		);
	}

	/**
	 * Returns url to file or dir inside plugin folder
	 *
	 * @param string $path Path inside plugin dir.
	 *
	 * @return string
	 */
	public function plugin_url( string $path = '' ): string {
		$path = str_replace( '{min}', Tools::get_suffix(), $path );

		return JET_FORM_BUILDER_URL . $path;
	}

	public function plugin_dir( string $path = '' ): string {
		return JET_FORM_BUILDER_PATH . $path;
	}

	/**
	 * Returns plugin version
	 */
	public function get_version(): string {
		return JET_FORM_BUILDER_VERSION;
	}

	/**
	 * Plugin constructor.
	 */
	private function __construct() {

		$this->register_autoloader();
		$this->init_lang();

		add_action(
			'after_setup_theme',
			function () {
				do_action( 'jet-form-builder/before-init' );

				$this->init_components();

				do_action( 'jet-form-builder/after-init' );
			},
			0
		);

		$this->init_framework();
		Wp_Cli_Manager::register();
	}

	public function get_modules(): Modules_Controller {
		if ( is_null( $this->modules_controller ) ) {
			$this->modules_controller = new Modules_Controller();
		}

		return $this->modules_controller;
	}

	/**
	 * @param string $name_or_class
	 *
	 * @return Base_Module_It
	 * @throws Exceptions\Repository_Exception
	 */
	public function module( string $name_or_class ): Base_Module_It {
		return $this->get_modules()->module( $name_or_class );
	}

	public function has_module( string $name_or_class ): bool {
		return $this->get_modules()->has_module( $name_or_class );
	}

}

Plugin::instance()->get_modules()->init_hooks();
