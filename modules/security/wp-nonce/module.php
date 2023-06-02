<?php


namespace JFB_Modules\Security\Wp_Nonce;

use JFB_Components\Module\Base_Module_It;
use JFB_Modules\Security\Exceptions\Spam_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Module implements Base_Module_It {

	const KEY = '_wpnonce';

	public function rep_item_id() {
		return 'wp-nonce';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		add_filter(
			'jet-form-builder/request-handler/request',
			array( static::class, 'handle_request' )
		);
		add_filter(
			'jet-form-builder/message-types',
			array( static::class, 'handle_messages' )
		);
	}

	public function remove_hooks() {
		remove_filter(
			'jet-form-builder/request-handler/request',
			array( static::class, 'handle_request' )
		);
		remove_filter(
			'jet-form-builder/message-types',
			array( static::class, 'handle_messages' )
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
	 * @throws Spam_Exception
	 */
	public static function handle_request( array $request ): array {
		$nonce = $request[ self::KEY ] ?? '';

		if ( ! self::verify( $nonce ) ) {
			throw new Spam_Exception( 'nonce_failed' );
		}

		return $request;
	}

	public static function handle_messages( array $messages ): array {
		$messages['nonce_failed'] = array(
			'label' => __( 'WP nonce validation failed', 'jet-form-builder' ),
			'value' => __( 'Invalid nonce', 'jet-form-builder' ),
		);

		return $messages;
	}

}
