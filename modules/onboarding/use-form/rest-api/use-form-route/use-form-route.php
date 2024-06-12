<?php

namespace JFB_Modules\Onboarding\Use_Form\Rest_Api\Use_Form_Route;

use JFB_Components\Rest_Api\Route;

class Use_Form_Route extends Route {

	public function __construct() {
		$this->set_namespace( 'jet-form-builder/v1' );
		$this->set_route( 'use-form/(?P<formId>[\d]+)' );
		$this->add_endpoint( new Use_Form_Endpoint() );
	}

}
