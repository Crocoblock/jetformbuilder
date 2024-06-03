<?php

namespace JFB_Modules\Onboarding\Rest_Api\Use_Form_Route;

use JFB_Components\Rest_Api\Interfaces\Endpoint_Interface;
use JFB_Modules\Onboarding\Builders\Builder_Create_Page;
use JFB_Modules\Onboarding\Builders\Builder_Update_Page;
use JFB_Modules\Onboarding\Builders\Exceptions\Use_Form_Exception;
use JFB_Modules\Onboarding\Builders\Interfaces\Builder_Interface;

class Use_Form_Endpoint implements Endpoint_Interface {

	public function get_method(): string {
		return \WP_REST_Server::CREATABLE;
	}

	public function has_permission(): bool {
		return current_user_can( 'publish_jet_fb_forms' );
	}

	public function get_args(): array {
		return array(
			'pageId'    => array(
				'type' => 'integer',
			),
			'pageTitle' => array(
				'type' => 'string',
			),
			'builder'   => array(
				'type' => 'string',
			),
		);
	}

	public function process( \WP_REST_Request $request ): \WP_REST_Response {
		/** @var Builder_Interface $builder */
		$builder = $request->get_param( 'pageId' )
			? $this->get_builder_for_update( $request )
			: $this->get_builder_for_create( $request );

		$builder->set_form_id( $request->get_param( 'formId' ) );
		$builder->set_builder_type( $request->get_param( 'builder' ) );

		try {
			do_action( 'jet-form-builder/use-form', $builder );
		} catch ( Use_Form_Exception $exception ) {
			return new \WP_REST_Response(
				array(
					'message' => $exception->getMessage(),
				),
				400
			);
		}

		return new \WP_REST_Response(
			array(
				'redirect' => $builder->get_redirect_url(),
			)
		);
	}

	protected function get_builder_for_create( \WP_REST_Request $request ): Builder_Create_Page {
		$builder = new Builder_Create_Page();
		$builder->set_title( $request->get_param( 'pageTitle' ) );

		return $builder;
	}

	protected function get_builder_for_update( \WP_REST_Request $request ): Builder_Update_Page {
		$builder = new Builder_Update_Page();
		$builder->set_page_id( $request->get_param( 'pageId' ) );

		return $builder;
	}
}
