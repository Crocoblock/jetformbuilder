<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record;


use Jet_Form_Builder\Actions\Methods\Form_Record\Rest_Endpoints;
use Jet_Form_Builder\Rest_Api\Rest_Api_Controller_Base;

class Records_Rest_Controller extends Rest_Api_Controller_Base {

	/**
	 * @inheritDoc
	 */
	public function routes(): array {
		return array(
			new Rest_Endpoints\Fetch_Filters_Endpoint(),
			new Rest_Endpoints\Delete_Form_Record_Endpoint(),
			new Rest_Endpoints\Mark_As_Not_Viewed_Record_Endpoint(),
			new Rest_Endpoints\Mark_As_Viewed_Record_Endpoint(),
		);
	}
}