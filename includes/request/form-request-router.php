<?php


namespace Jet_Form_Builder\Request;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Form_Request_Router extends Request_Router {

	public function get_hook_name(): string {
		return jet_fb_handler()->hook_key;
	}

	public function get_hook_value(): string {
		return jet_fb_handler()->hook_val;
	}
}
