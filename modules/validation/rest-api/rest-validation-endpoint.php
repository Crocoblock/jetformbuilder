<?php


namespace JFB_Modules\Validation\Rest_Api;

use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;
use Jet_Form_Builder\Request\Exceptions\Plain_Value_Exception;
use JFB_Modules\Block_Parsers\Field_Data_Parser;
use Jet_Form_Builder\Request\Request_Tools;
use JFB_Components\Rest_Api;
use JFB_Modules\Validation\Module;
use JFB_Modules\Validation\Handlers\Validation_Handler;
use WP_REST_Request;
use WP_REST_Response;


// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Rest_Validation_Endpoint extends Rest_Api\Rest_Api_Endpoint_Base {

	const FIELD_KEY      = '_jfb_validation_path';
	const RULE_INDEX_KEY = '_jfb_validation_rule_index';
	const SIGNATURE_KEY  = '_jfb_validation_sig';

	/**
	 * Form post type constant for validation.
	 *
	 * @since 3.5.6.2
	 */
	const FORM_POST_TYPE = 'jet-form-builder';

	public static function get_rest_base() {
		return 'validate-field';
	}

	public static function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	/**
	 * Generate a cryptographic signature for validation request.
	 *
	 * @since 3.5.6.2
	 *
	 * @param int          $form_id    The form ID.
	 * @param string|array $field_path The field path.
	 * @param int          $rule_index The rule index.
	 *
	 * @return string The generated signature.
	 */
	public static function generate_signature( int $form_id, $field_path, int $rule_index ): string {
		$path_string = is_array( $field_path ) ? implode( '.', $field_path ) : (string) $field_path;
		$data        = $form_id . '|' . $path_string . '|' . $rule_index;

		return wp_hash( $data, 'nonce' );
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
	protected function validate_signature( array $body ): bool {
		$form_id    = absint( $body[ jet_fb_handler()->form_key ] ?? 0 );
		$field_path = $body[ self::FIELD_KEY ] ?? '';
		$rule_index = absint( $body[ self::RULE_INDEX_KEY ] ?? 0 );
		$signature  = sanitize_text_field( $body[ self::SIGNATURE_KEY ] ?? '' );

		if ( empty( $signature ) || empty( $form_id ) ) {
			return false;
		}

		$expected = self::generate_signature( $form_id, $field_path, $rule_index );

		return hash_equals( $expected, $signature );
	}

	/**
	 * Validate that the given ID belongs to a JetFormBuilder form.
	 *
	 * @since 3.5.6.2
	 *
	 * @param int $form_id The form ID to validate.
	 *
	 * @return bool|\WP_Post False if invalid, WP_Post object if valid.
	 */
	protected function validate_form_post_type( int $form_id ) {
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

		return $post;
	}

	/**
	 * @param \WP_REST_Request $request
	 *
	 * @return \WP_REST_Response
	 * @throws Repository_Exception
	 */
	public function run_callback( \WP_REST_Request $request ) {
		$body = $request->get_body_params();

		// Security: Validate form post type
		$form_id = absint( $body[ jet_fb_handler()->form_key ] ?? 0 );

		if ( ! $this->validate_form_post_type( $form_id ) ) {
			return new WP_REST_Response(
				array(
					'result'  => false,
					'message' => __( 'Invalid form ID', 'jet-form-builder' ),
				),
				403
			);
		}

		// Security: Validate signature
		if ( ! $this->validate_signature( $body ) ) {
			return new WP_REST_Response(
				array(
					'result'  => false,
					'message' => __( 'Invalid security signature', 'jet-form-builder' ),
				),
				403
			);
		}

		$result = Validation_Handler::validate( $body );

		return new WP_REST_Response( $result );
	}

	/**
	 * @param \WP_REST_Request $request
	 *
	 * @return Field_Data_Parser
	 * @throws Plain_Value_Exception
	 * @throws Repository_Exception
	 */
	protected function get_parser( \WP_REST_Request $request ): Field_Data_Parser {
		$body    = $request->get_body_params();

		$path    = $body[ self::FIELD_KEY ] ?? false;

		$form_id = $body[ jet_fb_handler()->form_key ] ?? false;

		jet_fb_handler()->set_form_id( $form_id );

		jet_fb_context()->set_request( $body );
		jet_fb_context()->set_files( Request_Tools::get_files( $request->get_file_params() ) );

		// set fields with request
		jet_fb_context()->apply(
			Block_Helper::get_blocks_by_post( $form_id )
		);

		return jet_fb_context()->resolve_parser( $path );
	}

	public function get_parser_public( \WP_REST_Request $request ) {
		return $this->get_parser( $request );
	}
}
