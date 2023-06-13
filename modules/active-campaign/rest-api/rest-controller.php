<?php


namespace JFB_Modules\Active_Campaign\Rest_Api;

use JFB_Components\Rest_Api\Rest_Api_Controller_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Rest_Controller extends Rest_Api_Controller_Base {

	public function routes(): array {
		return array(
			new Editor_Fetch_Endpoint(),
		);
	}
}
