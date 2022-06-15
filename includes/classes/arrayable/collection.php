<?php


namespace Jet_Form_Builder\Classes\Arrayable;


class Collection implements \Iterator, \Countable, \ArrayAccess {

	private $position = 0;
	private $items;

	public function __construct( array $items = array() ) {
		$this->items = $items;
	}

	public function intersect( $list_of_states ): bool {
		foreach ( $list_of_states as $state ) {
			if ( $this->in_array( $state ) ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * @param $state
	 *
	 * @return bool
	 */
	public function in_array( $state ): bool {
		if ( is_object( $state ) ) {
			$state = get_class( $state );
		}

		if ( class_exists( $state ) ) {
			return $this->in_array_by_class( $state );
		}

		return $this->in_array_by_id( $state );
	}

	protected function in_array_by_class( $state_class ): bool {
		foreach ( $this as $state ) {
			if ( is_a( $state, $state_class ) ) {
				return true;
			}
		}

		return false;
	}

	protected function in_array_by_id( $state_class ): bool {
		/** @var Collection_Item_Interface $state */
		foreach ( $this as $state ) {
			if ( ! ( $state instanceof Collection_Item_Interface ) ) {
				continue;
			}
			if ( $state->get_id() !== $state_class ) {
				return true;
			}
		}

		return false;
	}

	public function add( $item ): Collection {
		$this->items[] = $item;

		return $this;
	}

	public function delete( $position ): Collection {
		unset( $this->items[ $position ] );

		return $this;
	}

	/*
	 * \Iterator
	 */

	/**
	 * @return mixed
	 */
	public function current() {
		return $this->items[ $this->position ];
	}


	public function next() {
		++ $this->position;
	}

	/**
	 * @return bool|float|int|string|null
	 */
	public function key() {
		return $this->position;
	}

	/**
	 * @return bool
	 */
	public function valid() {
		return isset( $this->items[ $this->position ] );
	}

	public function rewind() {
		$this->position = 0;
	}

	/*
	 * \ArrayAccess
	 */

	/**
	 * @param mixed $offset
	 *
	 * @return bool
	 */
	public function offsetExists( $offset ) {
		return isset( $this->items[ $offset ] );
	}

	/**
	 * @param mixed $offset
	 *
	 * @return mixed
	 */
	public function offsetGet( $offset ) {
		return $this->items[ $offset ] ?? null;
	}

	/**
	 * @param mixed $offset
	 * @param mixed $value
	 */
	public function offsetSet( $offset, $value ) {
		if ( is_null( $offset ) ) {
			$this->items[] = $value;
		} else {
			$this->items[ $offset ] = $value;
		}
	}

	/**
	 * @param mixed $offset
	 */
	public function offsetUnset( $offset ) {
		unset( $this->items[ $offset ] );
	}

	/*
	 * \Countable
	 */

	/**
	 * @return int
	 */
	public function count() {
		return count( $this->items );
	}

}