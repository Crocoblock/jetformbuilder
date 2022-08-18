<?php


namespace Jet_Form_Builder\Integrations\Active_Campaign\Api;


use Jet_Form_Builder\Classes\Arrayable\Arrayable;

class Retrieve_Custom_Fields_Action extends Base_Action implements Arrayable {

	protected $method = \WP_REST_Server::READABLE;

	public function action_endpoint() {
		return 'api/3/fields';
	}

	public function to_array(): array {
		$response = array(
			array(
				'value' => 'email',
				'label' => __( 'Email', 'jet-form-builder' ),
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
		);

		$fields = $this->response_body['fields'] ?? array();

		foreach ( $fields as $field ) {
			$response[] = array(
				'value' => $field['perstag'],
				'label' => $field['title'],
			);
		}

		return $response;
	}
}