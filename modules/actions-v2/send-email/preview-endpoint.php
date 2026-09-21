<?php

namespace JFB_Modules\Actions_V2\Send_Email;

use JFB_Modules\Post_Type\Module;

if ( ! defined( 'WPINC' ) ) {
	die;
}

class Preview_Endpoint {

	public function register() {
		register_rest_route(
			'jet-form-builder/v1',
			'/send-email/preview',
			array(
				'methods'             => \WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'process' ),
				'permission_callback' => array( $this, 'has_permission' ),
				'args'                => array(
					'form_id'        => array(
						'type'     => 'integer',
						'minimum'  => 1,
						'required' => true,
					),
					'content'        => array(
						'type'     => 'string',
						'required' => true,
					),
					'content_type'   => array(
						'type'    => 'string',
						'enum'    => array( '', 'text/html', 'text/plain' ),
						'default' => '',
					),
					'disable_format' => array(
						'type'    => 'boolean',
						'default' => false,
					),
				),
			)
		);
	}

	public function has_permission( \WP_REST_Request $request ): bool {
		$form = get_post( $request->get_param( 'form_id' ) );

		return $form && Module::SLUG === $form->post_type
			&& current_user_can( 'edit_post', $form->ID );
	}

	public function process( \WP_REST_Request $request ): \WP_REST_Response {
		// Only use the draft template supplied by the editor. No action is run.
		$content_type = $request->get_param( 'content_type' ) ?: 'text/html';
		$content      = Content_Formatter::format(
			$request->get_param( 'content' ),
			'text/html' === $content_type,
			$request->get_param( 'disable_format' )
		);

		return new \WP_REST_Response(
			array(
				'content'      => $content,
				'content_type' => $content_type,
			)
		);
	}
}
