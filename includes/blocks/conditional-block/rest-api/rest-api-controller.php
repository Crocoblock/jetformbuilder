<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Rest_Api;


use Jet_Form_Builder\Rest_Api\Rest_Api_Controller_Base;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;

class Rest_Api_Controller extends Rest_Api_Controller_Base {

	/**
	 * @return Rest_Api_Endpoint_Base[]
	 */
	public function routes(): array {
		return array(
			new Add_Render_State_Endpoint_Option(),
		);
	}
}