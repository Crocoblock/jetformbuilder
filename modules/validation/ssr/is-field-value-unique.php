<?php


namespace JFB_Modules\Validation\Ssr;

use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Request\Parser_Context;
use JFB_Modules\Block_Parsers\Field_Data_Parser;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Is_Field_Value_Unique extends Base_Validation_Callback {

	public function get_id(): string {
		return 'is_field_value_unique';
	}

	public function get_label(): string {
		return __( 'Is field value unique', 'jet-form-builder' );
	}

	public function is_valid( $value, Parser_Context $context ): bool {
		$request    = $context->get_request();
		$field_path = $this->get_field_path( $request['_jfb_validation_path'] ?? '' );
		$form_id    = absint( $request['_jet_engine_booking_form_id'] ?? 0 );

		return $this->is_value_unique( $value, $field_path, $form_id );
	}

	public function is_valid_with_parser( Field_Data_Parser $parser ): bool {
		// The parser path is the same path authenticated by the submission signature.
		$field_path = $this->get_field_path( explode( '.', $parser->get_scoped_name() ) );
		$form_id    = absint( jet_fb_handler()->get_form_id() );

		return $this->is_value_unique( $parser->get_value(), $field_path, $form_id );
	}

	private function is_value_unique( $value, array $field_path, int $form_id ): bool {
		$field_name  = $field_path[0] ?? '';
		$nested_path = array_slice( $field_path, 1 );

		if ( ! $form_id || '' === $field_name || is_numeric( $field_name ) ) {
			return false;
		}

		global $wpdb;
		// phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
		$record_ids = $wpdb->get_col(
			$wpdb->prepare(
				'SELECT id FROM ' . $wpdb->prefix . 'jet_fb_records WHERE form_id = %d AND status = %s',
				$form_id,
				'success'
			)
		);

		if ( empty( $record_ids ) ) {
			return true;
		}

		$placeholders = array_fill( 0, count( $record_ids ), '%d' );

		if ( empty( $nested_path ) ) {
			$sql = sprintf(
				'SELECT COUNT(*) FROM ' . $wpdb->prefix . 'jet_fb_records_fields
				WHERE record_id IN (%s)
				AND field_name = %%s
				AND field_value = %%s',
				implode( ', ', $placeholders )
			);

			$params = array_merge( $record_ids, array( $field_name, $value ) );
			// phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.PreparedSQL.NotPrepared
			$exists = $wpdb->get_var( $wpdb->prepare( $sql, $params ) );

			return ! $exists;
		}

		$sql = sprintf(
			'SELECT field_value, field_attrs FROM ' . $wpdb->prefix . 'jet_fb_records_fields
			WHERE record_id IN (%s)
			AND field_name = %%s',
			implode( ', ', $placeholders )
		);

		$params = array_merge( $record_ids, array( $field_name ) );
		// phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.PreparedSQL.NotPrepared
		$rows = $wpdb->get_results( $wpdb->prepare( $sql, $params ), ARRAY_A );

		foreach ( $rows as $row ) {
			if ( ! $this->matches_nested_value( $row, $nested_path, $value ) ) {
				continue;
			}

			return false;
		}

		return true;
	}

	private function get_field_path( $field_path ): array {
		if ( ! is_array( $field_path ) ) {
			$field_path = array( $field_path );
		}

		$segments = array();

		foreach ( $field_path as $segment ) {
			if ( ! is_scalar( $segment ) ) {
				return array();
			}

			$segment = sanitize_text_field( (string) $segment );

			if ( '' === $segment ) {
				return array();
			}

			$segments[] = $segment;
		}

		return $segments;
	}

	private function matches_nested_value( array $row, array $nested_path, $value ): bool {
		$attrs = Tools::decode_json( $row['field_attrs'] ?? '{}' );

		if ( empty( $attrs['is_encoded'] ) ) {
			return false;
		}

		$decoded = Tools::decode_json( $row['field_value'] ?? '' );

		if ( ! is_array( $decoded ) ) {
			return false;
		}

		$normalized_path = $this->normalize_nested_path( $nested_path );

		if ( empty( $normalized_path ) ) {
			return false;
		}

		return $this->matches_path( $decoded, $normalized_path, $value );
	}

	private function matches_path( $current, array $path, $value ): bool {
		if ( empty( $path ) ) {
			return $current === $value;
		}

		if ( ! is_array( $current ) ) {
			return false;
		}

		// Repeater indexes are not signature-bound, so scan every row at each depth.
		if ( wp_is_numeric_array( $current ) ) {
			foreach ( $current as $item ) {
				if ( $this->matches_path( $item, $path, $value ) ) {
					return true;
				}
			}

			return false;
		}

		$segment = array_shift( $path );

		if ( ! array_key_exists( $segment, $current ) ) {
			return false;
		}

		return $this->matches_path( $current[ $segment ], $path, $value );
	}

	private function normalize_nested_path( array $nested_path ): array {
		$normalized = array();

		foreach ( $nested_path as $segment ) {
			if ( is_numeric( $segment ) ) {
				continue;
			}

			$normalized[] = $segment;
		}

		return $normalized;
	}
}
