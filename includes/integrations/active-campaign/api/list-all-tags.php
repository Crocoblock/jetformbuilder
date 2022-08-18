<?php


namespace Jet_Form_Builder\Integrations\Active_Campaign\Api;


use Jet_Form_Builder\Classes\Arrayable\Arrayable;

class List_All_Tags extends Base_Action implements Arrayable {

	protected $method = \WP_REST_Server::READABLE;

	public function action_endpoint() {
		return 'api/3/tags';
	}

	public function to_array(): array {
		$response = array();
		$tags     = $this->response_body['tags'] ?? array();

		foreach ( $tags as $tag ) {
			$response[ $tag['tag'] ] = (int) $tag['id'];
		}

		return $response;
	}
}