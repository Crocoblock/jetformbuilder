<?php

namespace JFB_Modules\Option_Field\Rest_Api;

use JFB_Components\Rest_Api\Rest_Api_Controller_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * REST API Controller for Option Field module.
 *
 * Registers all REST endpoints related to option fields and generators.
 */
class Rest_Api_Controller extends Rest_Api_Controller_Base {

	/**
	 * Returns array of endpoint instances to register.
	 *
	 * @return array
	 */
	public function routes(): array {
		return array(
			new Generator_Update_Endpoint(),
		);
	}
}
