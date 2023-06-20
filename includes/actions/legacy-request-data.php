<?php


namespace Jet_Form_Builder\Actions;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Legacy_Request_Data  implements \Iterator, \ArrayAccess {

	/**
	 * @return mixed
	 */
	#[\ReturnTypeWillChange]
	public function current() {
		return current( jet_fb_request_handler()->get_context()->__danger_parsers );
	}

	#[\ReturnTypeWillChange]
	public function next() {
		next( jet_fb_request_handler()->get_context()->__danger_parsers );
	}

	/**
	 * @return bool|float|int|string|null
	 */
	#[\ReturnTypeWillChange]
	public function key() {
		return key( jet_fb_request_handler()->get_context()->__danger_parsers );
	}

	/**
	 * @return bool
	 */
	public function valid(): bool {
		return $this->key() !== null;
	}

	#[\ReturnTypeWillChange]
	public function rewind() {
		reset( jet_fb_request_handler()->get_context()->__danger_parsers );
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
		return jet_fb_request_handler()->get_context()->has_field( $offset );
	}

	/**
	 * @param mixed $offset
	 *
	 * @return mixed
	 */
	#[\ReturnTypeWillChange]
	public function offsetGet( $offset ) {
		return jet_fb_request_handler()->get_context()->get_value( $offset );
	}

	/**
	 * @param mixed $offset
	 * @param mixed $value
	 */
	#[\ReturnTypeWillChange]
	public function offsetSet( $offset, $value ) {
		if ( is_null( $offset ) ) {
			return;
		}

		jet_fb_request_handler()->get_context()->update_request( $value, $offset );
	}

	/**
	 * @param mixed $offset
	 */
	#[\ReturnTypeWillChange]
	public function offsetUnset( $offset ) {
		jet_fb_request_handler()->get_context()->remove_field( $offset );
	}

}