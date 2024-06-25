<?php

namespace JFB_Modules\Actions_V2\Mailchimp\Api;

class Action_Factory {

	private $domain    = '';
	private $api_token = '';


	/**
	 * @param string $action_class
	 *
	 * @return false|Base_Api_Action
	 */
	public function create( string $action_class ) {
		if ( ! class_exists( $action_class ) ) {
			return false;
		}
		$action = new $action_class();

		if ( ! ( $action instanceof Base_Api_Action ) ) {
			return false;
		}

		$action->set_basic_auth( $this->get_api_token() );
		$action->set_domain( $this->get_domain() );

		return $action;
	}

	public function set_api_key( string $api_key ) {
		$api_key_data = explode( '-', $api_key );

		if ( empty( $api_key_data[1] ) || 0 !== strpos( $api_key_data[1], 'us' ) ) {
			return;
		}

		$this->set_api_token( $api_key_data[0] );
		$this->set_domain( $api_key_data[1] );
	}

	/**
	 * @return string
	 */
	public function get_api_token(): string {
		return $this->api_token;
	}


	/**
	 * @param string $api_token
	 */
	protected function set_api_token( string $api_token ) {
		$this->api_token = $api_token;
	}

	/**
	 * @return string
	 */
	public function get_domain(): string {
		return $this->domain;
	}

	/**
	 * @param string $domain
	 */
	protected function set_domain( string $domain ) {
		$this->domain = $domain;
	}

}
