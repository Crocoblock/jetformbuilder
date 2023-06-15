<?php


namespace JFB_Modules\Rest_Api;

use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_It;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

final class Module implements Base_Module_It, Base_Module_After_Install_It {

	private $controller;

	public function rep_item_id() {
		return 'rest-api';
	}

	public function condition(): bool {
		return true;
	}

	public function on_install() {
		$this->controller = new Controller();
	}

	public function on_uninstall() {
		unset( $this->controller );
	}

	public function init_hooks() {
		add_action( 'rest_api_init', array( $this->controller, 'register_routes' ) );
	}

	public function remove_hooks() {
		remove_action( 'rest_api_init', array( $this->controller, 'register_routes' ) );
	}
}