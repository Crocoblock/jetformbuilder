<?php


namespace Jet_Form_Builder\Gateways\Meta_Boxes\Actions;

use Jet_Form_Builder\Admin\Single_Pages\Actions\Delete_Page_Action;
use Jet_Form_Builder\Gateways\Rest_Api\Delete_Payment_Endpoint;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Delete_Payment_Action extends Delete_Page_Action {

	public function get_rest_url(): string {
		return Delete_Payment_Endpoint::dynamic_rest_url(
			array( 'id' => jet_fb_current_page()->get_id() )
		);
	}

	public function get_rest_methods(): string {
		return Delete_Payment_Endpoint::get_methods();
	}
}
