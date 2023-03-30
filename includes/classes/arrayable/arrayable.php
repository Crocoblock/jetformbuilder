<?php


namespace Jet_Form_Builder\Classes\Arrayable;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Arrayable {

	/**
	 * Get the instance as an array.
	 *
	 * @return array
	 */
	public function to_array(): array;

}
