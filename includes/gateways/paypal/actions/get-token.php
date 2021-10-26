<?php


namespace Jet_Form_Builder\Gateways\Paypal\Actions;

class Get_Token extends Base_Action {

	const SLUG = 'GET_ACCESS_TOKEN';

	public function action_slug() {
		return self::SLUG;
	}

	public function action_endpoint() {
		return 'v1/oauth2/token';
	}

	public function action_headers() {
		return array();
	}

	public function action_body() {
		return 'grant_type=client_credentials';
	}

	public function set_credentials( $client_id, $secret ) {
		$key = base64_encode( $client_id . ':' . $secret );

		return $this->set_basic_auth( $key );
	}
}
