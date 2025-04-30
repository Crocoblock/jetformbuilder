<?php

namespace JFB_Modules\User_Journey;

use JFB_Modules\User_Journey\Rest_Endpoints;
use JFB_Components\Rest_Api\Rest_Api_Controller_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class User_Journey_Rest_Controller extends Rest_Api_Controller_Base {

	/**
	 * @inheritDoc
	 */
	public function routes(): array {
		return array(
			new Rest_Endpoints\Fetch_User_Journey_Box_Endpoint(),
		);
	}
}
