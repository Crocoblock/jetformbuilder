<?php

namespace Jet_Form_Builder\Blocks\Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define text field renderer class
 */
class Calculated_Field_Render extends Base {

	public function get_name() {
		return 'calculated-field';
	}

	/**
	 * Get calulation formula for calculated field
	 *
	 * @return [type] [description]
	 */
	public function get_calculated_data( $args ) {

		if ( empty( $args['calc_formula'] ) ) {
			return '';
		}

		$listen_fields = array();

		$formula = preg_replace_callback(
			'/%([a-zA-Z-_]+)::([a-zA-Z0-9-_]+)%/',
			function ( $matches ) use ( &$listen_fields ) {

				switch ( strtolower( $matches[1] ) ) {
					case 'field':

						$listen_fields[] = $matches[2];

						return '%' . $matches[2] . '%';

					case 'meta':

						return get_post_meta( $this->post->ID, $matches[2], true );

					default:
						$macros_name = $matches[1];
						$field_key   = isset( $matches[2] ) ? $matches[2] : '';

						if ( $field_key ) {
							$listen_fields[] = $field_key;
						}

						return apply_filters( "jet-engine/calculated-data/$macros_name", $matches[0], $matches );
				}

			},
			$args['calc_formula']
		);

		return array(
			'formula'       => $formula,
			'listen_fields' => $listen_fields,
			'listen_to'     => $listen_fields,
		);

	}

}
