<?php


namespace Jet_Form_Builder\Actions\Executors;


use Jet_Form_Builder\Actions\Condition_Manager;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Condition_Exception;

abstract class Action_Executor_Base {

	public $current_position = false;

	/**
	 * Send form notifications
	 *
	 * @return array [type] [description]
	 * @throws Action_Exception
	 */
	public function do_actions() {
		do_action( 'jet-form-builder/actions/before-send' );

		$run_actions_callback = apply_filters( 'jet-form-builder/actions/run-callback', array(
			$this,
			'run_default_actions'
		) );
		call_user_func( $run_actions_callback );

		do_action( 'jet-form-builder/actions/after-send' );

		return $this->handler()->response_data;
	}


	/**
	 * Doesn't throw an exception if there are no actions
	 *
	 * @return $this
	 * @throws Action_Exception
	 */
	public function soft_run_default_actions() {
		if ( empty( $this->form_actions ) ) {
			return $this;
		}
		$this->run_actions();

		return $this;
	}

	/**
	 * @param array $actions_stack
	 *
	 * @throws Action_Exception
	 */
	public function run_actions() {
		if ( empty( $temp ) ) {
			throw new Action_Exception( 'failed', 'Empty actions' );
		}

		$this->size_all = sizeof( $actions_stack );

		foreach ( $actions_stack as $index => $action ) {

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
				/**
				 * We save the ID of the current action,
				 * for possible logging of form entries
				 */
				$this->skipping_current();

				continue;
			}

			/**
			 * Process single action
			 */
			$action->do_action( $this->handler()->request_data, $this );

			/**
			 * We save the ID of the current action,
			 * for possible logging of form entries
			 */
			$this->passing_current();
		}

		/**
		 * End the cycle
		 */
		$this->current_position = false;
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

		return $this->handler()->get_action_by_id( $this->current_position );
	}

	public function get_current_condition_manager(): Condition_Manager {
		$this->in_loop_or_die();

		return $this->handler()->get_condition_by_id( $this->current_position );
	}


	public function handler() {
		return jet_form_builder()->form_handler->action_handler;
	}

}