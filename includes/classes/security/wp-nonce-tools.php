<?php


namespace Jet_Form_Builder\Classes\Security;

use Jet_Form_Builder\Exceptions\Request_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Wp_Nonce_Tools {

	const KEY = '_wpnonce';

	public static function register() {
		add_filter(
			'jet-form-builder/request-handler/request',
			array( static::class, 'handle_request' )
		);
	}

	public static function get_nonce_id(): string {
		$form_id = jet_fb_live_args()->form_id;

		return "jet-form-builder-wp-nonce-{$form_id}";
	}

	public static function get_nonce_field(): string {
		if ( ! jet_fb_live_args()->is_use_nonce() ) {
			return '';
		}

		return wp_nonce_field( static::get_nonce_id(), self::KEY, true, false );
	}

	public static function verify( $nonce ): bool {
		return ( ! jet_fb_live_args()->is_use_nonce() || wp_verify_nonce( $nonce, static::get_nonce_id() ) );
	}

	/**
	 * @param array $request
	 *
	 * @return array
	 * @throws Request_Exception
	 */
	public static function handle_request( array $request ): array {
		$nonce = $request[ self::KEY ] ?? '';

		if ( ! self::verify( $nonce ) ) {
			throw ( new Request_Exception( 'Invalid nonce.' ) )->dynamic_error();
		}

		return $request;
	}

}
