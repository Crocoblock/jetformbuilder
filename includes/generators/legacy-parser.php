<?php
/**
 * Legacy Parser - handles backward compatibility for old generator configurations.
 *
 * @package Jet_Form_Builder\Generators
 */

namespace Jet_Form_Builder\Generators;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Legacy_Parser class.
 *
 * Parses legacy macro-style configurations (e.g., "26|ID|post_title|calc_field")
 * and converts them to structured settings for the new generator system.
 */
class Legacy_Parser {

	/**
	 * Known generator IDs that use pipe-delimited macro format.
	 *
	 * @var array
	 */
	private static $pipe_delimited_generators = array(
		'get_from_query',
	);

	/**
	 * Parses legacy field value into structured settings.
	 *
	 * @param string $generator_id Generator ID.
	 * @param string $field_value  Legacy field value (may contain macros).
	 *
	 * @return array Parsed settings with proper keys.
	 */
	public static function parse_legacy_field( string $generator_id, string $field_value ): array {
		if ( empty( $field_value ) ) {
			return array();
		}

		// Check if this generator uses pipe-delimited format
		if ( in_array( $generator_id, self::$pipe_delimited_generators, true ) ) {
			return self::parse_pipe_delimited( $generator_id, $field_value );
		}

		// For all other generators, return as-is
		return array(
			'generator_field' => $field_value,
		);
	}

	/**
	 * Parses pipe-delimited macro format.
	 *
	 * @param string $generator_id Generator ID.
	 * @param string $value        Pipe-delimited value.
	 *
	 * @return array Parsed settings.
	 */
	private static function parse_pipe_delimited( string $generator_id, string $value ): array {
		switch ( $generator_id ) {
			case 'get_from_query':
				return self::parse_je_query_macro( $value );

			default:
				return array( 'generator_field' => $value );
		}
	}

	/**
	 * Parses JetEngine Query macro format.
	 *
	 * Format: "query_id|value_field|label_field|calc_field"
	 * Examples:
	 *   - "26|ID|post_title" (3 parts)
	 *   - "26|ID|post_title|price" (4 parts)
	 *
	 * @param string $value Pipe-delimited macro string.
	 *
	 * @return array Parsed settings.
	 */
	private static function parse_je_query_macro( string $value ): array {
		$parts = explode( '|', $value );

		return array(
			'query_id'    => $parts[0] ?? '',
			'value_field' => $parts[1] ?? 'ID',
			'label_field' => $parts[2] ?? 'post_title',
			'calc_field'  => $parts[3] ?? '',
		);
	}

	/**
	 * Checks if block attributes contain legacy data that needs migration.
	 *
	 * @param array $attrs Block attributes.
	 *
	 * @return bool True if migration is needed.
	 */
	public static function needs_migration( array $attrs ): bool {
		// Must have a generator function selected
		if ( empty( $attrs['generator_function'] ) ) {
			return false;
		}

		$generator_id = $attrs['generator_function'];

		// Check for pipe-delimited generators
		if ( in_array( $generator_id, self::$pipe_delimited_generators, true ) ) {
			// Has legacy field value with pipe delimiter
			if ( ! empty( $attrs['generator_field'] ) && strpos( $attrs['generator_field'], '|' ) !== false ) {
				// Check if new attributes don't exist yet
				$new_attr_prefix = 'gen_' . $generator_id . '_';
				foreach ( $attrs as $key => $val ) {
					if ( strpos( $key, $new_attr_prefix ) === 0 && ! empty( $val ) ) {
						return false; // Already migrated
					}
				}
				return true;
			}
		}

		return false;
	}

	/**
	 * Migrates legacy attributes to new format.
	 *
	 * @param array $attrs Original block attributes.
	 *
	 * @return array Migrated attributes.
	 */
	public static function migrate( array $attrs ): array {
		if ( ! self::needs_migration( $attrs ) ) {
			return $attrs;
		}

		$generator_id = $attrs['generator_function'];
		$legacy_value = $attrs['generator_field'] ?? '';

		// Parse legacy format
		$parsed = self::parse_legacy_field( $generator_id, $legacy_value );

		if ( empty( $parsed ) ) {
			return $attrs;
		}

		// Convert to new attribute format
		$new_attrs = $attrs;

		foreach ( $parsed as $key => $value ) {
			// Skip if it's the original generator_field
			if ( 'generator_field' === $key ) {
				continue;
			}

			$attr_name             = 'gen_' . $generator_id . '_' . $key;
			$new_attrs[ $attr_name ] = $value;
		}

		// Clear legacy field to prevent re-migration
		// Note: We keep the original value for backward compatibility
		// but new code should use the new attributes
		$new_attrs['_legacy_generator_field'] = $legacy_value;

		return $new_attrs;
	}

	/**
	 * Converts new structured settings back to legacy format.
	 * Useful for backward compatibility with third-party code.
	 *
	 * @param string $generator_id Generator ID.
	 * @param array  $settings     Structured settings.
	 *
	 * @return string Legacy format string.
	 */
	public static function to_legacy_format( string $generator_id, array $settings ): string {
		switch ( $generator_id ) {
			case 'get_from_query':
				$parts = array(
					$settings['query_id'] ?? '',
					$settings['value_field'] ?? 'ID',
					$settings['label_field'] ?? 'post_title',
				);

				// Add calc_field only if it exists
				if ( ! empty( $settings['calc_field'] ) ) {
					$parts[] = $settings['calc_field'];
				}

				return implode( '|', $parts );

			default:
				return $settings['generator_field'] ?? '';
		}
	}

	/**
	 * Extracts settings from block attributes, handling both legacy and new formats.
	 *
	 * @param string $generator_id Generator ID.
	 * @param array  $attrs        Block attributes.
	 *
	 * @return array Settings in structured format.
	 */
	public static function extract_settings( string $generator_id, array $attrs ): array {
		// First, try to get from new format
		$new_attr_prefix = 'gen_' . $generator_id . '_';
		$settings        = array();
		$has_new_format  = false;

		foreach ( $attrs as $key => $value ) {
			if ( strpos( $key, $new_attr_prefix ) === 0 ) {
				$setting_key              = substr( $key, strlen( $new_attr_prefix ) );
				$settings[ $setting_key ] = $value;
				$has_new_format           = true;
			}
		}

		if ( $has_new_format ) {
			return $settings;
		}

		// Fall back to legacy format
		if ( ! empty( $attrs['generator_field'] ) ) {
			return self::parse_legacy_field( $generator_id, $attrs['generator_field'] );
		}

		// Check for direct attributes (like num_range_manual)
		$legacy_attrs = array(
			'generator_numbers_min',
			'generator_numbers_max',
			'generator_numbers_step',
			'generator_field',
		);

		foreach ( $legacy_attrs as $attr ) {
			if ( isset( $attrs[ $attr ] ) ) {
				$settings[ $attr ] = $attrs[ $attr ];
			}
		}

		return $settings;
	}
}
