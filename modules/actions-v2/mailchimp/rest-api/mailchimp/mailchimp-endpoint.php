<?php

namespace JFB_Modules\Actions_V2\Mailchimp\Rest_Api\Mailchimp;

use Jet_Form_Builder\Exceptions\Gateway_Exception;
use JFB_Components\Rest_Api\Interfaces\Endpoint_Interface;
use JFB_Modules\Actions_V2\Mailchimp\Api\Action_Factory;
use JFB_Modules\Actions_V2\Mailchimp\Api\Get_Categories_Action;
use JFB_Modules\Actions_V2\Mailchimp\Api\Get_Categories_Interests_Action;
use JFB_Modules\Actions_V2\Mailchimp\Api\Get_Fields_Action;
use JFB_Modules\Actions_V2\Mailchimp\Api\Get_Lists_Action;

class Mailchimp_Endpoint implements Endpoint_Interface {

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
			/** @var Get_Lists_Action $get_lists */
			$get_lists = $this->factory->create( Get_Lists_Action::class );
			$get_lists->send_request();

			$lists = iterator_to_array( $get_lists->generate_lists() );
		} catch ( Gateway_Exception $exception ) {
			return new \WP_REST_Response(
				array(
					'code'    => 'not_found_lists',
					'message' => $exception->getMessage(),
				),
				404
			);
		}

		$groups = array();
		$fields = array();

		foreach ( $lists as $list ) {
			$groups[ $list['value'] ] = $this->generate_groups( $list['value'] );

			$fields[ $list['value'] ] = array(
				array(
					'value'    => 'email',
					'label'    => __( 'Email', 'jet-form-builder' ),
					'required' => true,
				),
			);

			array_push(
				$fields[ $list['value'] ],
				...iterator_to_array( $this->generate_fields( $list['value'] ) )
			);
		}

		return new \WP_REST_Response(
			array(
				'lists'  => $lists,
				'groups' => $groups,
				'fields' => $fields,
			)
		);
	}

	private function generate_groups( string $list_id ): array {
		/** @var Get_Categories_Action $get_categories */
		$get_categories = $this->factory->create( Get_Categories_Action::class );

		$groups = array();

		try {
			$get_categories->set_list_id( $list_id );
			$get_categories->send_request();

			foreach ( $get_categories->generate_categories() as $category ) {
				/** @var Get_Categories_Interests_Action $get_interests */
				$get_interests = $this->factory->create( Get_Categories_Interests_Action::class );

				$get_interests->set_list_id( $list_id );
				$get_interests->set_category_id( $category['value'] );
				$get_interests->send_request();

				foreach ( $get_interests->generate_interests() as $interest ) {
					array_push(
						$groups,
						array(
							'value' => $interest['value'],
							'label' => $category['label'] . ' - ' . $interest['label'],
						)
					);
				}
			}
		} catch ( Gateway_Exception $exception ) {
			return array();
		}

		return $groups;
	}

	private function generate_fields( string $list_id ): \Generator {
		/** @var Get_Fields_Action $get_fields */
		$get_fields = $this->factory->create( Get_Fields_Action::class );
		$get_fields->set_list_id( $list_id );

		try {
			$get_fields->send_request();
		} catch ( Gateway_Exception $exception ) {
			return;
		}

		yield from $get_fields->generate_fields();
	}

	private function init_factory( string $api_key ) {
		$this->factory = new Action_Factory();
		$this->factory->set_api_key( $api_key );
	}
}
