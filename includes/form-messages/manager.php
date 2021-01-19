<?php


namespace Jet_Form_Builder\Form_Messages;


use Jet_Form_Builder\Plugin;

class Manager {

	public $form_id;
	public $actions;

	protected $_types = array();

	public function __construct( $form_id, $actions = array() ) {
		$this->form_id = $form_id;
		$this->actions = $actions;

		$this->set_messages();
	}

	public function set_messages() {
		if ( ! $this->form_id ) {
			return;
		}
		$this->_types = array_merge(
			Plugin::instance()->post_type->get_messages( $this->form_id ),
			$this->get_action_types_messages()
		);

	}

	public function get_action_types_messages() {
		$messages = array();

		foreach ( $this->actions as $action ) {
			if ( isset( $action->settings['messages'] ) ) {
				$messages = array_merge( $messages, $action->settings['messages'] );
			}
		}

		return $messages;
	}

	public function isset_message_type( $type ) {
		return isset( $this->_types[ $type ] );
	}


	public function get_message_text( $type ) {
		$message = explode( '|', $type );

		/**
		 * Return dynamic message
		 */
		if ( $message[0] === 'dynamic' && isset( $message[1] ) && ! empty( $message[1] ) ) {
			return $message[1];
		}

		if ( $this->isset_message_type( $message[0] ) ) {
			return $this->_types[ $message[0] ];
		}

		return '';
	}

	public function get_messages() {
		return $this->_types;
	}

}