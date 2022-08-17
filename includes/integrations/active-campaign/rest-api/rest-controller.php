<?php


namespace Jet_Form_Builder\Integrations\Active_Campaign\Rest_Api;


use Jet_Form_Builder\Rest_Api\Rest_Api_Controller_Base;

class Rest_Controller extends Rest_Api_Controller_Base {

	public function routes(): array {
		return array(
			new Retrieve_Lists(),
			new Retrieve_Custom_Fields(),
		);
	}
}