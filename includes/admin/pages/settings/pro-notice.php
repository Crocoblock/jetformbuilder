<?php


namespace Jet_Form_Builder\Admin\Pages\Settings;

use Jet_Form_Builder\Addons\Manager;
use Jet_Form_Builder\Admin\Buttons\Base_Vui_Button as Button;
use Jet_Form_Builder\Admin\Notices\Base_Notice;
use Jet_Form_Builder\Classes\Http\Utm_Url;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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
		$utm = new Utm_Url( 'wp-dashboard/jetformbuilder-notification' );
		$utm->set_campaign( 'check-pro-addons' );

		return array(
			( new Button( 'check' ) )
				->set_label( __( 'Check Pro Addons', 'jet-form-builder' ) )
				->set_size( Button::SIZE_MINI )
				->set_url( $utm->add_query( JET_FORM_BUILDER_SITE . '/addons/' ) ),
			( new Button( 'thanks' ) )
				->set_label( __( 'No, thanks', 'jet-form-builder' ) )
				->set_size( Button::SIZE_MINI )
				->set_style( Button::STYLE_ACCENT_BORDER ),
		);
	}
}
