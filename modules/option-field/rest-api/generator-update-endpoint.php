<?php

namespace JFB_Modules\Option_Field\Rest_Api;

use Jet_Form_Builder\Classes\Builder_Helper;
use Jet_Form_Builder\Generators\Registry;
use Jet_Form_Builder\Plugin;
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
	 *   "context": { "parent_field": "parent_value" }
	 * }
	 *
	 * @param \WP_REST_Request $request REST request object.
	 *
	 * @return \WP_REST_Response
	 */
	public function run_callback( \WP_REST_Request $request ) {
		$body = $request->get_json_params();

		$form_id       = isset( $body['form_id'] ) ? absint( $body['form_id'] ) : 0;
		$field_name    = isset( $body['field_name'] ) ? sanitize_text_field( $body['field_name'] ) : '';
		$generator_id  = isset( $body['generator_id'] ) ? sanitize_text_field( $body['generator_id'] ) : '';
		$preview_nonce = isset( $body['preview_nonce'] ) ? sanitize_text_field( $body['preview_nonce'] ) : '';
		$context       = isset( $body['context'] ) && is_array( $body['context'] ) ? $body['context'] : array();

		if ( ! $form_id ) {
			return new \WP_REST_Response(
				array( 'success' => false, 'message' => __( 'Form ID is required.', 'jet-form-builder' ) ),
				400
			);
		}

		$form_post = $this->resolve_form_post( $form_id, $preview_nonce );
		if ( ! $form_post ) {
			return new \WP_REST_Response(
				array( 'success' => false, 'message' => __( 'Invalid form ID.', 'jet-form-builder' ) ),
				404
			);
		}

		if ( ! $generator_id ) {
			return new \WP_REST_Response(
				array( 'success' => false, 'message' => __( 'Generator ID is required.', 'jet-form-builder' ) ),
				400
			);
		}

		// Load block_attrs from the saved post — never trust the client.
		// This prevents SSRF (endpoint_url tampering) and arbitrary template injection.
		$block_attrs = $this->get_block_attrs_from_post( $form_post, $field_name );

		if ( null === $block_attrs ) {
			return new \WP_REST_Response(
				array( 'success' => false, 'message' => __( 'Field not found in form.', 'jet-form-builder' ) ),
				404
			);
		}

		// Verify that the requested generator_id matches what is saved in the post.
		$saved_generator_id = $block_attrs['generator_function'] ?? '';
		if ( $generator_id !== $saved_generator_id ) {
			return new \WP_REST_Response(
				array( 'success' => false, 'message' => __( 'Generator mismatch.', 'jet-form-builder' ) ),
				400
			);
		}

		$context = $this->sanitize_context( $context );

		// Scoped context storage for integrations (preferred over $_REQUEST).
		$had_scoped_context = array_key_exists( 'jfb_generator_context', $GLOBALS );
		$prev_scoped_context = $had_scoped_context ? $GLOBALS['jfb_generator_context'] : null;
		$GLOBALS['jfb_generator_context'] = $context;

		// Set context in $_REQUEST for JetEngine dynamic tags compatibility.
		// Legacy fallback, keep during transition period.
		$context_keys_set = array();
		foreach ( $context as $context_field => $context_value ) {
			$_REQUEST[ 'jfb_update_related_' . $context_field ] = $context_value;
			$context_keys_set[] = $context_field;
		}

		try {
			$options = Registry::instance()->generate( $generator_id, $block_attrs, $context );

			// Render JetEngine custom template HTML server-side if configured.
			if ( ! empty( $block_attrs['custom_item_template'] ) && ! empty( $block_attrs['custom_item_template_id'] ) ) {
				$builder_helper = new Builder_Helper();
				foreach ( $options as &$option ) {
					$object_id = $option['object_id'] ?? $option['value'] ?? null;
					if ( $object_id ) {
						$raw_html = $builder_helper->get_custom_template( $object_id, $block_attrs );
						$option['html'] = wp_kses_post( $raw_html );
					}
				}
				unset( $option );
			}

			return new \WP_REST_Response(
				array( 'success' => true, 'options' => $options ),
				200
			);
		} catch ( \Exception $e ) {
			return new \WP_REST_Response(
				array( 'success' => false, 'message' => __( 'Failed to generate options.', 'jet-form-builder' ) ),
				500
			);
		} finally {
			// Clean up $_REQUEST entries set by this request.
			foreach ( $context_keys_set as $context_field ) {
				unset( $_REQUEST[ 'jfb_update_related_' . $context_field ] );
			}

			// Restore previous scoped context (or unset if it didn't exist).
			if ( $had_scoped_context ) {
				$GLOBALS['jfb_generator_context'] = $prev_scoped_context;
			} else {
				unset( $GLOBALS['jfb_generator_context'] );
			}
		}
	}

	/**
	 * Load block attributes for a specific field from the saved post content.
	 *
	 * Returns null if the field is not found, preventing any generation
	 * with client-supplied parameters.
	 *
	 * @param \WP_Post $form_post  Published form post.
	 * @param string   $field_name Field name to find.
	 *
	 * @return array|null Block attrs array or null if field not found.
	 */
	private function get_block_attrs_from_post( \WP_Post $form_post, string $field_name ): ?array {
		if ( empty( $field_name ) ) {
			return null;
		}

		$block = Plugin::instance()->form->get_field_by_name( $form_post->ID, $field_name );

		if ( empty( $block ) || ! isset( $block['attrs'] ) ) {
			return null;
		}

		return $block['attrs'];
	}

	/**
	 * Resolve form post for regular frontend and preview requests.
	 *
	 * Published forms are accepted directly.
	 * Revisions are accepted only in preview mode with a valid nonce and edit capability.
	 *
	 * @param int    $form_id       Requested form/revision ID.
	 * @param string $preview_nonce Preview nonce from request body.
	 *
	 * @return \WP_Post|null
	 */
	private function resolve_form_post( int $form_id, string $preview_nonce ): ?\WP_Post {
		$form_post = get_post( $form_id );

		if ( $form_post && 'jet-form-builder' === $form_post->post_type && 'publish' === $form_post->post_status ) {
			return $form_post;
		}

		if ( ! $form_post || 'revision' !== $form_post->post_type ) {
			return null;
		}

		if ( empty( $preview_nonce ) || ! wp_verify_nonce( $preview_nonce, 'jfb-preview-form' ) ) {
			return null;
		}

		$parent_form_id = (int) $form_post->post_parent;
		$parent_form    = $parent_form_id ? get_post( $parent_form_id ) : null;

		if ( ! $parent_form || 'jet-form-builder' !== $parent_form->post_type ) {
			return null;
		}

		if ( ! current_user_can( 'edit_jet_fb_form', $parent_form_id ) ) {
			return null;
		}

		return $form_post;
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
