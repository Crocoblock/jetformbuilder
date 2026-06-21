<?php
namespace JFB_Modules\Validation\Handlers;

use Jet_Form_Builder\Blocks\Block_Helper;
use JFB_Modules\Validation\Rest_Api\Rest_Validation_Endpoint;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Request\Exceptions\Plain_Value_Exception;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;

class Validation_Handler {

	const MAIN_SIGNATURES_KEY = '_jfb_validation_sigs';

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
		return Block_Helper::is_valid_form_post( $form_id );
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

		// Normalize the field path for signature verification.
		// Client sends full path like ['repeater_name', '0', 'field_name']
		// but signature is generated without row indexes: ['repeater_name', 'field_name']
		$normalized_path = self::normalize_field_path( $field_path );

		$expected = Rest_Validation_Endpoint::generate_signature( $form_id, $normalized_path, $rule_index );

		return hash_equals( $expected, $signature );
	}

	/**
	 * Normalize field path by removing numeric row indexes.
	 * Converts ['repeater', '0', 'field'] to ['repeater', 'field']
	 * and sanitizes all path segments.
	 *
	 * @since 3.5.6.2
	 *
	 * @param string|array $field_path The field path from request.
	 *
	 * @return string|array Normalized path without row indexes.
	 */
	public static function normalize_field_path( $field_path ) {
		if ( ! is_array( $field_path ) ) {
			return sanitize_text_field( (string) $field_path );
		}

		$normalized = array();
		foreach ( $field_path as $segment ) {
			$segment = sanitize_text_field( $segment );
			// Skip numeric segments (row indexes in repeaters)
			if ( ! is_numeric( $segment ) ) {
				$normalized[] = $segment;
			}
		}

		return $normalized;
	}

	public static function get_signature_key( $field_path, int $rule_index ): string {
		$normalized  = self::normalize_field_path( $field_path );
		$path_string = is_array( $normalized ) ? implode( '.', $normalized ) : (string) $normalized;

		return md5( $path_string . '|' . $rule_index );
	}

	public static function validate_main_signature( array $body, int $form_id, $field_path, int $rule_index ): bool {
		$signatures = $body[ self::MAIN_SIGNATURES_KEY ] ?? array();

		if ( ! is_array( $signatures ) ) {
			return false;
		}

		$key       = self::get_signature_key( $field_path, $rule_index );
		$signature = sanitize_text_field( $signatures[ $key ] ?? '' );

		if ( empty( $signature ) || empty( $form_id ) ) {
			return false;
		}

		$expected = Rest_Validation_Endpoint::generate_signature(
			$form_id,
			self::normalize_field_path( $field_path ),
			$rule_index
		);

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
