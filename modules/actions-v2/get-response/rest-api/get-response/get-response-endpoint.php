<?php

namespace JFB_Modules\Actions_V2\Get_Response\Rest_Api\Get_Response;

use Jet_Form_Builder\Exceptions\Gateway_Exception;
use JFB_Components\Rest_Api\Interfaces\Endpoint_Interface;
use JFB_Modules\Actions_V2\Get_Response\Api\Action_Factory;
use JFB_Modules\Actions_V2\Get_Response\Api\Get_Custom_Fields_Action;
use JFB_Modules\Actions_V2\Get_Response\Api\Get_Lists_Action;

class Get_Response_Endpoint implements Endpoint_Interface {

	/**
	 * @var Action_Factory
	 */
	private $factory;

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
		);
	}

	public function process( \WP_REST_Request $request ): \WP_REST_Response {
		$this->init_factory( $request['apiKey'] ?? '' );

		try {
			return new \WP_REST_Response(
				array(
					'fields' => $this->get_custom_fields(),
					'lists'  => $this->get_lists(),
				)
			);
		} catch ( Gateway_Exception $exception ) {
			return new \WP_REST_Response(
				array(
					'message' => $exception->getMessage(),
					'data'    => $exception->get_additional(),
				),
				400
			);
		}
	}

	/**
	 * @return array
	 * @throws Gateway_Exception
	 */
	private function get_lists(): array {
		/** @var Get_Lists_Action $action */
		$action = $this->factory->create( Get_Lists_Action::class );
		$action->send_request();

		return iterator_to_array( $action->generate_lists() );
	}

	/**
	 * @return array[]
	 * @throws Gateway_Exception
	 */
	private function get_custom_fields(): array {
		$fields = array(
			array(
				'value'    => 'email',
				'label'    => __( 'Email', 'jet-form-builder' ),
				'required' => true,
			),
			array(
				'value' => 'name',
				'label' => __( 'Name', 'jet-form-builder' ),
			),
		);

		/** @var Get_Custom_Fields_Action $action */
		$action = $this->factory->create( Get_Custom_Fields_Action::class );
		$action->send_request();

		array_push(
			$fields,
			...iterator_to_array( $action->generate_fields() )
		);

		return $fields;
	}

	private function init_factory( string $api_key ) {
		$this->factory = new Action_Factory();
		$this->factory->set_api_key( $api_key );
	}

}
