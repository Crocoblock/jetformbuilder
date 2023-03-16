<?php


namespace Jet_Form_Builder\Classes\Security;


use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Live_Form;

class Honeypot {

	const FIELD = '_jfb_email_hp_';

	public function __construct() {
		add_filter(
			'jet-form-builder/after-start-form',
			array( $this, 'on_render_form' )
		);
		add_filter(
			'jet-form-builder/request-handler/request',
			array( $this, 'handle_request' )
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
				'field_type' => 'email',
				'name'       => self::FIELD,
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
	 * @throws Request_Exception
	 */
	public function handle_request( array $request ): array {
		$args = jet_form_builder()->post_type->get_args();

		if ( empty( $args['use_honeypot'] ) ) {
			return $request;
		}

		if ( ! empty( $request[ self::FIELD ] ) ) {
			throw new Request_Exception( 'honeypot' );
		}

		unset( $request[ self::FIELD ] );

		return $request;
	}

}