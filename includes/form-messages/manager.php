<?php


namespace Jet_Form_Builder\Form_Messages;

use Jet_Form_Builder\Plugin;

class Manager {

	public $_types = array();

	const DYNAMIC_SUCCESS_PREF = 'dsuccess|';
	const DYNAMIC_FAILED_PREF  = 'derror|';


	public static function dynamic_success( $message ) {
		return self::DYNAMIC_SUCCESS_PREF . $message;
	}

	public static function dynamic_error( $message ) {
		return self::DYNAMIC_FAILED_PREF . $message;
	}

	public static function dynamic_types() {
		return array(
			'dsuccess' => array(
				'type' => 'success',
			),
			'derror'   => array(
				'type' => 'failed',
			),
		);
	}

	/**
	 * @return Manager
	 */
	public function set_up() {
		if ( ! jet_form_builder()->msg_router->get_form_id() || $this->get_messages() ) {
			return $this;
		}

		$this->_types = array_merge(
			$this->get_form_types_messages(),
			$this->get_action_types_messages()
		);

		return $this;
	}

	public function get_form_types_messages() {
		return Plugin::instance()->post_type->get_messages(
			jet_form_builder()->msg_router->get_form_id()
		);
	}

	public function get_action_types_messages() {
		$messages = array();

		foreach ( jet_form_builder()->msg_router->get_actions() as $action ) {
			if ( ! isset( $action->messages ) ) {
				continue;
			}
			$default_action_messages = wp_list_pluck( $action->messages, 'value' );
			$action_messages         = isset( $action->settings['messages'] ) ? $action->settings['messages'] : array();

			$messages = array_merge( $messages, $default_action_messages, $action_messages );
		}

		return $messages;
	}

	public function isset_message_type( $type ) {
		return isset( $this->_types[ $type ] );
	}


	public function get_message( $type ): string {
		$info = new Status_Info( $type );

		/**
		 * Return dynamic message
		 */
		return $this->get_message_by_info( $info );
	}

	public function get_message_by_info( Status_Info $info ): string {
		if ( $info->is_dynamic() ) {
			return $info->get_message();
		}

		$status = $info->get_message();

		if ( $this->isset_message_type( $status ) ) {
			return $this->_types[ $status ]['value'] ?? $this->_types[ $status ];
		}

		return 'Undefined error';
	}

	public function get_messages() {
		return $this->_types;
	}

	public static function parse_message( $status ) {
		return explode( '|', $status );
	}

}
