<?php


namespace JFB_Modules\Active_Campaign\Rest_Api\Active_Campaign;

use Jet_Form_Builder\Exceptions\Gateway_Exception;
use JFB_Components\Rest_Api\Interfaces\Endpoint_Interface;
use JFB_Modules\Active_Campaign\Api\Retrieve_Custom_Fields_Action;
use JFB_Modules\Active_Campaign\Api\Retrieve_Lists_Action;

class Active_Campaign_Endpoint implements Endpoint_Interface {

	public function get_method(): string {
		return \WP_REST_Server::READABLE;
	}

	public function has_permission(): bool {
		return current_user_can( 'manage_options' );
	}

	public function get_args(): array {
		return array(
			'apiKey' => array(
				'type'     => 'string',
				'required' => true,
			),
			'apiUrl' => array(
				'type'     => 'string',
				'required' => true,
			),
		);
	}

	public function process( \WP_REST_Request $request ): \WP_REST_Response {
		$token = $request['apiKey'] ?? '';
		$url   = $request['apiUrl'] ?? '';

		try {
			/** @var Retrieve_Custom_Fields_Action $fields */
			$fields = ( new Retrieve_Custom_Fields_Action() )
				->set_base( $url )
				->set_token( $token )
				->request()
				->check_response_code()
				->response_body_as_array();

		} catch ( Gateway_Exception $exception ) {
			return new \WP_REST_Response(
				array(
					'action'  => Retrieve_Custom_Fields_Action::class,
					'message' => $exception->getMessage(),
					'data'    => $exception->get_additional(),
				),
				400
			);
		}

		try {
			/** @var Retrieve_Lists_Action $lists */
			$lists = ( new Retrieve_Lists_Action() )
				->set_base( $url )
				->set_token( $token )
				->request()
				->check_response_code()
				->response_body_as_array();

		} catch ( Gateway_Exception $exception ) {
			return new \WP_REST_Response(
				array(
					'action'  => Retrieve_Lists_Action::class,
					'message' => $exception->getMessage(),
					'data'    => $exception->get_additional(),
				),
				400
			);
		}

		return new \WP_REST_Response(
			array(
				'fields' => array_merge(
					array(
						array(
							'value'    => 'email',
							'label'    => __( 'Email', 'jet-form-builder' ),
							'required' => true,
						),
						array(
							'value' => 'firstName',
							'label' => __( 'First Name', 'jet-form-builder' ),
						),
						array(
							'value' => 'lastName',
							'label' => __( 'Last Name', 'jet-form-builder' ),
						),
						array(
							'value' => 'phone',
							'label' => __( 'Phone', 'jet-form-builder' ),
						),
					),
					$fields->to_array()
				),
				'lists'  => $lists->to_array(),
			)
		);
	}
}
