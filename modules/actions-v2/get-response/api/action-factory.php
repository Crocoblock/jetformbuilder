<?php

namespace JFB_Modules\Actions_V2\Get_Response\Api;

class Action_Factory {

	private $api_key = '';


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

		$action->set_api_key( $this->get_api_key() );

		return $action;
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
