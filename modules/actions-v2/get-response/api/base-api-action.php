<?php

namespace JFB_Modules\Actions_V2\Get_Response\Api;

use JFB_Modules\Gateways\Base_Gateway_Action;

class Base_Api_Action extends Base_Gateway_Action {

	private $api_key = '';

	public function base_url(): string {
		return 'https://api.getresponse.com/v3/';
	}

	public function action_headers() {
		return array(
			'X-Auth-Token' => 'api-key ' . $this->get_api_key(),
			'Content-Type' => 'application/json',
		);
	}

	/**
	 * @param string $api_key
	 */
	public function set_api_key( string $api_key ) {
		$this->api_key = $api_key;
	}

	/**
	 * @return string
	 */
	public function get_api_key(): string {
		return $this->api_key;
	}

}
