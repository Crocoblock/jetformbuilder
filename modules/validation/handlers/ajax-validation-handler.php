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
	public function jet_fb_ssr_validation_ajax() {
		// phpcs:ignore WordPress.Security.NonceVerification.Missing
		if ( ! isset( $_POST['data'] ) ) {
			wp_send_json_error( array( 'message' => 'No data provided' ) );
		}

		// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized, WordPress.Security.ValidatedSanitizedInput.MissingUnslash, WordPress.Security.NonceVerification.Missing
		$body = json_decode( stripslashes( $_POST['data'] ), true );

		foreach ( $body as $key => $value ) {
			if ( strpos( $key, '[]' ) !== false ) {
				unset( $body[ $key ] );
				$new_key = str_replace( '[]', '', $key );
				$body[ $new_key ] = is_array( $value ) ? $value : array( $value );
			}
		}

		$result = Validation_Handler::validate( $body );

		wp_send_json( $result );
	}
}
