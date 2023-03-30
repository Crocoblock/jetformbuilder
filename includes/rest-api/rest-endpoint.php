<?php


namespace Jet_Form_Builder\Rest_Api;

use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Rest_Api\Traits\Rest_Fetch_Endpoint;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Rest_Endpoint implements Arrayable {

	private $url;
	private $method;

	public function __construct( Rest_Fetch_Endpoint $endpoint ) {
		$this->url    = $endpoint->get_rest_url();
		$this->method = $endpoint->get_rest_methods();
	}

	public function to_array(): array {
		return array(
			'url'    => $this->url,
			'method' => $this->method,
		);
	}

}
