<?php

namespace JFB_Modules\Actions_V2\Get_Response\Rest_Api\Get_Response;

use JFB_Components\Rest_Api\Route;

class Get_Response_Route extends Route {

	public function __construct() {
		$this->set_namespace( 'jet-form-builder/v1' );
		$this->set_route( 'get-response' );
		$this->add_endpoint( new Get_Response_Endpoint() );
	}

}
