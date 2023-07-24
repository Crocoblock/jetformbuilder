<?php


namespace JFB_Modules\Active_Campaign;

use Jet_Form_Builder\Actions\Manager;
use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use JFB_Components\Rest_Api\Rest_Api_Controller_Base;
use JFB_Modules\Active_Campaign\Actions\Active_Campaign_Action;
use JFB_Modules\Active_Campaign\Rest_Api\Rest_Controller;
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

final class Module implements Base_Module_It,
	Base_Module_After_Install_It,
	Base_Module_Url_It,
	Base_Module_Handle_It {

	use Base_Module_Url_Trait;
	use Base_Module_Handle_Trait;

	private $rest;

	public function rep_item_id() {
		return 'active-campaign';
	}

	public function condition(): bool {
		return true;
	}

	public function on_install() {
		$this->rest = new Rest_Controller();

		// install tab handler for Settings page
		Tab_Handler_Manager::instance()->install( new Tabs\Active_Campaign_Handler() );
	}

	public function on_uninstall() {
		unset( $this->rest );
		// remove tab handler from Settings page
		Tab_Handler_Manager::instance()->uninstall( 'active-campaign-tab' );
	}

	public function init_hooks() {
		add_action( 'rest_api_init', array( $this->get_rest(), 'register_routes' ) );
		add_action( 'jet-form-builder/actions/register', array( $this, 'add_action' ) );
		add_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'editor_assets' ),
			0
		);
		add_action(
			'jet-fb/admin-pages/before-assets/jfb-settings',
			array( $this, 'admin_settings_assets' ),
			0
		);
	}

	public function remove_hooks() {
		remove_action( 'rest_api_init', array( $this->get_rest(), 'register_routes' ) );
		remove_action( 'jet-form-builder/actions/register', array( $this, 'add_action' ) );
		remove_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'editor_assets' ),
			0
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
		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/js/editor{min}.js' ),
			array(),
			jet_form_builder()->get_version(),
			true
		);
	}

	public function admin_settings_assets() {
		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/js/admin/jfb-settings{min}.js' ),
			array(),
			jet_form_builder()->get_version(),
			true
		);
	}

	public function get_rest(): Rest_Api_Controller_Base {
		return $this->rest;
	}
}
