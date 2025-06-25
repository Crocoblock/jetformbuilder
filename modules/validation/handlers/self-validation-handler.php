<?php
namespace JFB_Modules\Validation\Handlers;

use JFB_Modules\Validation\Handlers\Validation_Handler;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Self_Validation_Handler {
	public function __construct() {
		add_action( 'init', array( $this, 'jet_fb_ssr_self_validation' ) );
	}
	public function jet_fb_ssr_self_validation() {
		if ( isset( $_GET['jet_fb_ssr_self_validation'] ) && '1' === $_GET['jet_fb_ssr_self_validation'] ) {
			nocache_headers();
			$body = $_GET;
			$result = Validation_Handler::validate( $body );
			wp_send_json( $result );
		}
	}
}
