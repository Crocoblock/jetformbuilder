<?php


namespace Jet_Form_Builder\Integrations\Active_Campaign\Api;


class Retrieve_Custom_Fields_Action extends Base_Action {

	protected $method = \WP_REST_Server::READABLE;

	public function action_endpoint() {
		return 'api/3/lists';
	}
}