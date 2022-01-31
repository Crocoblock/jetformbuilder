<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record;


use Jet_Form_Builder\Actions\Methods\Form_Record\Rest_Endpoints\Delete_Form_Record_Endpoint;
use Jet_Form_Builder\Rest_Api\Rest_Api_Controller_Base;

class Records_Rest_Controller extends Rest_Api_Controller_Base {

	/**
	 * @inheritDoc
	 */
	public function routes(): array {
		return array(
			new Delete_Form_Record_Endpoint()
		);
	}
}