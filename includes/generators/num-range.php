<?php
namespace Jet_Engine\Forms\Generators;

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
		return __( 'Numbers range', 'jet-engine' );
	}

	/**
	 * Returns generated options list
	 *
	 * @return array
	 */
	public function generate( $field ) {

		$result = array();

		if ( ! $field ) {
			return $result;
		}

		$meta_value = get_post_meta( get_the_ID(), $field, true );
		$meta_value = absint( $meta_value );

		if ( ! $meta_value ) {
			return $result;
		}

		$start = apply_filters( 'jet-engine/forms/generators/num-range/start-from', 1 );

		for ( $i = $start; $i <= $meta_value; $i++ ) {
			$result[] = array(
				'value' => $i,
				'label' => $i,
			);
		}

		return $result;
	}

}
