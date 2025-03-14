<?php
namespace JFB_Modules\Validation\Handlers;

use JFB_Modules\Validation\Handlers\Validation_Handler;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Ajax_Validation_Handler {
	public function __construct() {
		add_action( 'wp_ajax_jet_fb_ssr_validation_ajax', array( $this, 'jet_fb_ssr_validation_ajax' ) );
		add_action( 'wp_ajax_nopriv_jet_fb_ssr_validation_ajax', array( $this, 'jet_fb_ssr_validation_ajax' ) );
	}
	public function jet_fb_ssr_validation_ajax(){
		if (!isset($_POST['data'])) {
			wp_send_json_error(['message' => 'No data provided']);
		}

		$body = json_decode(stripslashes($_POST['data']), true);

		foreach ($body as $key => $value) {
			if (strpos($key, '[]') !== false) {
				unset($body[$key]);
				$new_key = str_replace('[]', '', $key);
				$body[$new_key] = is_array($value) ? $value : [$value];
			}
		}

		$result = Validation_Handler::validate($body);

		wp_send_json($result);
	}
}


