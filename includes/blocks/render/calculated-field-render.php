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
		return Tools::is_editor() ? '25.00' : '0.00';
	}

	/**
	 * We do not need a <label> tag in any case,
	 * because there is no visual field in this field
	 * that can be referenced through the "for" attribute.
	 *
	 * @see https://github.com/Crocoblock/jetformbuilder/issues/356
	 */
	protected function get_fields_label_tag(): string {
		return 'div';
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

		$in_string = Tools::formula_macro_string_contexts( (string) $args['calc_formula'] );
		$index     = 0;

		$formula = preg_replace_callback(
			Tools::FORMULA_MACRO_PATTERN,
			function ( $matches ) use ( $in_string, &$index ) {
				$is_string = $in_string[ $index++ ] ?? false;

				switch ( strtolower( $matches[1] ) ) {
					case 'field':
						return '%' . $matches[2] . '%';

					case 'meta':
						// The value may be written by visitors: insert it as data.
						return Tools::calculated_meta_value( Live_Form::instance()->post->ID ?? 0, $matches[2], $is_string );

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
