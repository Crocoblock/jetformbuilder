<?php


namespace Jet_Form_Builder\Integrations\Re_Captcha_V3;


// If this file is called directly, abort.
use Jet_Form_Builder\Integrations\Abstract_Captcha\Base_Captcha;

if ( ! defined( 'WPINC' ) ) {
	die;
}

class Re_Captcha_V3 extends Base_Captcha {

	public function get_id(): string {
		return 'google';
	}

	public function get_title(): string {
		return __( '', 'jet-form-builder' );
	}

	public function on_save_options() {
		// TODO: Implement on_save_options() method.
	}

	public function on_load_options(): array {
		// TODO: Implement on_load_options() method.
	}
}