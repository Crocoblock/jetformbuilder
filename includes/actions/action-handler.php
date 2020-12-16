<?php

namespace Jet_Form_Builder\Actions;

// If this file is called directly, abort.
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Condition_Exception;
use Jet_Form_Builder\Exceptions\Handler_Exception;
use Jet_Form_Builder\Plugin;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Actions handler class class
 */
class Action_Handler {

	public $form_id = null;
	public $request_data = null;
	public $manager = null;


	public $form_actions = array();
	public $is_ajax = false;

	/**
	 * Data for actions
	 */
	public $size_all;
	public $current_position;
	public $response_data = array();


	/**
	 * Constructor for the class
	 *
	 * @param $form_id
	 * @param array $request_data
	 */
	function __construct( $form_id, $request_data = array() ) {

		$this->form_id      = $form_id;
		$this->request_data = $request_data;

		$this->set_form_actions();
	}

	/**
	 * Set form actions,
	 * which were saved in form meta
	 *
	 * @return $this
	 */
	public function set_form_actions() {
		$available_actions = Plugin::instance()->actions->get_actions();

		$form_actions = Plugin::instance()->post_type->get_actions( $this->form_id );

		foreach ( $form_actions as $form_action ) {
			$id = $form_action['type'];
			$conditions = isset( $form_action['conditions'] ) ? $form_action['conditions'] : array();

			if ( isset( $available_actions[ $id ] ) ) {
				/**
				 * Save action settings to the class field,
				 * it allows to not send action settings
				 * in action hook
				 */
				$available_actions[ $id ]->settings = $form_action['settings'];
				$available_actions[ $id ]->conditions = $conditions;

				$this->form_actions[ $id ] = $available_actions[ $id ];
			}
		}

		return $this;
	}


	/**
	 * Unregister notification by id
	 *
	 * @param   $id [description]
	 *
	 * @return  void [description]
	 */
	public function unregister_action( $id ) {

		if ( isset( $this->form_actions[ $id ] ) ) {
			unset( $this->form_actions[ $id ] );
		}

	}

	/**
	 * Returns all registered notifications
	 *
	 * @return array [description]
	 */
	public function get_all() {
		return $this->form_actions;
	}

	/**
	 * Send form notifications
	 *
	 * @return array [type] [description]
	 */
	public function do_actions() {

		if ( empty( $this->form_actions ) ) {
			throw new Action_Exception( 'failed' );
		}

		$this->size_all = sizeof( $this->form_actions );

		do_action( 'jet-form-builder/actions/before-send', $this );

		foreach ( $this->form_actions as $index => $action ) {

			$this->current_position = $index;

			/**
			 * Check conditions for action
			 */
			try {
				$action->condition( $this );
			} catch ( Condition_Exception $exception ) {
				continue;
			}
			/**
			 * Process single action
			 */
			$action->do_action( $this->request_data, $this );
		}

		do_action( 'jet-form-builder/actions/after-send', $this );

		return $this->response_data;
	}


}
