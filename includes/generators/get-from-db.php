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
