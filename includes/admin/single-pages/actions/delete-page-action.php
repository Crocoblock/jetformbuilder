<?php


namespace Jet_Form_Builder\Admin\Single_Pages\Actions;


use Jet_Form_Builder\Admin\Buttons\Base_Vui_Button;

abstract class Delete_Page_Action extends Base_Rest_Page_Action {

	public function get_slug(): string {
		return 'delete';
	}

	public function get_position(): string {
		return self::PRIMARY;
	}

	public function get_payload(): array {
		return array(
			'redirect' => jet_fb_current_page()->get_parent()->get_url(),
		);
	}

	/**
	 * @return Base_Vui_Button
	 */
	public function get_button(): Base_Vui_Button {
		$button = parent::get_button();
		$button->set_label( __( 'Delete', 'jet-form-builder' ) );
		$button->set_size( $button::SIZE_MINI_X2 );
		$button->set_style( $button::STYLE_ACCENT_ERROR );

		return $button;
	}
}