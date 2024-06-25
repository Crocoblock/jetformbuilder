<?php

namespace JFB_Modules\Actions_V2\Mailchimp\Rest_Api\Mailchimp;

use JFB_Components\Rest_Api\Route;

class Mailchimp_Route extends Route {

	public function __construct() {
		$this->set_namespace( 'jet-form-builder/v1' );
		$this->set_route( 'mailchimp' );
		$this->add_endpoint( new Mailchimp_Endpoint() );
	}

}
