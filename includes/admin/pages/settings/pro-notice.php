<?php


namespace Jet_Form_Builder\Admin\Pages\Settings;

use Jet_Form_Builder\Admin\Buttons\Base_Vui_Button as Button;
use Jet_Form_Builder\Admin\Notices\Base_Notice;

class Pro_Notice extends Base_Notice {

	public function get_id(): string {
		return 'see-pro-addons';
	}

	public function get_message(): string {
		return __(
			'Expand your forms functionality with automate, calculate, integrations of payments gateways, 
		CRMs and email marketing. Try premium addons for JetFormBuilder plugin.',
			'jet-form-builder'
		);
	}

	public function get_buttons(): array {
		$author_slug = jet_fb_current_page()->theme()->author_slug();
		$license     = jet_form_builder()->addons_manager->get_slug();

		$addons_url = add_query_arg(
			array(
				'utm_source'   => rawurlencode( 'wp-dashboard/jetformbuilder-notification' ),
				'utm_medium'   => rawurlencode( "$license/$author_slug" ),
				'utm_campaign' => 'check-pro-addons',
			),
			JET_FORM_BUILDER_SITE . '/addons/'
		);

		return array(
			( new Button( 'check' ) )
				->set_label( __( 'Check Pro Addons', 'jet-form-builder' ) )
				->set_size( Button::SIZE_MINI )
				->set_url( $addons_url ),
			( new Button( 'thanks' ) )
				->set_label( __( 'No, thanks', 'jet-form-builder' ) )
				->set_size( Button::SIZE_MINI )
				->set_style( Button::STYLE_ACCENT_BORDER ),
		);
	}
}
