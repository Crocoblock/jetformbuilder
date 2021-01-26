<?php


namespace Jet_Form_Builder\Form_Messages;


use Jet_Form_Builder\Plugin;

class Manager {

	public $form_id;
	public $actions;
	protected $_types = array();
	private $success_statuses = array( 'success' );

	const DYNAMIC_SUCCESS_PREF = 'dsuccess|';
	const DYNAMIC_FAILED_PREF = 'derror|';


	public function __construct( $form_id, $actions = array() ) {
		$this->form_id = $form_id;
		$this->actions = $actions;

		$this->set_messages();
	}

	public static function dynamic_success( $message ) {
		return self::DYNAMIC_SUCCESS_PREF . $message;
	}

	public static function dynamic_error( $message ) {
		return self::DYNAMIC_FAILED_PREF . $message;
	}

	private function is_success( $status ) {
		$message = $this->parse_message( $status );

		if ( $this->is_dynamic_message( $message ) ) {
			return 'success' === $this->dynamic_types()[ $message[0] ]['type'];
		}

		return in_array( $message[0], $this->success_statuses );
	}


	public function get_status_class( $status ) {
		return $this->is_success( $status ) ? 'success' : 'error';
	}

	public function dynamic_types() {
		return array(
			'dsuccess' => array(
				'type' => 'success'
			),
			'derror'   => array(
				'type' => 'failed'
			),
		);
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
			if ( isset( $action->messages ) ) {
				$messages = array_merge( $messages, $action->messages );
			}
		}

		return $messages;
	}

	public function isset_message_type( $type ) {
		return isset( $this->_types[ $type ] );
	}


	public function get_message( $type ) {
		$message = $this->parse_message( $type );

		/**
		 * Return dynamic message
		 */
		if ( $this->is_dynamic_message( $message ) ) {
			return $message[1];
		}

		if ( $this->isset_message_type( $message[0] ) ) {
			return is_array( $this->_types[ $message[0] ] )
				? $this->_types[ $message[0] ]['value']
				: $this->_types[ $message[0] ];
		}

		return '';
	}

	public function get_messages() {
		return $this->_types;
	}

	private function parse_message( $status ) {
		return explode( '|', $status );
	}

	private function is_dynamic_message( $message ) {
		return isset( $this->dynamic_types()[ $message[0] ] ) && ! empty( $message[1] );
	}

}