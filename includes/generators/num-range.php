<?php

namespace Jet_Form_Builder\Generators;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Num_Range extends Base {

	/**
	 * Returns generator ID
	 *
	 * @return string
	 */
	public function get_id() {
		return 'num_range';
	}

	/**
	 * Returns generator name
	 *
	 * @return string
	 */
	public function get_name() {
		return __( 'Numbers range by meta value', 'jet-form-builder' );
	}

	/**
	 * Returns generated options list
	 *
	 * @param $args
	 *
	 * @return array
	 */
	public function generate( $args ) {

		$result = array();

		if ( ! $args['generator_field'] ) {
			return $result;
		}

		$meta_value = get_post_meta( get_the_ID(), $args['generator_field'], true );
		$meta_value = absint( $meta_value );

		if ( ! $meta_value ) {
			return $result;
		}

		$start = apply_filters(
			'jet-form-builder/forms/generators/num-range/start-from',
			1,
			$args,
			$meta_value
		);

		for ( $i = $start; $i <= $meta_value; $i++ ) {
			$result[] = array(
				'value' => $i,
				'label' => $i,
			);
		}

		return $result;
	}

}
