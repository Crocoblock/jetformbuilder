<?php


namespace Jet_Form_Builder\Integrations\Active_Campaign\Api;

use Jet_Form_Builder\Gateways\Base_Gateway_Action;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Action extends Base_Gateway_Action {

	protected $token;

	public function base_url(): string {
		return '{base}/api/3/';
	}

	public function set_base( string $url ): self {
		return $this->set_path(
			array(
				'base' => $url,
			)
		);
	}

	public function get_headers(): array {
		$headers = parent::get_headers();

		$headers['Api-Token'] = $this->token;

		return $headers;
	}

	public function set_token( string $token ): self {
		$this->token = $token;

		return $this;
	}

}
