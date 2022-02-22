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

		foreach ( jet_fb_action_handler()->get_all() as $index => $action ) {
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

		/**
		 * Start cycle
		 */
		$this->start_flow();
		jet_fb_action_handler()->size_all = count( $this->get_actions_ids() );

		foreach ( $this->get_actions_ids() as $index ) {
			jet_fb_action_handler()->process_single_action( $index );
		}

		/**
		 * End the cycle
		 */
		jet_fb_action_handler()->set_current_action( false );
		jet_fb_action_handler()->end_flow();
	}

	public function start_flow() {
		jet_fb_action_handler()->start_flow( static::rep_item_id() );
	}

	public function set_form_id( $form_id ) {
		return jet_fb_action_handler()->set_form_id( $form_id );
	}



}