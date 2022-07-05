<?php

namespace Jet_Form_Builder\Blocks\Render;

// If this file is called directly, abort.
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Live_Form;

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

	public function render_editor_placeholder() {
		return Tools::is_editor() ? '25.00' : '';
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

		$formula = preg_replace_callback(
			'/%([a-zA-Z-_]+)::([a-zA-Z0-9-_]+)%/',
			function ( $matches ) {
				switch ( strtolower( $matches[1] ) ) {
					case 'field':
						return '%' . $matches[2] . '%';

					case 'meta':
						return get_post_meta( Live_Form::instance()->post->ID, $matches[2], true );

					default:
						$macros_name = $matches[1];

						return apply_filters( "jet-engine/calculated-data/$macros_name", $matches[0], $matches );
				}
			},
			$args['calc_formula']
		);

		return str_replace( '^', '**', $formula );
	}

}
