<?php


namespace JFB_Modules\Rest_Api;

use JFB_Components\Rest_Api\Rest_Api_Controller_Base;
use JFB_Components\Rest_Api\Rest_Api_Endpoint_Base;
use JFB_Modules\Rest_Api\Endpoints\Get_Form_Fields;
use JFB_Modules\Rest_Api\Endpoints\Install_Migrations_Endpoint;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Here would be global rest-api endpoints
 *
 * Class Controller
 *
 * @package JFB_Modules\Rest_Api
 */
class Controller extends Rest_Api_Controller_Base {

	protected $routes = array();

	public function __construct() {
		$this->routes = array(
			new Get_Form_Fields(),
			new Install_Migrations_Endpoint(),
		);
	}

	public function routes(): array {
		return $this->routes;
	}

	public function install( Rest_Api_Endpoint_Base $base ) {
		$this->routes[] = $base;
	}

	public function uninstall( Rest_Api_Endpoint_Base $base ) {
		$class_name = get_class( $base );

		foreach ( $this->routes as $index => $route ) {
			if ( ! is_a( $route, $class_name ) ) {
				continue;
			}
			unset( $this->routes[ $index ] );
		}

		$this->routes = array_values( $this->routes );
	}
}
