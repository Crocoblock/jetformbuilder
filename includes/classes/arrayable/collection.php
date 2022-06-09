<?php


namespace Jet_Form_Builder\Classes\Arrayable;


class Collection implements \Iterator, \Countable {

	private $position = 0;
	private $items;

	public function __construct( array $items = array() ) {
		$this->items = $items;
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
	\Iterator
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
	\Countable
	*/

	/**
	 * @return int
	 */
	public function count() {
		return count( $this->items );
	}

}