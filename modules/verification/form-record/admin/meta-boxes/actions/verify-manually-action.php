<?php


namespace JFB_Modules\Verification\Form_Record\Admin\Meta_Boxes\Actions;

use Jet_Form_Builder\Admin\Buttons\Base_Vui_Button;
use Jet_Form_Builder\Admin\Single_Pages\Actions\Base_Rest_Page_Action;
use Jet_Form_Builder\Admin\Single_Pages\Actions\Delete_Page_Action;
use JFB_Modules\Gateways\Rest_Api\Delete_Payment_Endpoint;
use JFB_Modules\Verification\Rest_Api\Endpoints\Verify_Manually;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Verify_Manually_Action extends Base_Rest_Page_Action {

	public function get_slug(): string {
		return 'verify';
	}

	public function get_rest_url(): string {
		return Verify_Manually::rest_url();
	}

	public function get_rest_methods(): string {
		return Verify_Manually::get_methods();
	}

	public function get_position(): string {
		return self::PRIMARY;
	}

	public function get_payload(): array {
		return array(
			'checked' => array(
				jet_fb_current_page()->get_id(),
			),
		);
	}

	/**
	 * @return Base_Vui_Button
	 */
	public function get_button(): Base_Vui_Button {
		$button = parent::get_button();
		$button->set_label( __( 'Verify', 'jet-form-builder' ) );
		$button->set_size( $button::SIZE_MINI_X2 );

		return $button;
	}
}
