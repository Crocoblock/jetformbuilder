<?php

namespace JFB_Modules\Active_Campaign\Rest_Api\Active_Campaign;

use JFB_Components\Rest_Api\Route;

class Active_Campaign_Route extends Route {

	public function __construct() {
		$this->set_namespace( 'jet-form-builder/v1' );
		$this->set_route( 'active-campaign' );
		$this->add_endpoint( new Active_Campaign_Endpoint() );
	}

}
