<?php
/**
 * Numbers Range Manual Generator with schema support.
 *
 * @package Jet_Form_Builder\Generators
 */

namespace Jet_Form_Builder\Generators;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Num_Range_Manual class.
 *
 * Generates a list of numbers from min to max with specified step.
 */
class Num_Range_Manual extends Base_V2 {

	/**
	 * Returns generator ID.
	 *
	 * @return string
	 */
	public function get_id() {
		return 'num_range_manual';
	}

	/**
	 * Returns generator name.
	 *
	 * @return string
	 */
	public function get_name() {
		return __( 'Numbers range by manual input', 'jet-form-builder' );
	}

	/**
	 * Returns structured settings schema.
	 *
	 * Note: Uses existing attribute names (generator_numbers_*) for backward compatibility
	 * with block.json which already has these attributes defined.
	 *
	 * @return array
	 */
	public function get_settings_schema(): array {
		return array(
			'generator_numbers_min'  => array(
				'type'    => 'number',
				'default' => 1,
				'label'   => __( 'Start of range', 'jet-form-builder' ),
				'control' => 'number',
				'step'    => 0.01,
				'help'    => __( 'The minimum value of the range.', 'jet-form-builder' ),
			),
			'generator_numbers_max'  => array(
				'type'    => 'number',
				'default' => 10,
				'label'   => __( 'End of range', 'jet-form-builder' ),
				'control' => 'number',
				'step'    => 0.01,
				'help'    => __( 'The maximum value of the range.', 'jet-form-builder' ),
			),
			'generator_numbers_step' => array(
				'type'    => 'number',
				'default' => 1,
				'label'   => __( 'Step', 'jet-form-builder' ),
				'control' => 'number',
				'step'    => 0.01,
				'min'     => 0.01,
				'help'    => __( 'The increment between each value.', 'jet-form-builder' ),
			),
		);
	}

	/**
	 * Override get_values to read from direct attributes.
	 *
	 * Num_Range_Manual uses direct block attributes (generator_numbers_*)
	 * instead of generator_args, so we need special handling.
	 *
	 * @param array $args Block attributes.
	 *
	 * @return array Generated options.
	 */
	public function get_values( $args ) {
		// For this generator, read directly from block attributes
		// since the schema uses existing attribute names
		$settings = array(
			'generator_numbers_min'  => isset( $args['generator_numbers_min'] ) ? floatval( $args['generator_numbers_min'] ) : 1,
			'generator_numbers_max'  => isset( $args['generator_numbers_max'] ) ? floatval( $args['generator_numbers_max'] ) : 10,
			'generator_numbers_step' => isset( $args['generator_numbers_step'] ) ? floatval( $args['generator_numbers_step'] ) : 1,
		);

		// Also check generator_args for new format
		if ( ! empty( $args['generator_args'] ) && is_array( $args['generator_args'] ) ) {
			if ( isset( $args['generator_args']['generator_numbers_min'] ) ) {
				$settings['generator_numbers_min'] = floatval( $args['generator_args']['generator_numbers_min'] );
			}
			if ( isset( $args['generator_args']['generator_numbers_max'] ) ) {
				$settings['generator_numbers_max'] = floatval( $args['generator_args']['generator_numbers_max'] );
			}
			if ( isset( $args['generator_args']['generator_numbers_step'] ) ) {
				$settings['generator_numbers_step'] = floatval( $args['generator_args']['generator_numbers_step'] );
			}
		}

		return $this->generate( $settings );
	}

	/**
	 * Returns generated options list.
	 *
	 * @param array $args Settings with generator_numbers_min, generator_numbers_max, generator_numbers_step.
	 *
	 * @return array
	 */
	public function generate( $args ) {
		$result = array();

		$min  = $args['generator_numbers_min'] ?? 1;
		$max  = $args['generator_numbers_max'] ?? 10;
		$step = $args['generator_numbers_step'] ?? 1;

		// Ensure step is positive
		if ( $step <= 0 ) {
			$step = 1;
		}

		if ( $min >= $max ) {
			return $result;
		}

		for ( $i = $min; $i <= $max; $i += $step ) {
			// Format number to remove floating point errors
			$formatted = ( floor( $i ) == $i ) ? (int) $i : round( $i, 2 );

			$result[] = array(
				'value' => $formatted,
				'label' => $formatted,
			);
		}

		return $result;
	}
}
