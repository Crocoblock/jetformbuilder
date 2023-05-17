<?php


namespace JFB_Modules\Form_Record\Rest_Endpoints;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Mark_As_Not_Viewed_Record_Endpoint extends Mark_View_Record_Base_Endpoint {

	public static function get_rest_base() {
		return 'records-table/not-view';
	}

	protected function is_viewed(): bool {
		return false;
	}
}
