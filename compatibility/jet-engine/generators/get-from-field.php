<?php
/**
 * JetEngine Field Options Generator with schema support.
 *
 * @package JFB_Compatibility\Jet_Engine\Generators
 */

namespace JFB_Compatibility\Jet_Engine\Generators;

use Jet_Form_Builder\Generators\Base_V2;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Get_From_Field class.
 *
 * Gets options from JetEngine meta field definitions.
 */
class Get_From_Field extends Base_V2 {

	/**
	 * Returns generator ID.
	 *
	 * @return string
	 */
	public function get_id() {
		return 'get_from_field';
	}

	/**
	 * Returns generator name.
	 *
	 * @return string
	 */
	public function get_name() {
		return __( 'Get values list from JetEngine field options', 'jet-form-builder' );
	}

	/**
	 * Returns structured settings schema.
	 *
	 * @return array
	 */
	public function get_settings_schema(): array {
		return array(
			'field_name' => array(
				'type'        => 'string',
				'default'     => '',
				'label'       => __( 'Option name', 'jet-form-builder' ),
				'control'     => 'select',
				'options'     => $this->get_fields_for_select(),
				'required'    => true,
				'help'        => __( 'Select a JetEngine meta field to get options from.', 'jet-form-builder' ),
			),
			'sub_field' => array(
				'type'        => 'string',
				'default'     => '',
				'label'       => __( 'Repeater Sub-field', 'jet-form-builder' ),
				'control'     => 'text',
				'placeholder' => '',
				'help'        => __( 'Optional. For repeater fields, specify the sub-field name.', 'jet-form-builder' ),
			),
		);
	}

	/**
	 * Get available JetEngine fields for select control.
	 *
	 * @return array
	 */
	private function get_fields_for_select(): array {
		$options = array(
			array(
				'value' => '',
				'label' => __( '-- Select Field --', 'jet-form-builder' ),
			),
		);

		if ( ! function_exists( 'jet_engine' ) || ! jet_engine()->meta_boxes ) {
			return $options;
		}

		$all_fields = jet_engine()->meta_boxes->get_registered_fields();

		foreach ( $all_fields as $object => $fields ) {
			foreach ( $fields as $field_data ) {
				if ( empty( $field_data['name'] ) ) {
					continue;
				}

				// Check if field has options directly
				$has_options = ! empty( $field_data['options'] ) ||
				               'manual_bulk' === ( $field_data['options_source'] ?? '' );

				// Also check if it's a repeater with sub-fields that have options
				if ( ! $has_options && ! empty( $field_data['repeater-fields'] ) ) {
					$has_options = $this->repeater_has_options( $field_data['repeater-fields'] );
				}

				if ( $has_options ) {
					$options[] = array(
						'value' => $field_data['name'],
						'label' => $field_data['title'] ?? $field_data['name'],
					);
				}
			}
		}

		return $options;
	}

	/**
	 * Check if repeater sub-fields have options.
	 *
	 * @param array $repeater_fields Repeater sub-fields array.
	 *
	 * @return bool
	 */
	private function repeater_has_options( array $repeater_fields ): bool {
		foreach ( $repeater_fields as $sub_field ) {
			if ( ! empty( $sub_field['options'] ) ||
			     'manual_bulk' === ( $sub_field['options_source'] ?? '' ) ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Check if generator can generate options.
	 *
	 * @return bool
	 */
	public function can_generate() {
		return function_exists( 'jet_engine' ) && jet_engine()->meta_boxes;
	}

	/**
	 * Returns generated options list.
	 *
	 * @param array|string $args Settings array or legacy pipe-delimited string.
	 *
	 * @return array
	 */
	public function generate( $args ) {
		$result = array();

		// Handle legacy string format (pipe-delimited: "field_name|sub_field")
		if ( is_string( $args ) ) {
			$parse_field = explode( '|', $args );
			$field_name  = $parse_field[0] ?? '';
			$sub_field   = $parse_field[1] ?? '';
		} elseif ( is_array( $args ) ) {
			// New structured format
			$field_name = $args['field_name'] ?? '';
			$sub_field  = $args['sub_field'] ?? '';

			// Legacy format support: check for generator_field
			if ( empty( $field_name ) && ! empty( $args['generator_field'] ) ) {
				$parse_field = explode( '|', $args['generator_field'] );
				$field_name  = $parse_field[0] ?? '';
				$sub_field   = $parse_field[1] ?? '';
			}
		} else {
			return $result;
		}

		if ( empty( $field_name ) ) {
			return $result;
		}

		$all_fields  = jet_engine()->meta_boxes->get_registered_fields();
		$found_field = null;

		foreach ( $all_fields as $object => $fields ) {
			foreach ( $fields as $field_data ) {
				if ( ! empty( $field_data['name'] ) && $field_name === $field_data['name'] ) {
					$found_field = $field_data;
					break 2;
				}
			}
		}

		if ( ! empty( $sub_field ) && ! empty( $found_field['repeater-fields'] ) ) {
			foreach ( $found_field['repeater-fields'] as $repeater_field_data ) {
				if ( ! empty( $repeater_field_data['name'] ) && $sub_field === $repeater_field_data['name'] ) {
					$found_field = $repeater_field_data;
					break;
				}
			}
		}

		if ( ! empty( $found_field ) && 'manual_bulk' === ( $found_field['options_source'] ?? '' ) ) {
			return iterator_to_array(
				$this->get_form_bulk_options( $found_field )
			);
		}

		if ( empty( $found_field['options'] ) ) {
			return $result;
		}

		foreach ( $found_field['options'] as $option ) {
			$result[] = array(
				'value' => $option['key'],
				'label' => $option['value'],
			);
		}

		return $result;
	}

	/**
	 * Parse bulk options from field definition.
	 *
	 * @param array $field Field definition.
	 *
	 * @return \Generator
	 */
	private function get_form_bulk_options( array $field ): \Generator {
		$options = $field['bulk_options'] ?? '';

		if ( ! $options ) {
			return;
		}

		$options = explode( "\n", $options );

		foreach ( $options as $option ) {
			$parts = explode( '::', $option );

			yield array(
				'value' => $parts[0],
				'label' => $parts[1] ?? $parts[0],
			);
		}
	}
}
