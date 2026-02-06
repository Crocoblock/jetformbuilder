<?php
/**
 * Enhanced base class for option generators with structured settings support.
 *
 * @package Jet_Form_Builder\Generators
 */

namespace Jet_Form_Builder\Generators;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Base_V2 class - Enhanced generator base with schema support.
 *
 * Extends the original Base class to add:
 * - Structured settings schema for dynamic UI generation
 * - Support for cascading/auto-update fields
 * - Backward compatibility with legacy generators
 */
abstract class Base_V2 extends Base {

	/**
	 * Returns structured settings schema for this generator.
	 * Used for both editor UI generation and backend validation.
	 *
	 * Schema format:
	 * [
	 *     'field_key' => [
	 *         'type'        => 'string|number|boolean|array',
	 *         'default'     => mixed,
	 *         'label'       => string,
	 *         'control'     => 'text|number|select|toggle|textarea',
	 *         'help'        => string (optional),
	 *         'placeholder' => string (optional),
	 *         'required'    => bool (optional),
	 *         'options'     => array (for select control),
	 *         'min'         => number (for number control),
	 *         'max'         => number (for number control),
	 *         'step'        => number (for number control),
	 *     ],
	 * ]
	 *
	 * @return array Schema definition
	 */
	abstract public function get_settings_schema(): array;

	/**
	 * Returns block attributes definitions for this generator.
	 * Can be used to dynamically extend block.json attributes.
	 *
	 * @return array Attribute definitions compatible with block.json format
	 */
	public function get_block_attributes(): array {
		$attributes = array();

		foreach ( $this->get_settings_schema() as $key => $field ) {
			$attr_name = $this->get_attribute_name( $key );

			$attributes[ $attr_name ] = array(
				'type'    => $this->map_schema_type_to_block_type( $field['type'] ?? 'string' ),
				'default' => $field['default'] ?? $this->get_default_for_type( $field['type'] ?? 'string' ),
			);
		}

		return $attributes;
	}

	/**
	 * Maps schema type to WordPress block attribute type.
	 *
	 * @param string $type Schema type.
	 *
	 * @return string Block attribute type
	 */
	protected function map_schema_type_to_block_type( string $type ): string {
		$map = array(
			'string'  => 'string',
			'number'  => 'number',
			'boolean' => 'boolean',
			'array'   => 'array',
			'object'  => 'object',
		);

		return $map[ $type ] ?? 'string';
	}

	/**
	 * Returns default value for a given type.
	 *
	 * @param string $type Field type.
	 *
	 * @return mixed Default value
	 */
	protected function get_default_for_type( string $type ) {
		$defaults = array(
			'string'  => '',
			'number'  => 0,
			'boolean' => false,
			'array'   => array(),
			'object'  => array(),
		);

		return $defaults[ $type ] ?? '';
	}

	/**
	 * Generates attribute name prefixed with generator ID to avoid collisions.
	 *
	 * @param string $key Setting key from schema.
	 *
	 * @return string Prefixed attribute name
	 */
	public function get_attribute_name( string $key ): string {
		return 'gen_' . $this->get_id() . '_' . $key;
	}

	/**
	 * Parses settings from block attributes.
	 * Extracts generator-specific settings from prefixed attributes.
	 *
	 * @param array $block_attrs All block attributes.
	 *
	 * @return array Parsed settings with original keys (without prefix)
	 */
	public function parse_settings( array $block_attrs ): array {
		$settings = array();
		$prefix   = 'gen_' . $this->get_id() . '_';
		$schema   = $this->get_settings_schema();

		foreach ( $schema as $key => $field_def ) {
			$attr_name = $prefix . $key;

			if ( isset( $block_attrs[ $attr_name ] ) ) {
				$settings[ $key ] = $block_attrs[ $attr_name ];
			} else {
				// Use default from schema
				$settings[ $key ] = $field_def['default'] ?? $this->get_default_for_type( $field_def['type'] ?? 'string' );
			}
		}

		return $settings;
	}

	/**
	 * Validates settings against schema.
	 *
	 * @param array $settings Settings to validate.
	 *
	 * @return array Validation result ['valid' => bool, 'errors' => array]
	 */
	public function validate_settings( array $settings ): array {
		$errors = array();
		$schema = $this->get_settings_schema();

		foreach ( $schema as $key => $field_def ) {
			// Check required fields
			if ( ! empty( $field_def['required'] ) ) {
				if ( ! isset( $settings[ $key ] ) || '' === $settings[ $key ] ) {
					$errors[ $key ] = sprintf(
						/* translators: %s: field label */
						__( '%s is required.', 'jet-form-builder' ),
						$field_def['label'] ?? $key
					);
				}
			}

			// Type validation
			if ( isset( $settings[ $key ] ) && isset( $field_def['type'] ) ) {
				$value = $settings[ $key ];
				$type  = $field_def['type'];

				if ( 'number' === $type && ! is_numeric( $value ) && '' !== $value ) {
					$errors[ $key ] = sprintf(
						/* translators: %s: field label */
						__( '%s must be a number.', 'jet-form-builder' ),
						$field_def['label'] ?? $key
					);
				}
			}
		}

		return array(
			'valid'  => empty( $errors ),
			'errors' => $errors,
		);
	}

	/**
	 * Override incoming_args to use schema-based parsing.
	 * For backward compatibility, this still works with the old system.
	 *
	 * @return array
	 */
	public function incoming_args() {
		$args   = array();
		$schema = $this->get_settings_schema();

		foreach ( $schema as $key => $field_def ) {
			$attr_name    = $this->get_attribute_name( $key );
			$args[ $attr_name ] = $this->get_parse_callback_for_type( $field_def['type'] ?? 'string' );
		}

		return $args;
	}

	/**
	 * Returns parse callback for a given type.
	 *
	 * @param string $type Field type.
	 *
	 * @return callable Parse callback
	 */
	protected function get_parse_callback_for_type( string $type ): callable {
		switch ( $type ) {
			case 'number':
				return 'floatval';
			case 'boolean':
				return function ( $value ) {
					return filter_var( $value, FILTER_VALIDATE_BOOLEAN );
				};
			case 'array':
				return function ( $value ) {
					return is_array( $value ) ? $value : array();
				};
			default:
				return function ( $value ) {
					return (string) $value;
				};
		}
	}

	/**
	 * Override get_values to work with new schema system.
	 * Supports multiple data sources in priority order:
	 * 1. generator_args (object) - new preferred format
	 * 2. Prefixed attributes (gen_<id>_<key>) - intermediate format
	 * 3. generator_field (pipe-delimited string) - legacy format
	 *
	 * @param array $args Block attributes.
	 *
	 * @return array Generated options
	 */
	public function get_values( $args ) {
		error_log( '=== [BASE_V2] get_values() ===' );
		error_log( '[BASE_V2] Generator ID: ' . $this->get_id() );
		error_log( '[BASE_V2] Input $args keys: ' . print_r( array_keys( $args ), true ) );
		error_log( '[BASE_V2] generator_args: ' . print_r( $args['generator_args'] ?? 'NOT SET', true ) );
		error_log( '[BASE_V2] generator_field: ' . ( $args['generator_field'] ?? 'NOT SET' ) );

		// Priority 1: Check for generator_args object (new format)
		if ( ! empty( $args['generator_args'] ) && is_array( $args['generator_args'] ) ) {
			$settings = $this->parse_generator_args( $args['generator_args'] );
			error_log( '[BASE_V2] Priority 1: generator_args parsed: ' . print_r( $settings, true ) );
			error_log( '[BASE_V2] has_meaningful_values: ' . ( $this->has_meaningful_values( $settings ) ? 'YES' : 'NO' ) );
			if ( $this->has_meaningful_values( $settings ) ) {
				error_log( '[BASE_V2] Using Priority 1 (generator_args)' );
				$result = $this->generate( $settings );
				error_log( '[BASE_V2] generate() returned ' . count( $result ) . ' items' );
				return $result;
			}
		}

		// Priority 2: Try prefixed attributes
		$settings = $this->parse_settings( $args );
		error_log( '[BASE_V2] Priority 2: prefixed attrs parsed: ' . print_r( $settings, true ) );
		error_log( '[BASE_V2] has_meaningful_values: ' . ( $this->has_meaningful_values( $settings ) ? 'YES' : 'NO' ) );
		if ( $this->has_meaningful_values( $settings ) ) {
			error_log( '[BASE_V2] Using Priority 2 (prefixed attrs)' );
			$result = $this->generate( $settings );
			error_log( '[BASE_V2] generate() returned ' . count( $result ) . ' items' );
			return $result;
		}

		// Priority 3: Fall back to legacy generator_field (pipe-delimited)
		if ( ! empty( $args['generator_field'] ) ) {
			$legacy_input = $this->enrich_legacy_field( $args['generator_field'], $args );
			error_log( '[BASE_V2] Using Priority 3 (legacy generator_field): ' . print_r( $legacy_input, true ) );
			$result = $this->generate( $legacy_input );
			error_log( '[BASE_V2] generate() returned ' . count( $result ) . ' items' );
			return $result;
		}

		// No settings found, return empty
		error_log( '[BASE_V2] No meaningful settings found, calling generate with defaults' );
		$result = $this->generate( $settings );
		error_log( '[BASE_V2] generate() returned ' . count( $result ) . ' items' );
		error_log( '=== [BASE_V2] END ===' );
		return $result;
	}

	/**
	 * Enrich legacy generator_field with additional block attributes.
	 * Override in child classes to migrate legacy attrs into generate() input.
	 *
	 * @param string $generator_field Legacy pipe-delimited string.
	 * @param array  $block_attrs     All block attributes.
	 *
	 * @return mixed Enriched input for generate().
	 */
	protected function enrich_legacy_field( string $generator_field, array $block_attrs ) {
		return $generator_field;
	}

	/**
	 * Parse settings from generator_args object.
	 *
	 * @param array $generator_args Generator args object from block attributes.
	 *
	 * @return array Parsed settings with defaults applied.
	 */
	protected function parse_generator_args( array $generator_args ): array {
		$settings = array();
		$schema   = $this->get_settings_schema();

		foreach ( $schema as $key => $field_def ) {
			if ( isset( $generator_args[ $key ] ) ) {
				$settings[ $key ] = $generator_args[ $key ];
			} else {
				$settings[ $key ] = $field_def['default'] ?? $this->get_default_for_type( $field_def['type'] ?? 'string' );
			}
		}

		return $settings;
	}

	/**
	 * Check if settings contain meaningful (non-default) values.
	 *
	 * @param array $settings Settings array to check.
	 *
	 * @return bool True if has meaningful values.
	 */
	protected function has_meaningful_values( array $settings ): bool {
		$schema = $this->get_settings_schema();

		foreach ( $schema as $key => $field_def ) {
			$default = $field_def['default'] ?? $this->get_default_for_type( $field_def['type'] ?? 'string' );
			if ( isset( $settings[ $key ] ) && $settings[ $key ] !== $default && '' !== $settings[ $key ] ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Returns schema for JS localization.
	 * Includes all necessary data for editor UI generation.
	 *
	 * @return array Schema data for JavaScript
	 */
	public function get_schema_for_js(): array {
		return array(
			'id'     => $this->get_id(),
			'name'   => $this->get_name(),
			'schema' => $this->get_settings_schema(),
		);
	}
}
