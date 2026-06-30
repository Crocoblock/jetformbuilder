<?php
/**
 * Database Meta Values Generator with schema support.
 *
 * @package Jet_Form_Builder\Generators
 */

namespace Jet_Form_Builder\Generators;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Get_From_DB class.
 *
 * Gets unique meta values from the database for a given meta key.
 */
class Get_From_DB extends Base_V2 {

	/**
	 * Returns generator ID.
	 *
	 * @return string
	 */
	public function get_id() {
		return 'get_from_db';
	}

	/**
	 * Returns generator name.
	 *
	 * @return string
	 */
	public function get_name() {
		return __( 'Get values list from database', 'jet-form-builder' );
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
				'placeholder' => '_custom_meta_key',
				'help'        => __( 'Enter the meta key to get values from wp_postmeta table.', 'jet-form-builder' ),
			),
		);
	}

	/**
	 * Whether this generator supports auto-update.
	 *
	 * @return bool
	 */
	public function supports_auto_update(): bool {
		return true;
	}

	/**
	 * Returns context field descriptions for auto-update.
	 *
	 * @return array
	 */
	public function get_auto_update_context_fields(): array {
		return array(
			array(
				'single'      => true,
				'description' => __( 'The Trigger Field value can switch the Meta Key when it matches a saved Trigger Field choice or an allowed server-side key. Otherwise the static Meta Key is used.', 'jet-form-builder' ),
				'example'     => __( 'Choose the field whose saved option values should be allowed as dynamic Meta Keys.', 'jet-form-builder' ),
			),
		);
	}

	/**
	 * Returns the auto-update value type supported by this generator.
	 *
	 * @return string
	 */
	public function get_auto_update_value_type(): string {
		return 'scalar';
	}

	/**
	 * Empty trigger should fall back to the static Meta Key setting.
	 *
	 * @return string
	 */
	public function get_auto_update_empty_context_policy(): string {
		return 'fallback_to_static';
	}

	/**
	 * Generate options with context from dependent fields.
	 * Context may override the meta key only when the candidate value is
	 * explicitly allowed by saved field choices or server-side filters.
	 *
	 * @param array $settings Parsed settings.
	 * @param array $context  ['field_name' => 'value'] from listened fields.
	 *
	 * @return array
	 */
	public function generate_with_context( array $settings, array $context = array() ): array {
		if ( ! empty( $context ) ) {
			$context_value = reset( $context );
			$meta_key      = is_scalar( $context_value ) ? trim( sanitize_text_field( (string) $context_value ) ) : '';

			if ( '' !== $meta_key ) {
				$runtime          = $settings['_jfb_runtime'] ?? array();
				$block_attrs      = $settings['_jfb_block_attrs'] ?? array();
				$validate_dynamic = apply_filters(
					'jet-form-builder/generators/get-from-db/validate_dynamic_meta_key',
					true,
					$meta_key,
					$settings,
					$context,
					$runtime,
					$block_attrs
				);

				if ( ! $validate_dynamic ) {
					$settings['meta_key'] = $meta_key;

					return $this->generate( $settings );
				}

				$allowed_meta_keys = $runtime['allowed_meta_keys'] ?? array();
				$allowed_meta_keys = apply_filters(
					'jet-form-builder/generators/get-from-db/allowed-meta-keys',
					$allowed_meta_keys,
					$meta_key,
					$settings,
					$context,
					$runtime,
					$block_attrs
				);
				$allowed_meta_keys = $this->sanitize_meta_keys_allowlist( $allowed_meta_keys );

				if ( in_array( $meta_key, $allowed_meta_keys, true ) ) {
					$settings['meta_key'] = $meta_key;
				}
			}
		}

		return $this->generate( $settings );
	}

	/**
	 * Sanitize an allowlist of meta keys received from runtime or filters.
	 *
	 * @param mixed $allowed_meta_keys Meta keys allowlist.
	 *
	 * @return array
	 */
	private function sanitize_meta_keys_allowlist( $allowed_meta_keys ): array {
		if ( ! is_array( $allowed_meta_keys ) ) {
			return array();
		}

		$allowed_meta_keys = array_filter(
			array_map(
				static function ( $meta_key ) {
					return is_scalar( $meta_key )
						? trim( sanitize_text_field( (string) $meta_key ) )
						: '';
				},
				$allowed_meta_keys
			)
		);

		return array_values( array_unique( $allowed_meta_keys ) );
	}

	/**
	 * Returns generated options list.
	 *
	 * @param array|string $args Settings array or legacy string.
	 *
	 * @return array
	 */
	public function generate( $args ) {
		global $wpdb;

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

		$table = $wpdb->postmeta;

		// phpcs:disable WordPress.DB
		$rows = $wpdb->get_results(
			$wpdb->prepare( "SELECT DISTINCT `meta_value` FROM `$table` WHERE `meta_key` = %s AND `meta_value` != ''", $meta_key ),
			ARRAY_A
		);
		// phpcs:enable WordPress.DB

		if ( empty( $rows ) ) {
			return $result;
		}

		foreach ( $rows as $row ) {
			$result[] = array(
				'value' => $row['meta_value'],
				'label' => $row['meta_value'],
			);
		}

		return $result;
	}
}
