<?php

namespace Jet_Form_Builder\Actions;

// If this file is called directly, abort.
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Condition_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
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
	public $request_data = array();
	public $manager = null;


	public $form_actions = array();
	private $form_conditions = array();
	public $is_ajax = false;

	/**
	 * Data for actions
	 */
	public $size_all;
	public $current_position = false;
	public $response_data = array();

	public $context = array();
	private $conditions;


	/**
	 * Constructor for the class
	 */
	public function __construct() {
	}

	public function condition_manager(): Condition_Manager {
		if ( ! $this->conditions ) {
			$this->conditions = new Condition_Manager();
		}

		return $this->conditions;
	}

	public function get_form_id() {
		return (int) $this->form_id;
	}

	/**
	 * @param $form_id
	 *
	 * @return Action_Handler
	 */
	public function set_form_id( $form_id ) {
		if ( ! $form_id || $form_id === $this->form_id ) {
			return $this;
		}
		$this->form_id = $form_id;
		$this->set_form_actions();

		return $this;
	}

	public function add_request( $request ) {
		$this->request_data = array_merge( $this->request_data, $request );

		return $this;
	}

	/**
	 * Set form actions,
	 * which were saved in form meta
	 *
	 * @return Action_Handler
	 */
	public function set_form_actions() {
		$form_actions = Plugin::instance()->post_type->get_actions( $this->form_id );

		foreach ( $form_actions as $form_action ) {
			try {
				$this->save_form_action( $form_action );
			} catch ( Repository_Exception $exception ) {
			}
		}

		return $this;
	}

	/**
	 * @param $form_action
	 *
	 * @throws Repository_Exception
	 */
	public function save_form_action( $form_action ) {
		$type = $form_action['type'];

		/** @var Base $action */
		$action = jet_form_builder()->actions->get_action_clone( $type );

		$id         = $form_action['id'];
		$settings   = $form_action['settings'][ $type ] ?? $form_action['settings'];
		$conditions = $form_action['conditions'] ?? array();
		$operator   = $form_action['condition_operator'] ?? 'and';

		/**
		 * Save action settings to the class field,
		 * it allows to not send action settings
		 * in action hook
		 */
		$action->_id      = $id;
		$action->settings = $settings;

		$condition = clone $this->condition_manager();
		$condition->set_conditions( $conditions );
		$condition->set_condition_operator( $operator );

		$this->form_conditions[ $id ] = $condition;
		$this->form_actions[ $id ]    = $action;
	}


	public function in_loop(): bool {
		return false !== $this->current_position;
	}

	public function in_loop_or_die() {
		if ( $this->in_loop() ) {
			return;
		}

		_doing_it_wrong(
			__METHOD__,
			esc_html( 'The action loop has not been started, see ' . self::class . '::run_actions()' ),
			'1.4.0'
		);
	}

	public function get_current_action(): Base {
		$this->in_loop_or_die();

		return $this->get_action_by_id( $this->current_position );
	}

	public function get_current_condition_manager(): Condition_Manager {
		$this->in_loop_or_die();

		return $this->get_condition_by_id( $this->current_position );
	}


	/**
	 * Unregister notification by id
	 *
	 * @param $key
	 *
	 * @return Action_Handler [description]
	 */
	public function unregister_action( $key ) {
		if ( is_numeric( $key ) && isset( $this->form_actions[ $key ] ) ) {
			unset( $this->form_actions[ $key ] );

			return $this;
		}
		foreach ( $this->form_actions as $index => $action ) {
			if ( $key === $action->get_id() ) {
				unset( $this->form_actions[ $index ] );
			}
		}

		return $this;
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
				Gateway_Manager::BEFORE_ACTIONS_CALLABLE,
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
				Gateway_Manager::AFTER_ACTIONS_CALLABLE,
			);
		}

		Tools::run_callbacks(
			apply_filters( 'jet-form-builder/actions/after-send/callbacks', $callbacks ),
			$this
		);

	}

	/**
	 * Doesn't throw an exception if there are no actions
	 *
	 * @return $this
	 * @throws Action_Exception
	 */
	public function soft_run_actions() {
		if ( empty( $this->form_actions ) ) {
			return $this;
		}
		$this->run_actions();

		return $this;
	}

	/**
	 * @throws Action_Exception
	 */
	public function run_actions() {
		if ( empty( $this->form_actions ) ) {
			throw new Action_Exception( 'failed', 'Empty actions' );
		}

		$this->size_all = sizeof( $this->form_actions );

		foreach ( $this->form_actions as $index => $action ) {

			/**
			 * Start the cycle
			 *
			 * @var int current_position
			 */
			$this->current_position = $index;

			/**
			 * Check conditions for action
			 *
			 * @var Base $action
			 */
			try {
				$this->get_current_condition_manager()->check_all();
			} catch ( Condition_Exception $exception ) {
				continue;
			}

			/**
			 * Process single action
			 */
			$action->do_action( $this->request_data, $this );
		}

		/**
		 * End the cycle
		 */
		$this->current_position = false;
	}

	public function get_inserted_post_id( $action_id = 0 ) {
		$default_post_id = absint( $this->response_data['inserted_post_id'] ?? 0 );

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

	public function get_context( $action_slug, $property = '' ) {
		$context = $this->context[ $action_slug ] ?? array();

		return $property ? $context[ $property ] ?? false : $context;
	}

	public function add_context( $action_slug, $context ) {
		$this->context[ $action_slug ] = array_merge( $this->get_context( $action_slug ), $context );

		return $this;
	}

	public function add_context_once( $action_slug, $context ) {
		$action_context = $this->get_context( $action_slug );

		if ( ! $action_context ) {
			$this->add_context( $action_slug, $context );

			return $this;
		}

		foreach ( $context as $name => $value ) {
			if ( isset( $action_context[ $name ] ) ) {
				unset( $context[ $name ] );
			}
		}
		$this->add_context( $action_slug, $context );

		return $this;
	}

	/**
	 * @param $id
	 *
	 * @return false|Base
	 */
	public function get_action_by_id( $id ) {
		return $this->form_actions[ $id ] ?? false;
	}

	/**
	 * @param $id
	 *
	 * @return false|Condition_Manager
	 */
	public function get_condition_by_id( $id ) {
		return $this->form_conditions[ $id ] ?? false;
	}

	/**
	 * @param $slug
	 *
	 * @return false|Base
	 */
	public function get_action_by_slug( $slug ) {
		foreach ( $this->form_actions as $action ) {
			/** @var Base $action */

			if ( $action->get_id() !== $slug ) {
				continue;
			}

			return $action;
		}

		return false;
	}

	public function get_refer() {
		return $this->request_data['__refer'] ?? '';
	}


}
