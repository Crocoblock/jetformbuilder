<?php


namespace JFB_Modules\Rest_Api\Endpoints;

use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;
use Jet_Form_Builder\Form_Manager;
use Jet_Form_Builder\Request\Exceptions\Plain_Value_Exception;
use JFB_Components\Rest_Api\Rest_Api_Endpoint_Base;
use JFB_Modules\Block_Parsers\Field_Data_Parser;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Get_Form_Fields extends Rest_Api_Endpoint_Base {

	public static function get_rest_base() {
		return '(?P<id>[\d]+)/fields';
	}

	public static function get_methods() {
		return \WP_REST_Server::READABLE;
	}

	public function get_common_args(): array {
		return array(
			'id' => array(
				'type'     => 'integer',
				'required' => true,
			),
		);
	}

	public function check_permission(): bool {
		return current_user_can( 'edit_jet_fb_forms' );
	}

	public function run_callback( \WP_REST_Request $request ) {
		$form_id = $request->get_param( 'id' );
		$form    = get_post( $form_id );

		if ( absint( $form->post_author ) !== get_current_user_id()
			&& ! current_user_can( 'edit_post', $form->ID )
		) {
			return new \WP_REST_Response(
				array(
					'message' => __( 'Not allowed', 'jet-form-builder' ),
				),
				403
			);
		}

		jet_fb_context()->set_parsers(
			Block_Helper::get_blocks_by_post( $form )
		);

		foreach ( jet_fb_context()->iterate_parsers() as $name => $parser ) {
			if ( 'password' === $parser->get_setting( 'field-type' ) ) {
				continue;
			}
			$fields[] = array(
				'value' => $name,
				'label' => $parser->get_label(),
				'type'  => $parser->get_type(),
			);
		}

		if ( empty( $fields ) ) {
			return new \WP_REST_Response(
				array(
					'message' => __( 'Not founded fields', 'jet-form-builder' ),
				),
				204
			);
		}

		return new \WP_REST_Response(
			array(
				'fields' => $fields,
			)
		);
	}
}
