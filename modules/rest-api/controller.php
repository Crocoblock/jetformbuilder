<?php


namespace JFB_Modules\Rest_Api;

use JFB_Components\Rest_Api\Rest_Api_Controller_Base;
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

	public function routes(): array {
		return array(
			new Get_Form_Fields(),
			new Install_Migrations_Endpoint(),
		);
	}
}
