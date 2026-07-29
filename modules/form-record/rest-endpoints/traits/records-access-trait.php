<?php


namespace JFB_Modules\Form_Record\Rest_Endpoints\Traits;

use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Records_Access_Trait {

	public function check_permission(): bool {
		$capability = Tab_Handler_Manager::get_form_records_access_capability();

		return current_user_can( 'manage_options' ) || current_user_can( $capability );
	}

}
