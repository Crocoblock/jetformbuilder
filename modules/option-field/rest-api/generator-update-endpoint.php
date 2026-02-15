<?php

namespace JFB_Modules\Option_Field\Rest_Api;

use Jet_Form_Builder\Generators\Registry;
use JFB_Components\Rest_Api\Rest_Api_Endpoint_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Generator Update Endpoint.
 *
 * Handles dynamic field option updates based on context from other fields.
 * Used by auto-update feature to regenerate options when dependent fields change.
 */
class Generator_Update_Endpoint extends Rest_Api_Endpoint_Base {

	/**
	 * Returns the REST base path for this endpoint.
	 *
	 * @return string
	 */
	public static function get_rest_base() {
		return 'generator-update';
	}

	/**
	 * Returns allowed HTTP methods.
	 *
	 * @return string
	 */
	public static function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	/**
	 * Check permission for this endpoint.
	 *
	 * Allows public access for frontend forms since this is used by anonymous users
	 * submitting forms. Security is handled through:
	 * - Form ID validation (must be published jet-form-builder post)
	 * - Input sanitization in run_callback()
	 * - Generator registry validation
	 *
	 * @return bool
	 */
	public function check_permission(): bool {
		// Allow public access for frontend forms
		// Validation is performed in run_callback() method
		return true;
	}

	/**
	 * Handle the REST request.
	 *
	 * Expected request body:
	 * {
	 *   "form_id": 123,
	 *   "field_name": "my_field",
	 *   "generator_id": "get_from_query",
	 *   "block_attrs": { ... },
	 *   "context": {
	 *     "parent_field": "parent_value"
	 *   }
	 * }
	 *
	 * @param \WP_REST_Request $request REST request object.
	 *
	 * @return \WP_REST_Response
	 */
	public function run_callback( \WP_REST_Request $request ) {
		$body = $request->get_json_params();

		// Validate required parameters
		$form_id      = isset( $body['form_id'] ) ? absint( $body['form_id'] ) : 0;
		$field_name   = isset( $body['field_name'] ) ? sanitize_text_field( $body['field_name'] ) : '';
		$generator_id = isset( $body['generator_id'] ) ? sanitize_text_field( $body['generator_id'] ) : '';
		$block_attrs  = isset( $body['block_attrs'] ) && is_array( $body['block_attrs'] ) ? $body['block_attrs'] : array();
		$context      = isset( $body['context'] ) && is_array( $body['context'] ) ? $body['context'] : array();

		// Validate required fields
		if ( ! $form_id ) {
			return new \WP_REST_Response(
				array(
					'success' => false,
					'message' => __( 'Form ID is required.', 'jet-form-builder' ),
				),
				400
			);
		}

		// Validate form exists and is published
		$form_post = get_post( $form_id );
		if ( ! $form_post || 'jet-form-builder' !== $form_post->post_type || 'publish' !== $form_post->post_status ) {
			return new \WP_REST_Response(
				array(
					'success' => false,
					'message' => __( 'Invalid form ID.', 'jet-form-builder' ),
				),
				404
			);
		}

		if ( ! $generator_id ) {
			return new \WP_REST_Response(
				array(
					'success' => false,
					'message' => __( 'Generator ID is required.', 'jet-form-builder' ),
				),
				400
			);
		}

		// Sanitize block attributes
		$block_attrs = $this->sanitize_block_attrs( $block_attrs );

		// Sanitize context values
		$context = $this->sanitize_context( $context );

		// Set context in $_REQUEST for JetEngine compatibility
		// JetEngine's dynamic tags and macros read from $_REQUEST
		foreach ( $context as $context_field => $context_value ) {
			$_REQUEST[ 'jfb_update_related_' . $context_field ] = $context_value;
		}

		// Generate options using the generator registry
		try {
			$options = Registry::instance()->generate( $generator_id, $block_attrs, $context );

			return new \WP_REST_Response(
				array(
					'success' => true,
					'options' => $options,
				),
				200
			);
		} catch ( \Exception $e ) {
			return new \WP_REST_Response(
				array(
					'success' => false,
					'message' => $e->getMessage(),
				),
				500
			);
		}
	}

	/**
	 * Sanitize block attributes recursively.
	 *
	 * @param array $attrs Attributes array.
	 *
	 * @return array Sanitized attributes.
	 */
	private function sanitize_block_attrs( array $attrs ): array {
		$sanitized = array();

		foreach ( $attrs as $key => $value ) {
			$clean_key = sanitize_key( $key );

			if ( is_array( $value ) ) {
				$sanitized[ $clean_key ] = $this->sanitize_block_attrs( $value );
			} elseif ( is_string( $value ) ) {
				$sanitized[ $clean_key ] = sanitize_text_field( $value );
			} elseif ( is_numeric( $value ) ) {
				$sanitized[ $clean_key ] = $value;
			} elseif ( is_bool( $value ) ) {
				$sanitized[ $clean_key ] = $value;
			}
		}

		return $sanitized;
	}

	/**
	 * Sanitize context values.
	 *
	 * @param array $context Context array with field values.
	 *
	 * @return array Sanitized context.
	 */
	private function sanitize_context( array $context ): array {
		$sanitized = array();

		foreach ( $context as $field => $value ) {
			$clean_field = sanitize_key( $field );

			if ( is_array( $value ) ) {
				// For array values (checkboxes, multi-select)
				$sanitized[ $clean_field ] = array_map( 'sanitize_text_field', $value );
			} elseif ( is_string( $value ) ) {
				$sanitized[ $clean_field ] = sanitize_text_field( $value );
			} elseif ( is_numeric( $value ) || is_bool( $value ) ) {
				$sanitized[ $clean_field ] = $value;
			}
		}

		return $sanitized;
	}
}
