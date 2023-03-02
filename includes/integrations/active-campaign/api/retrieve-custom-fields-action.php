<?php


namespace Jet_Form_Builder\Integrations\Active_Campaign\Api;

use Jet_Form_Builder\Classes\Arrayable\Arrayable;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Retrieve_Custom_Fields_Action extends Base_Action implements Arrayable {

	protected $method = \WP_REST_Server::READABLE;

	public function action_endpoint() {
		return 'fields';
	}

	public function to_array(): array {
		$response = array();

		foreach ( $this->response_body['fields'] as $field ) {
			$response[] = array(
				'value' => $field['id'],
				'label' => $field['title'],
			);
		}

		return $response;
	}

	public function get_field_id( string $key ): int {
		foreach ( $this->response_body['fields'] as $field ) {
			if ( $field['perstag'] !== $key ) {
				continue;
			}

			return (int) $field['id'];
		}

		return 0;
	}
}