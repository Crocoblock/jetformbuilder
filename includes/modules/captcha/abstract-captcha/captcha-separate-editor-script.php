<?php


namespace Jet_Form_Builder\Modules\Captcha\Abstract_Captcha;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Captcha_Separate_Editor_Script {

	public function enqueue_editor_script();

}