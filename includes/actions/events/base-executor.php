<?php


namespace Jet_Form_Builder\Actions\Events;


use Jet_Form_Builder\Actions\Executors\Action_Default_Executor;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Exceptions\Action_Exception;

abstract class Base_Executor {

	private $event;

	abstract public function is_supported(): bool;

	public function before_execute() {
	}

	public function after_execute() {
	}

	/**
	 * @throws Action_Exception
	 */
	final public function execute() {
		/*
		 * Here you can set custom hooks or validate actions.
		 *
		 * By default all actions is executed,
		 * even if they should run on another event
		 */
		$this->before_execute();

		// execute all actions
		$this->execute_actions();

		$this->after_execute();
	}

	protected function validate_actions() {
		$actions = jet_fb_action_handler()->get_all();

		foreach ( $actions as $action ) {
			$this->validate_action( $action );
		}
	}

	protected function validate_action( Base $action ) {
		$events = $action->get_events();

		if ( ! $events || ! count( $events ) || ! $events->in_array( $this->event ) ) {
			$action->unregister();
		}
	}

	/**
	 * @throws Action_Exception
	 */
	protected function execute_actions() {
		( new Action_Default_Executor() )->run_actions();
	}

	final public function set_event( Base_Event $event ): Base_Executor {
		$this->event = $event;

		return $this;
	}

}