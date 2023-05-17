<?php


namespace JFB_Modules\Captcha\Abstract_Captcha;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Captcha_Separate_Frontend_Script {

	public function register_frontend_scripts();

}