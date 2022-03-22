<?php


namespace Jet_Form_Builder\Classes\Arrayable;

interface Arrayable {

	/**
	 * Get the instance as an array.
	 *
	 * @return array
	 */
	public function to_array(): array;

}