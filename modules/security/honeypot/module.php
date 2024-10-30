<?php


namespace JFB_Modules\Security\Honeypot;

use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Live_Form;
use JFB_Components\Module\Base_Module_It;
use JFB_Modules\Security\Exceptions\Spam_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Module implements Base_Module_It {

	const FIELD = '_jfb_email_hp_';

	public function rep_item_id() {
		return 'honeypot';
	}

	public function condition(): bool {
		return true;
	}

	const SPAM_EXCEPTION = 'honeypot';
	public function __construct() {
		add_filter( 'jet-form-builder/security/spam-statuses', array( $this, 'add_spam_statuses' ) );
	}
	public function add_spam_statuses( $statuses ) {
		$statuses[] = self::SPAM_EXCEPTION;
		return $statuses;
	}

	public function init_hooks() {
		add_filter(
			'jet-form-builder/after-start-form',
			array( $this, 'on_render_form' )
		);
		add_filter(
			'jet-form-builder/request-handler/request',
			array( $this, 'handle_request' )
		);
		add_filter(
			'jet-form-builder/message-types',
			array( $this, 'handle_global_messages' )
		);
	}

	public function remove_hooks() {
		remove_filter(
			'jet-form-builder/after-start-form',
			array( $this, 'on_render_form' )
		);
		remove_filter(
			'jet-form-builder/request-handler/request',
			array( $this, 'handle_request' )
		);
		remove_filter(
			'jet-form-builder/message-types',
			array( $this, 'handle_global_messages' )
		);
	}

	public function on_render_form( string $content ): string {
		$args = jet_form_builder()->post_type->get_args();

		if ( empty( $args['use_honeypot'] ) ) {
			return $content;
		}

		$field = Live_Form::force_render_field(
			'text-field',
			array(
				'field_type'   => 'email',
				'name'         => self::FIELD,
				'autocomplete' => 'nope',
			)
		);

		$content .= sprintf(
			'<div style="transform: scale(0); position: absolute;">%s</div>',
			$field
		);

		return $content;
	}

	/**
	 * @param array $request
	 *
	 * @return array
	 * @throws Spam_Exception
	 */
	public function handle_request( array $request ): array {
		$args = jet_form_builder()->post_type->get_args();

		if ( empty( $args['use_honeypot'] ) ) {
			return $request;
		}

		if ( ! empty( $request[ self::FIELD ] ) ) {
			throw new Spam_Exception( self::SPAM_EXCEPTION );
		}

		unset( $request[ self::FIELD ] );

		return $request;
	}

	public function handle_global_messages( array $types ): array {
		$types[ self::SPAM_EXCEPTION ] = array(
			'label' => __( 'Honeypot validation failed', 'jet-form-builder' ),
			'value' => __( 'You are not allowed to fill in the honeypot field', 'jet-form-builder' ),
		);

		return $types;
	}

}
