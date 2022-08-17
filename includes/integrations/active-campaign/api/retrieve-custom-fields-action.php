<?php


namespace Jet_Form_Builder\Integrations\Active_Campaign\Api;


use Jet_Form_Builder\Classes\Arrayable\Arrayable;

class Retrieve_Custom_Fields_Action extends Base_Action implements Arrayable {

	protected $method = \WP_REST_Server::READABLE;

	public function action_endpoint() {
		return 'api/3/lists';
	}

	public function to_array(): array {
		$response = array();
		$lists    = $this->response_body['fields'] ?? array();

		foreach ( $lists as $list ) {
			$response[] = array(
				'value' => $list['id'],
				'label' => $list['title'],
			);
		}

		return $response;
	}
}