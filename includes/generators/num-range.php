<?php
/**
 * Numbers Range by Meta Value Generator with schema support.
 *
 * @package Jet_Form_Builder\Generators
 */

namespace Jet_Form_Builder\Generators;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Num_Range class.
 *
 * Generates a list of numbers from 1 to the value stored in a post meta field.
 */
class Num_Range extends Base_V2 {

	/**
	 * Returns generator ID.
	 *
	 * @return string
	 */
	public function get_id() {
		return 'num_range';
	}

	/**
	 * Returns generator name.
	 *
	 * @return string
	 */
	public function get_name() {
		return __( 'Numbers range by meta value', 'jet-form-builder' );
	}

	/**
	 * Returns structured settings schema.
	 *
	 * @return array
	 */
	public function get_settings_schema(): array {
		return array(
			'meta_key' => array(
				'type'        => 'string',
				'default'     => '',
				'label'       => __( 'Meta Key', 'jet-form-builder' ),
				'control'     => 'text',
				'required'    => true,
				'placeholder' => '_max_quantity',
				'help'        => __( 'Enter the meta key containing the maximum number for the range.', 'jet-form-builder' ),
			),
		);
	}

	/**
	 * Returns generated options list.
	 *
	 * @param array|string $args Settings array or legacy string.
	 *
	 * @return array
	 */
	public function generate( $args ) {
		$result = array();

		// Handle both new array format and legacy string/array format
		if ( is_string( $args ) ) {
			$meta_key = $args;
		} elseif ( is_array( $args ) ) {
			// New schema format
			$meta_key = $args['meta_key'] ?? '';

			// Legacy format support
			if ( empty( $meta_key ) && ! empty( $args['generator_field'] ) ) {
				$meta_key = $args['generator_field'];
			}
		} else {
			return $result;
		}

		if ( empty( $meta_key ) ) {
			return $result;
		}

		$meta_value = get_post_meta( get_the_ID(), $meta_key, true );
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
