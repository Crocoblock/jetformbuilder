<?php


namespace Jet_Form_Builder\Actions\Executors;


use Jet_Form_Builder\Actions\Condition_Manager;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Classes\Repository_Item_With_Class;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Condition_Exception;

abstract class Action_Executor_Base {

	/** @var int[] */
	protected $actions_ids = array();

	use Repository_Item_With_Class;

	/**
	 * @return int[]
	 */
	public function get_actions_ids() {
		if ( ! empty( $this->actions_ids ) ) {
			return $this->actions_ids;
		}

		foreach ( $this->handler()->get_all() as $index => $action ) {
			if ( self::rep_item_id() === $action->get_flow_handler() ) {
				$this->actions_ids[] = $index;
			}
		}

		return $this->actions_ids;
	}


	/**
	 * Doesn't throw an exception if there are no actions
	 *
	 * @return $this
	 * @throws Action_Exception
	 */
	public function soft_run_actions() {
		if ( empty( $this->get_actions_ids() ) ) {
			return $this;
		}
		$this->run_actions();

		return $this;
	}

	/**
	 * @throws Action_Exception
	 */
	public function run_actions() {
		if ( empty( $this->get_actions_ids() ) ) {
			throw new Action_Exception( 'failed', 'Empty actions' );
		}

		$this->start_flow();
		$this->handler()->size_all = count( $this->get_actions_ids() );

		foreach ( $this->get_actions_ids() as $index ) {

			/**
			 * Start the cycle
			 *
			 * @var int current_position
			 */
			$this->handler()->set_current_action( $index );

			try {
				/**
				 * Check conditions for action
				 */
				$this->handler()->get_current_condition_manager()->check_all();
			} catch ( Condition_Exception $exception ) {
				/**
				 * We save the ID of the current action,
				 * for possible logging of form entries
				 */
				$this->handler()->skipping_current();

				continue;
			}

			/**
			 * Process single action
			 */
			$this->get_action()->do_action( $this->handler()->request_data, $this->handler() );

			/**
			 * We save the ID of the current action,
			 * for possible logging of form entries
			 */
			$this->handler()->passing_current();
		}

		/**
		 * End the cycle
		 */
		$this->handler()->set_current_action( false );
		$this->handler()->end_flow();
	}

	/**
	 * @return false|Base
	 */
	public function get_action() {
		return $this->handler()->get_current_action();
	}

	public function start_flow() {
		$this->handler()->start_flow( static::rep_item_id() );
	}

	public function set_form_id( $form_id ) {
		return $this->handler()->set_form_id( $form_id );
	}

	public function handler() {
		return jet_form_builder()->form_handler->action_handler;
	}

}