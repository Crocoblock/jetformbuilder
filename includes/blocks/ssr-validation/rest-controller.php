<?php


namespace Jet_Form_Builder\Blocks\Ssr_Validation;

use Jet_Form_Builder\Rest_Api\Rest_Api_Controller_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Rest_Controller extends Rest_Api_Controller_Base {

	public function routes(): array {
		return array(
			new Rest_Validation_Endpoint(),
		);
	}
}