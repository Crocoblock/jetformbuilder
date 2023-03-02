<?php

namespace Jet_Form_Builder\Generators;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base {

	/**
	 * Returns generator ID
	 *
	 * @return [type] [description]
	 */
	abstract public function get_id();

	/**
	 * Returns generator name
	 *
	 * @return [type] [description]
	 */
	abstract public function get_name();

	/**
	 * Returns generated options list
	 *
	 * @param $args
	 *
	 * @return array
	 */
	abstract public function generate( $args );

	public function can_generate() {
		return true;
	}

	public function incoming_args() {
		return array(
			'generator_field' => function ( $value ) {
				return $value;
			},
		);
	}

	public function get_values( $args ) {
		$fields = array();

		foreach ( $this->incoming_args() as $name => $parse_callable ) {
			$fields[ $name ] = isset( $args[ $name ] ) ? call_user_func( $parse_callable, $args[ $name ] ) : false;
		}

		return $this->generate( $fields );
	}

}
