<?php


namespace Jet_Form_Builder\Classes\Arrayable;


use Jet_Form_Builder\Classes\Repository\Repository_Item_Dynamic_Id;

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
			if ( $state instanceof Repository_Item_Dynamic_Id ) {
				return $this->in_array_by_dynamic( $state );
			}
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

	protected function in_array_by_dynamic( Repository_Item_Dynamic_Id $object ): bool {
		foreach ( $this as $state ) {
			if ( ! is_a( $state, Repository_Item_Dynamic_Id::class ) ) {
				continue;
			}
			if ( $state->get_dynamic_id() === $object->get_dynamic_id() ) {
				return true;
			}
		}

		return false;
	}

	public function add( $item ): Collection {
		$this->items[] = $item;

		if ( ! is_a( $item, Collection_Item_Interface::class ) ) {
			return $this;
		}

		return $this->add_to_group( $item );
	}

	public function replace( $item ): Collection {
		if ( ! is_a( $item, Collection_Item_Interface::class ) ) {
			return $this;
		}
		$this->items[]                   = $item;
		$this->groups[ $item->get_id() ] = array();

		return $this->add_to_group( $item );
	}

	public function delete( $position ): Collection {
		/** @var Collection_Item_Interface $item */
		$item = $this->items[ $position ];

		unset( $this->groups[ $item->get_id() ] );
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
			$this->add_to_group( $item );
		}
	}

	protected function add_to_group( $item ): Collection {
		if ( ! isset( $this->groups[ $item->get_id() ] ) ) {
			$this->groups[ $item->get_id() ] = array();
		}
		$this->groups[ $item->get_id() ][] = $item;

		return $this;
	}

	public function all(): array {
		return $this->items;
	}

	public function remove( ...$positions ) {
		if ( is_array( $positions[0] ) ) {
			$positions = $positions[0];
		}
		foreach ( $positions as $position ) {
			$this->delete( $position );
		}
		$this->items = array_values( $this->items );
	}

	/*
	 * \Iterator
	 */

	/**
	 * @return mixed
	 */
	#[\ReturnTypeWillChange]
	public function current() {
		return $this->items[ $this->position ];
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
		return isset( $this->items[ $this->position ] );
	}

	#[\ReturnTypeWillChange]
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
	public function offsetExists( $offset ): bool {
		return isset( $this->items[ $offset ] );
	}

	/**
	 * @param mixed $offset
	 *
	 * @return mixed
	 */
	#[\ReturnTypeWillChange]
	public function offsetGet( $offset ) {
		return $this->items[ $offset ] ?? null;
	}

	/**
	 * @param mixed $offset
	 * @param mixed $value
	 */
	#[\ReturnTypeWillChange]
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
	#[\ReturnTypeWillChange]
	public function offsetUnset( $offset ) {
		$this->delete( $offset );
		$this->items = array_values( $this->items );
	}

	/*
	 * \Countable
	 */

	public function count(): int {
		return count( $this->items );
	}

}