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
			'jet-form-builder/before-render-field',
			array( $this, 'on_render_field' ),10,3
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
			'jet-form-builder/before-render-field',
			array( $this, 'on_render_field' )
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

	public function on_render_field( string $content, string $field_name, array $attrs ): string {
		$type = $attrs['action_type'] ?? '';
		if ( 'submit-field' !== $field_name || 'submit' !== $type ) {
			return $content;
		}

		$args = jet_form_builder()->post_type->get_args();
		if ( empty( $args['use_honeypot'] ) ) {
			return $content;
		}

		$blocks = Live_Form::instance()->blocks;
		$has_email = false;
		$has__email = false;
		$name = 'email';
		foreach ($blocks as $block) {
			$block_name = isset($block['attrs']) && isset($block['attrs']['name']) ? $block['attrs']['name'] : '';
			if ( $block_name === 'email' ) {
				$has_email = true;
			}
			if ( $block_name === '_email' ) {
				$has__email = true;
			}
		}

		if ($has_email) {
			$name = '_email';
			if ($has__email) {
				$name = self::FIELD;
			}
		}

		$field = Live_Form::force_render_field(
			'text-field',
			array(
				'field_type'   => 'email',
				'name'         => $name,
				'autocomplete' => 'off',
			)
		);

		$content .= sprintf(
			'<div class="jfb-visually-hidden" tabindex="-1">%s</div>',
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
			// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
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
