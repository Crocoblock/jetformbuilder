<?php


namespace JFB_Modules\Form_Record;

use JFB_Modules\Form_Record\Rest_Endpoints;
use JFB_Components\Rest_Api\Rest_Api_Controller_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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
			new Rest_Endpoints\Fetch_Records_Page_Endpoint(),
			new Rest_Endpoints\Fetch_Records_Fields_Box_Endpoint(),
			new Rest_Endpoints\Fetch_Records_Count_Endpoint(),
		);
	}
}
