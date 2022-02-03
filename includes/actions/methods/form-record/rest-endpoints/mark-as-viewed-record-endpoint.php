<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Rest_Endpoints;


class Mark_As_Viewed_Record_Endpoint extends Mark_View_Record_Base_Endpoint {

	public static function get_rest_base() {
		return 'records-table/view';
	}

	protected function is_viewed(): bool {
		return true;
	}
}