<?php


namespace JFB_Modules\Logger;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Error_Log_Logger implements Logger_It {

	public function log( string $message, $value = null ) {
		// phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log
		error_log( 'JFB DEBUG: [message] ' . $message );

		if ( is_null( $value ) ) {
			return;
		}
		// phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log
		error_log( 'JFB DEBUG: [value] ' . $value );
	}

}
