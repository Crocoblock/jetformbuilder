<?php

namespace Jet_Form_Builder\Generators;

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
	 * @return array
	 */
	abstract public function generate( $field );

	public function can_generate() {
		return true;
	}

}
