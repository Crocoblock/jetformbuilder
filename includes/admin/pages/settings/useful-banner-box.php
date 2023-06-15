<?php


namespace Jet_Form_Builder\Admin\Pages\Settings;

use JFB_Components\Admin\Buttons\Base_Vui_Button as Button;
use JFB_Components\Admin\Vui_Boxes\Base_Vui_Banner_Box;
use Jet_Form_Builder\Classes\Http\Utm_Url;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Useful_Banner_Box extends Base_Vui_Banner_Box {

	public function get_label(): string {
		return __( 'Useful', 'jet-form-builder' );
	}

	public function get_title(): string {
		return __( 'Try more options with PRO addons from JetFormBuilder.', 'jet-form-builder' );
	}

	public function get_content(): string {
		return __( '15 Addons Available', 'jet-form-builder' );
	}

	public function get_slug(): string {
		return 'useful';
	}

	public function get_classes(): array {
		return array( 'light-1-preset' );
	}

	public function get_buttons(): array {
		$utm = new Utm_Url( 'jetformbuilder-dashboard/settings-try-more' );
		$utm->set_campaign( 'discover-addons' );

		return array(
			( new Button( 'useful-button' ) )
				->set_label( __( 'Discover addons', 'jet-form-builder' ) )
				->set_size( Button::SIZE_MINI )
				->set_style( Button::STYLE_ACCENT_BORDER )
				->set_url( $utm->add_query( JET_FORM_BUILDER_SITE . '/addons' ) ),
		);
	}
}
