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
			array( $this, 'on_render_field' ),
			10,
			3
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

	private function find_email_field_name( array $blocks ): string {
		$result = array(
			'has_email'    => false,
			'has__email'   => false,
		);

		$this->walk_blocks_for_email( $blocks, $result );

		if ( $result['has_email'] ) {
			if ( $result['has__email'] ) {
				return self::FIELD;
			}
			return '_email';
		}

		return 'email';
	}

	private function walk_blocks_for_email( array $blocks, array &$result ) {
		foreach ( $blocks as $block ) {
			if ( ! is_array( $block ) ) {
				continue;
			}

			if ( isset( $block['attrs']['name'] ) ) {
				if ( 'email' === $block['attrs']['name'] ) {
					$result['has_email'] = true;
				}
				if ( '_email' === $block['attrs']['name'] ) {
					$result['has__email'] = true;
				}
			}

			if ( ! empty( $block['innerBlocks'] ) && is_array( $block['innerBlocks'] ) ) {
				$this->walk_blocks_for_email( $block['innerBlocks'], $result );
			}
		}
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

		$name = $this->find_email_field_name( Live_Form::instance()->blocks );

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

		$honeypot_name = $this->find_email_field_name( jet_form_builder()->form_handler->request_handler->_fields );

		if ( ! empty( $request[ $honeypot_name ] ) ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
			throw new Spam_Exception( self::SPAM_EXCEPTION );
		}

		unset( $request[ $honeypot_name ] );

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
