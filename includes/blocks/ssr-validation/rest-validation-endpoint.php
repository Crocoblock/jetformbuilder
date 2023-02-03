<?php


namespace Jet_Form_Builder\Blocks\Ssr_Validation;


use Jet_Form_Builder\Blocks\Validation;
use Jet_Form_Builder\Exceptions\Parse_Exception;
use Jet_Form_Builder\Request\Parser_Context;
use Jet_Form_Builder\Request\Request_Tools;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;

class Rest_Validation_Endpoint extends Rest_Api_Endpoint_Base {

	const FIELD_KEY    = '_jfb_validation_field';
	const CALLBACK_KEY = '_jfb_validation_callback';
	const PARENT_KEY   = '_jfb_validation_parent';
	const ROOT_KEY     = '_jfb_validation_root';

	public static function get_rest_base() {
		return 'validate-field';
	}

	public static function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	public function run_callback( \WP_REST_Request $request ) {
		$body = $request->get_body_params();

		list(
			$value,
			$context,
			$name,
			$parent_name
			) = $this->get_validation_context( $request );

		$context->set_raw_field(
			array(
				'blockName' => 'some-field',
				'attrs'     => array(
					'name'        => $name,
					'parent_name' => $parent_name,
				)
			)
		);

		$callback = $body[ self::CALLBACK_KEY ] ?? false;

		if ( ! $value || ! $callback ) {
			return new \WP_REST_Response(
				array(
					'message' => __( 'Field value or callback is empty', 'jet-form-builder' ),
				),
				400
			);
		}

		$result = Validation::instance()->callbacks->validate(
			$value,
			$callback,
			$context
		);

		return new \WP_REST_Response(
			array(
				'result' => $result
			),
			200
		);
	}

	/**
	 * @param \WP_REST_Request $request
	 *
	 * @return array<mixed|Parser_Context>
	 */
	protected function get_validation_context( \WP_REST_Request $request ): array {
		$body        = $request->get_body_params();
		$context     = new Parser_Context();
		$parent_name = $body[ self::PARENT_KEY ] ?? false;
		$field_name  = $body[ self::FIELD_KEY ] ?? false;

		jet_fb_handler()->set_form_id( $body[ jet_fb_handler()->form_key ] ?? false );

		if ( ! $parent_name || empty( $body[ $parent_name ] ) ) {
			$files = Request_Tools::get_files( $request->get_file_params() );

			jet_fb_request_handler()->set_raw_request( $body );
			jet_fb_request_handler()->set_raw_files( $files );

			$context->set_request_context( $body );
			$context->set_files_context( $files );

			$value = $body[ $field_name ] ?? false;

			return array( $value, $context, $field_name, $parent_name );
		}

		// this field inside repeater row

		$row_values = array_values( $body[ $parent_name ] )[0];
		$all_values = $body[ self::ROOT_KEY ] ?? array();

		$context->set_request_context( $row_values );
		jet_fb_request_handler()->set_raw_request( $all_values );

		$value = $row_values[ $field_name ] ?? false;

		return array( $value, $context, $field_name, $parent_name );
	}
}