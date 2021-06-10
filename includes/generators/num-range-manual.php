<?php

namespace Jet_Form_Builder\Generators;

class Num_Range_Manual extends Base {

	/**
	 * Returns generator ID
	 *
	 * @return string
	 */
	public function get_id() {
		return 'num_range_manual';
	}

	/**
	 * Returns generator name
	 *
	 * @return string
	 */
	public function get_name() {
		return __( 'Numbers range by manual input', 'jet-form-builder' );
	}

	public function incoming_args() {
		return array(
			'generator_numbers_min'  => 'floatval',
			'generator_numbers_max'  => 'floatval',
			'generator_numbers_step' => 'floatval'
		);
	}

	/**
	 * Returns generated options list
	 *
	 * @param array $args
	 *
	 * @return array
	 */
	public function generate( array $args ) {
		$result = array();

		if ( $args['generator_numbers_min'] >= $args['generator_numbers_max'] ) {
			return $result;
		}

		for (
			$i = $args['generator_numbers_min'];
			$i <= $args['generator_numbers_max'];
			$i += $args['generator_numbers_step']
		) {
			$result[] = array(
				'value' => $i,
				'label' => $i,
			);
		}


		return $result;
	}

}
