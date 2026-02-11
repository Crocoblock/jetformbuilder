<?php
namespace JFB_Modules\Validation\Handlers;

use JFB_Modules\Validation\Rest_Api\Rest_Validation_Endpoint;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Request\Exceptions\Plain_Value_Exception;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;

class Validation_Handler {

	/**
	 * Form post type constant for validation.
	 *
	 * @since 3.5.6.2
	 */
	const FORM_POST_TYPE = 'jet-form-builder';

	/**
	 * Validate that the given ID belongs to a published JetFormBuilder form.
	 *
	 * @since 3.5.6.2
	 *
	 * @param int $form_id The form ID to validate.
	 *
	 * @return bool True if valid, false otherwise.
	 */
	public static function validate_form_post_type( int $form_id ): bool {
		if ( ! $form_id ) {
			return false;
		}

		$post = get_post( $form_id );

		if ( ! $post || self::FORM_POST_TYPE !== $post->post_type ) {
			return false;
		}

		// Only allow published forms
		if ( 'publish' !== $post->post_status ) {
			return false;
		}

		return true;
	}

	/**
	 * Validate the signature from request body.
	 *
	 * @since 3.5.6.2
	 *
	 * @param array $body Request body parameters.
	 *
	 * @return bool True if signature is valid, false otherwise.
	 */
	public static function validate_signature( array $body ): bool {
		$form_id    = absint( $body[ jet_fb_handler()->form_key ] ?? 0 );
		$field_path = $body[ Rest_Validation_Endpoint::FIELD_KEY ] ?? '';
		$rule_index = absint( $body[ Rest_Validation_Endpoint::RULE_INDEX_KEY ] ?? 0 );
		$signature  = sanitize_text_field( $body[ Rest_Validation_Endpoint::SIGNATURE_KEY ] ?? '' );

		if ( empty( $signature ) || empty( $form_id ) ) {
			return false;
		}

		// For repeater fields, path is array like ['repeater', '0', 'field_name']
		// Signature is generated using only field name, so extract last element
		$field_name = $field_path;
		if ( is_array( $field_path ) && ! empty( $field_path ) ) {
			$field_name = end( $field_path );
		}

		$expected = Rest_Validation_Endpoint::generate_signature( $form_id, $field_name, $rule_index );

		return hash_equals( $expected, $signature );
	}

	public static function validate( $body ) {
		remove_all_actions( 'jet-form-builder/validate-field' );

		// Security: Validate form post type
		$form_id = absint( $body[ jet_fb_handler()->form_key ] ?? 0 );

		if ( ! self::validate_form_post_type( $form_id ) ) {
			return array(
				'result'  => false,
				'message' => __( 'Invalid form ID', 'jet-form-builder' ),
			);
		}

		// Security: Validate signature
		if ( ! self::validate_signature( $body ) ) {
			return array(
				'result'  => false,
				'message' => __( 'Invalid security signature', 'jet-form-builder' ),
			);
		}

		try {
			$request = new \WP_REST_Request();
			$request->set_body_params( $body );
			$parser = ( new Rest_Validation_Endpoint() )->get_parser_public( $request );
		} catch ( Plain_Value_Exception $exception ) {
			return array(
				'result' => false,
				'message' => __( 'Unresolved parser for field', 'jet-form-builder' ),
			);
		} catch ( Repository_Exception $exception ) {
			return array(
				'result' => false,
				'message' => __( 'Unresolved parser for field', 'jet-form-builder' ),
			);
		}

		$validation = $parser->get_setting( 'validation' );
		$ssr_attrs = Array_Tools::get(
			$validation,
			array( 'rules', $body[ Rest_Validation_Endpoint::RULE_INDEX_KEY ] )
		);

		if ( null === $parser->get_value() || '' === $parser->get_value() || empty( $ssr_attrs['value'] ) ) {
			return array(
				'result' => false,
				'message' => __( 'Field value or callback is empty', 'jet-form-builder' ),
			);
		}

		/** @var Module $module */
		$module = jet_form_builder()->module( 'validation' );
		$ssr_rule = $module->get_rules()->get_ssr();

		$ssr_rule->set_settings( $ssr_attrs );
		$ssr_rule->validate_field( $parser );

		return array(
			'result' => empty( $parser->get_errors() ),
			'message' => empty( $parser->get_errors() ) ? '' : __( 'Validation failed', 'jet-form-builder' ),
		);
	}
}
