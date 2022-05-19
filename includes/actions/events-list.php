<?php


namespace Jet_Form_Builder\Actions;

use Jet_Form_Builder\Actions\Events\Base_Event;

class Events_List implements \ArrayAccess, \Countable {

	private $events;

	public function __construct( array $events ) {
		$this->events = $events;
	}

	public function in_array( $event ): bool {
		return in_array( $this->get_slug( $event ), $this->events, true );
	}

	public function add( $event ): Events_List {
		$this->events[] = $this->get_slug( $event );

		return $this;
	}

	protected function get_slug( $event ): string {
		return ( $event instanceof Base_Event ) ? $event::get_slug() : $event;
	}

	/**
	 * @param mixed $offset
	 *
	 * @return bool
	 */
	public function offsetExists( $offset ) {
		return isset( $this->events[ $offset ] );
	}

	/**
	 * @param mixed $offset
	 *
	 * @return mixed
	 */
	public function offsetGet( $offset ) {
		return $this->events[ $offset ] ?? null;
	}

	/**
	 * @param mixed $offset
	 * @param mixed $value
	 */
	public function offsetSet( $offset, $value ) {
		if ( is_null( $offset ) ) {
			$this->events[] = $value;
		} else {
			$this->events[ $offset ] = $value;
		}
	}

	/**
	 * @param mixed $offset
	 */
	public function offsetUnset( $offset ) {
		unset( $this->events[ $offset ] );
	}

	/**
	 * @return int
	 */
	public function count() {
		return count( $this->events );
	}
}
