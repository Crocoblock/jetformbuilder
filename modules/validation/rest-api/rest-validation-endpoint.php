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
	 * @param \WP_REST_Request $request
	 *
	 * @return \WP_REST_Response
	 * @throws Repository_Exception
	 */
	public function run_callback( \WP_REST_Request $request ) {
		$body = $request->get_body_params();

		// All security validation is centralized in Validation_Handler::validate()
		$result = Validation_Handler::validate( $body );

		// Return 403 for security-related failures
		$status = 200;
		if ( false === $result['result'] && $this->is_security_error( $result['message'] ?? '' ) ) {
			$status = 403;
		}

		return new WP_REST_Response( $result, $status );
	}

	/**
	 * Check if the error message indicates a security failure.
	 *
	 * @since 3.5.6.2
	 *
	 * @param string $message The error message.
	 *
	 * @return bool True if security error, false otherwise.
	 */
	protected function is_security_error( string $message ): bool {
		$security_messages = array(
			__( 'Invalid form ID', 'jet-form-builder' ),
			__( 'Invalid security signature', 'jet-form-builder' ),
		);

		return in_array( $message, $security_messages, true );
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
