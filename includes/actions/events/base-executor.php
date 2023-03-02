<?php


namespace Jet_Form_Builder\Actions\Events;

use Jet_Form_Builder\Actions\Events_List;
use Jet_Form_Builder\Actions\Events_Manager;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Exceptions\Action_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Executor implements \ArrayAccess, \Iterator, \Countable {

	/** @var Base_Event */
	private $event;
	private $action_ids = array();
	private $position   = 0;

	abstract public function is_supported(): bool;

	public function before_execute() {
		$this->validate_actions();
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
		$this->action_ids = array();
		$actions          = jet_fb_action_handler()->get_all();

		foreach ( $actions as $action ) {
			if ( ! $this->is_valid_action( $action ) ) {
				continue;
			}
			$action->on_validate( $this );

			$this->action_ids[] = $action->_id;
		}
	}

	/**
	 * @throws Action_Exception
	 */
	protected function execute_actions() {
		jet_fb_action_handler()->soft_run_actions( $this );
	}

	protected function is_valid_action( Base $action ): bool {
		return $this->get_event()->is_valid_action( $action );
	}

	final public function set_event( Base_Event $event ): Base_Executor {
		$this->event = $event;

		return $this;
	}

	/**
	 * @return Base_Event
	 */
	public function get_event(): Base_Event {
		return $this->event;
	}

	/**
	 * @return Base
	 */
	#[\ReturnTypeWillChange]
	public function current() {
		return jet_fb_action_handler()->get_action_by_id(
			$this->action_ids[ $this->position ] ?? 0
		);
	}

	#[\ReturnTypeWillChange]
	public function next() {
		++ $this->position;
	}

	/**
	 * @return bool|float|int|string|null
	 */
	#[\ReturnTypeWillChange]
	public function key() {
		return $this->position;
	}

	/**
	 * @return bool
	 */
	public function valid(): bool {
		return isset( $this->action_ids[ $this->position ] );
	}

	#[\ReturnTypeWillChange]
	public function rewind() {
		$this->position = 0;
	}

	/**
	 * @param mixed $offset
	 *
	 * @return bool
	 */
	public function offsetExists( $offset ): bool {
		return isset( jet_fb_action_handler()->form_actions[ $offset ] );
	}

	/**
	 * @param mixed $offset
	 *
	 * @return mixed
	 */
	#[\ReturnTypeWillChange]
	public function offsetGet( $offset ) {
		return jet_fb_action_handler()->get_action_by_id( $offset );
	}

	/**
	 * @param mixed $offset
	 * @param mixed $value
	 */
	#[\ReturnTypeWillChange]
	public function offsetSet( $offset, $value ) {
	}

	/**
	 * @param mixed $offset
	 */
	#[\ReturnTypeWillChange]
	public function offsetUnset( $offset ) {
		jet_fb_action_handler()->get_action_by_id( $offset )->unregister();
	}

	/**
	 * @return int
	 */
	public function count(): int {
		return count( $this->action_ids );
	}
}
