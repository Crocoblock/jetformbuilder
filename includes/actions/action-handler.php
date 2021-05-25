<?php

namespace Jet_Form_Builder\Actions;

// If this file is called directly, abort.
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Condition_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Gateway_Manager;
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
	 */
	public function __construct( $form_id ) {
		$this->form_id = $form_id;
		$this->set_form_actions();
	}

	public function add_request( $request ) {
		$this->request_data = $request;

		return $this;
	}

	/**
	 * Set form actions,
	 * which were saved in form meta
	 *
	 * @return $this
	 */
	public function set_form_actions() {
		$available_actions = Plugin::instance()->actions->get_actions();
		$form_actions      = Plugin::instance()->post_type->get_actions( $this->form_id );

		foreach ( $form_actions as $form_action ) {
			$id         = $form_action['id'];
			$type       = $form_action['type'];
			$conditions = isset( $form_action['conditions'] ) ? $form_action['conditions'] : array();

			if ( isset( $available_actions[ $type ] ) ) {
				$action = clone $available_actions[ $type ];
				/**
				 * Save action settings to the class field,
				 * it allows to not send action settings
				 * in action hook
				 */
				$action->_id        = $id;
				$action->conditions = $conditions;
				$action->settings   = isset( $form_action['settings'][ $type ] )
					? $form_action['settings'][ $type ] : $form_action['settings'];

				$this->form_actions[ $id ] = $action;
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
	public function unregister_action( $key ) {
		if ( is_numeric( $key ) && isset( $this->form_actions[ $key ] ) ) {
			unset( $this->form_actions[ $key ] );

			return;
		}
		foreach ( $this->form_actions as $index => $action ) {
			if ( $key === $action->get_id() ) {
				unset( $this->form_actions[ $index ] );
			}
		}
	}

	/**
	 * Returns all registered notifications
	 *
	 * @return Base[] [description]
	 */
	public function get_all() {
		return $this->form_actions;
	}

	/**
	 * Send form notifications
	 *
	 * @return array [type] [description]
	 * @throws Action_Exception
	 */
	public function do_actions() {

		$this->before_run_actions();
		$this->run_actions();
		$this->after_run_actions();

		return $this->response_data;
	}

	public function before_run_actions() {
		$callbacks = array();

		if ( Plugin::instance()->allow_gateways ) {
			$callbacks[] = array(
				Gateway_Manager::instance(),
				Gateway_Manager::BEFORE_ACTIONS_CALLABLE
			);
		}

		Tools::run_callbacks(
			apply_filters( 'jet-form-builder/actions/before-send/callbacks', $callbacks ),
			$this
		);
	}

	public function after_run_actions() {
		$callbacks = array();

		if ( Plugin::instance()->allow_gateways ) {
			$callbacks[] = array(
				Gateway_Manager::instance(),
				Gateway_Manager::AFTER_ACTIONS_CALLABLE
			);
		}

		Tools::run_callbacks(
			apply_filters( 'jet-form-builder/actions/after-send/callbacks', $callbacks ),
			$this
		);

	}

	public function run_actions() {
		if ( empty( $this->form_actions ) ) {
			throw new Action_Exception( 'failed' );
		}

		$this->size_all = sizeof( $this->form_actions );

		foreach ( $this->form_actions as $index => $action ) {

			$this->current_position = $index;

			/**
			 * Check conditions for action
			 *
			 * @var Base $action
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

	}

	public function get_inserted_post_id( $action_id = 0 ) {
		$default_post_id = absint( $this->response_data['inserted_post_id'] );

		if ( ! $action_id ) {
			return $default_post_id;
		}

		$action_id = absint( $action_id );

		if ( empty( $this->response_data['inserted_posts'] ) ) {
			return $default_post_id;
		}

		foreach ( $this->response_data['inserted_posts'] as $posts ) {
			if ( $action_id === $posts['action_id'] ) {
				return $posts['post_id'];
			}
		}

		return $default_post_id;
	}

	public function add_response( $values ) {
		Plugin::instance()->form_handler->add_response_data( $values );
	}


}
