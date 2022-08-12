<?php


namespace Jet_Form_Builder\Classes\Arrayable;


class Collection implements \Iterator, \Countable, \ArrayAccess {

	protected $position = 0;
	protected $items;
	protected $groups   = array();

	public function __construct( array $items = array() ) {
		$this->items = $items;
		$this->group_items();
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

		return array_key_exists( $state, $this->groups );
	}

	protected function in_array_by_class( $state_class ): bool {
		foreach ( $this as $state ) {
			if ( is_a( $state, $state_class ) ) {
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

	public function has_by_id( string $id ): bool {
		return $this->get_by_id( $id )->valid();
	}

	public function get_by_ids( array $ids ): \Generator {
		foreach ( $ids as $id ) {
			yield from $this->get_by_id( $id );
		}
	}

	public function get_by_id( string $id ): \Generator {
		$group = $this->groups[ $id ] ?? array();

		foreach ( $group as $property ) {
			yield $property;
		}
	}

	public function group_items() {
		/** @var Collection_Item_Interface $item */
		foreach ( $this->items as $item ) {
			if ( ! is_a( $item, Collection_Item_Interface::class ) ) {
				continue;
			}
			if ( ! isset( $this->groups[ $item->get_id() ] ) ) {
				$this->groups[ $item->get_id() ] = array();
			}
			$this->groups[ $item->get_id() ][] = $item;
		}
	}

	public function all(): array {
		return $this->items;
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