<?php


namespace JFB_Modules\Active_Campaign;

use Jet_Form_Builder\Actions\Manager;
use Jet_Form_Builder\Admin\Tabs_Handlers\Base_Handler;
use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Modules\Active_Campaign\Actions\Active_Campaign_Action;
use JFB_Modules\Active_Campaign\Rest_Api\Active_Campaign\Active_Campaign_Route;
use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;
use JFB_Modules\Active_Campaign\Admin\Tabs;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

final class Module implements
	Base_Module_It,
	Base_Module_After_Install_It,
	Base_Module_Url_It,
	Base_Module_Handle_It,
	Base_Module_Dir_It {

	use Base_Module_Url_Trait;
	use Base_Module_Handle_Trait;
	use Base_Module_Dir_Trait;

	public function rep_item_id() {
		return 'active-campaign';
	}

	public function condition(): bool {
		return true;
	}

	public function on_install() {
		// install tab handler for Settings page
		Tab_Handler_Manager::instance()->install( new Tabs\Active_Campaign_Handler() );
	}

	public function on_uninstall() {
		// remove tab handler from Settings page
		Tab_Handler_Manager::instance()->uninstall( 'active-campaign-tab' );
	}

	public function init_hooks() {
		add_action( 'rest_api_init', array( $this, 'register_routes' ) );
		add_action( 'jet-form-builder/actions/register', array( $this, 'add_action' ) );
		add_action(
			'jet-form-builder/editor-assets/after',
			array( $this, 'editor_assets' )
		);
		add_action(
			'jet-fb/admin-pages/before-assets/jfb-settings',
			array( $this, 'admin_settings_assets' ),
			0
		);
	}

	public function remove_hooks() {
		remove_action( 'rest_api_init', array( $this, 'register_routes' ) );
		remove_action( 'jet-form-builder/actions/register', array( $this, 'add_action' ) );
		remove_action(
			'jet-form-builder/editor-assets/after',
			array( $this, 'editor_assets' )
		);
		remove_action(
			'jet-fb/admin-pages/before-assets/jfb-settings',
			array( $this, 'admin_settings_assets' ),
			0
		);
	}

	public function add_action( Manager $manager ) {
		$manager->register_action_type( new Active_Campaign_Action() );
	}

	public function editor_assets() {
		$script_asset = require_once $this->get_dir( 'assets/build/editor.asset.php' );

		array_push(
			$script_asset['dependencies'],
			'jet-fb-components',
			'jet-fb-data',
			'jet-fb-actions-v2',
			'jet-fb-blocks-v2-to-actions-v2'
		);

		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/editor.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}

	public function admin_settings_assets() {
		$script_asset = require_once $this->get_dir( 'assets/build/admin/jfb-settings.asset.php' );

		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/admin/jfb-settings.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}

	public function register_routes() {
		$route = new Active_Campaign_Route();
		$route->register();

		register_setting(
			trim( Base_Handler::PREFIX, '_' ),
			Base_Handler::PREFIX . 'active-campaign-tab',
			array(
				'type'         => 'string',
				'show_in_rest' => true,
				'default'      => '{}',
			)
		);
	}
}
