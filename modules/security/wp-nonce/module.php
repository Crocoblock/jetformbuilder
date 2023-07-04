<?php


namespace JFB_Modules\Security\Wp_Nonce;

use JFB_Components\Module\Base_Module_It;
use JFB_Modules\Security\Exceptions\Spam_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Module implements Base_Module_It {

	const KEY               = '_wpnonce';
	const NONCE_ACTION_PREF = 'jet-form-builder-wp-nonce-';

	public function rep_item_id() {
		return 'wp-nonce';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		add_filter(
			'jet-form-builder/request-handler/request',
			array( $this, 'handle_request' )
		);
		add_filter(
			'jet-form-builder/message-types',
			array( $this, 'handle_messages' )
		);
		add_filter(
			'jet-form-builder/after-start-form',
			array( $this, 'on_render_form' )
		);
	}

	public function remove_hooks() {
		remove_filter(
			'jet-form-builder/request-handler/request',
			array( $this, 'handle_request' )
		);
		remove_filter(
			'jet-form-builder/message-types',
			array( $this, 'handle_messages' )
		);
		remove_filter(
			'jet-form-builder/after-start-form',
			array( $this, 'on_render_form' )
		);
	}

	public function on_render_form( string $html ): string {
		if ( ! jet_fb_live_args()->is_use_nonce() ) {
			return $html;
		}

		return ( $html . $this->get_nonce_field() );
	}

	public function get_nonce_id(): string {
		$form_id = jet_fb_live_args()->form_id;

		return self::NONCE_ACTION_PREF . $form_id;
	}

	public function get_nonce_field(): string {
		return wp_nonce_field( $this->get_nonce_id(), self::KEY, true, false );
	}

	public function verify( $nonce ): bool {
		return ( ! jet_fb_live_args()->is_use_nonce() || wp_verify_nonce( $nonce, $this->get_nonce_id() ) );
	}

	/**
	 * @param array $request
	 *
	 * @return array
	 * @throws Spam_Exception
	 */
	public function handle_request( array $request ): array {
		$nonce = $request[ self::KEY ] ?? '';

		if ( ! $this->verify( $nonce ) ) {
			throw new Spam_Exception( 'nonce_failed' );
		}

		return $request;
	}

	public function handle_messages( array $messages ): array {
		$messages['nonce_failed'] = array(
			'label' => __( 'WP nonce validation failed', 'jet-form-builder' ),
			'value' => __( 'Invalid nonce', 'jet-form-builder' ),
		);

		return $messages;
	}

}
