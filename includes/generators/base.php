<?php
namespace Jet_Engine\Forms\Generators;

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

}
