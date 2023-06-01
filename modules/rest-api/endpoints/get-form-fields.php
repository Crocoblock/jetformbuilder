<?php


namespace JFB_Modules\Rest_Api\Endpoints;

use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Form_Manager;
use JFB_Components\Rest_Api\Rest_Api_Endpoint_Base;

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
		return current_user_can( 'edit_posts' );
	}

	public function run_callback( \WP_REST_Request $request ) {
		$form_id = $request->get_param( 'id' );
		$form    = get_post( $form_id );

		if ( absint( $form->post_author ) !== get_current_user_id()
			&& ! current_user_can( 'edit_post', $form->ID )
		) {
			return new \WP_REST_Response(
				array(
					'message' => 'Not allowed',
				),
				403
			);
		}

		$blocks    = Block_Helper::get_blocks_by_post( $form );
		$generator = Block_Helper::generate_top_fields( $blocks );
		$fields    = array();

		foreach ( $generator as $block ) {
			$fields[] = $this->get_field( $block );
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

	protected function get_field( array $block ): array {
		$name  = $block['attrs']['name'] ?? '';
		$label = $block['attrs']['label'] ?? '';

		return array(
			'value' => $name,
			'label' => $label ?: $name,
			'type'  => Block_Helper::delete_namespace( $block ),
		);
	}
}
