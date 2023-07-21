<?php


namespace Jet_Form_Builder\Actions;

// If this file is called directly, abort.
use JFB_Modules\Block_Parsers\Field_Data_Parser;

if ( ! defined( 'WPINC' ) ) {
	die;
}

class Legacy_Request_Data implements \Iterator, \ArrayAccess {

	/**
	 * @return mixed
	 */
	#[\ReturnTypeWillChange]
	public function current() {
		$parser = current( jet_fb_context()->parsers );

		return ( $parser instanceof Field_Data_Parser ) ? $parser->get_value() : $parser;
	}

	#[\ReturnTypeWillChange]
	public function next() {
		next( jet_fb_context()->parsers );
	}

	/**
	 * @return bool|float|int|string|null
	 */
	#[\ReturnTypeWillChange]
	public function key() {
		return key( jet_fb_context()->parsers );
	}

	/**
	 * @return bool
	 */
	public function valid(): bool {
		return $this->key() !== null;
	}

	#[\ReturnTypeWillChange]
	public function rewind() {
		reset( jet_fb_context()->parsers );
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
		return jet_fb_context()->has_field( $offset );
	}

	/**
	 * @param mixed $offset
	 *
	 * @return mixed
	 */
	#[\ReturnTypeWillChange]
	public function offsetGet( $offset ) {
		return jet_fb_context()->get_value( $offset );
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

		jet_fb_context()->update_request( $value, $offset );
	}

	/**
	 * @param mixed $offset
	 */
	#[\ReturnTypeWillChange]
	public function offsetUnset( $offset ) {
		jet_fb_context()->remove( $offset );
	}

}
