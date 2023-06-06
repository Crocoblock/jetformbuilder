<?php

namespace Jet_Form_Builder;

// If this file is called directly, abort.
use Jet_Form_Builder\Actions\Manager as ActionsManager;
use Jet_Form_Builder\Admin\Pages\Pages_Manager;
use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Blocks\Conditional_Block\Render_State;
use Jet_Form_Builder\Blocks\Dynamic_Value;
use Jet_Form_Builder\Blocks\Validation;
use Jet_Form_Builder\Classes\Regexp_Tools;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Form_Actions\Form_Actions_Manager;
use Jet_Form_Builder\Form_Messages;
use Jet_Form_Builder\Form_Patterns\Manager as PatternsManager;
use Jet_Form_Builder\Framework\CX_Loader;
use Jet_Form_Builder\Gateways\Gateway_Manager;
use Jet_Form_Builder\Integrations\Active_Campaign\Active_Campaign;
use Jet_Form_Builder\Addons\Manager as AddonsManager;
use JFB_Compatibility\Compatibility_Controller;
use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Modules\Modules_Controller;
use Jet_Form_Builder\Presets\Preset_Manager;
use Jet_Form_Builder\Wp_Cli\Wp_Cli_Manager;
use Jet_Form_Builder\Migrations;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @property Post_Type $post_type
 * @property ActionsManager $actions
 * @property Form_Manager $form
 * @property Form_Handler $form_handler
 * @property Admin\Editor $editor
 * @property AddonsManager $addons_manager
 * @property \Jet_Admin_Bar $admin_bar
 * @property Form_Messages\Msg_Router $msg_router
 * @property Regexp_Tools $regexp
 *
 * Class Plugin
 * @package Jet_Form_Builder
 */
class Plugin {

	public $post_type;
	public $actions;
	public $form;
	public $form_handler;
	public $editor;
	public $framework;
	public $addons_manager;
	public $admin_bar;
	public $msg_router;
	public $regexp;

	private $modules_controller;
	private $compat_controller;

	public static $instance;

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

	/**
	 * Initialize plugin parts
	 *
	 * @return void
	 */
	public function init_components() {
		$this->get_modules()->rep_install();
		$this->get_compat()->rep_install();

		$this->get_modules()->init_hooks();
		$this->get_compat()->init_hooks();

		$this->admin_bar      = \Jet_Admin_Bar::get_instance();
		$this->msg_router     = new Form_Messages\Msg_Router();
		$this->post_type      = new Post_Type();
		$this->actions        = new Actions\Manager();
		$this->form           = new Form_Manager();
		$this->form_handler   = new Form_Handler();
		$this->addons_manager = new AddonsManager();
		$this->regexp         = new Regexp_Tools();

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
	 * @param string $name_or_class
	 *
	 * @return Base_Module_It|Base_Module_Handle_It|Base_Module_Url_It|Base_Module_Dir_It|Base_Module_After_Install_It
	 * @throws Exceptions\Repository_Exception
	 */
	public function module( string $name_or_class ): Base_Module_It {
		return $this->get_modules()->module( $name_or_class );
	}

	public function has_module( string $name_or_class ): bool {
		return $this->get_modules()->has_module( $name_or_class );
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
	 * @return Base_Module_It|Base_Module_Handle_It|Base_Module_Url_It|Base_Module_Dir_It|Base_Module_After_Install_It
	 * @throws Exceptions\Repository_Exception
	 */
	public function compat( string $name_or_class ): Base_Module_It {
		return $this->get_compat()->module( $name_or_class );
	}

	public function has_compat( string $name_or_class ): bool {
		return $this->get_compat()->has_module( $name_or_class );
	}

	public function get_compat(): Compatibility_Controller {
		if ( is_null( $this->compat_controller ) ) {
			$this->compat_controller = new Compatibility_Controller();
		}

		return $this->compat_controller;
	}

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
	 * Backward compatibility to deprecated properties
	 *
	 * @param $name
	 *
	 * @return mixed
	 */
	public function __get( $name ) {
		switch ( $name ) {
			case 'blocks':
				try {
					return jet_form_builder()->module( 'blocks' );
				} catch ( Repository_Exception $exception ) {
					return null;
				}
			case 'allow_gateways':
				return jet_form_builder()->has_module( 'gateways' );
		}

		return null;
	}

}

Plugin::instance();
