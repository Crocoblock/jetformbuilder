<?php


namespace JFB_Modules\Validation\Ssr;

use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Request\Parser_Context;

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
		$request     = $context->get_request();
		$field_path  = $this->get_field_path( $request['_jfb_validation_path'] ?? '' );
		$field_name  = $field_path[0] ?? '';
		$nested_path = array_slice( $field_path, 1 );
		$form_id     = $request['_jet_engine_booking_form_id'];

		global $wpdb;
		$record_ids = $wpdb->get_col(
			$wpdb->prepare(
				'SELECT id FROM ' . $wpdb->prefix . 'jet_fb_records WHERE form_id = %d AND status = %s',
				$form_id,
				'success'
			)
		);

		if ( empty( $record_ids ) || '' === $field_name ) {
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
			$exists = $wpdb->get_var( $wpdb->prepare( $sql, $params ) ); // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared

			return ! $exists;
		}

		$sql = sprintf(
			'SELECT field_value, field_attrs FROM ' . $wpdb->prefix . 'jet_fb_records_fields
			WHERE record_id IN (%s)
			AND field_name = %%s',
			implode( ', ', $placeholders )
		);

		$params = array_merge( $record_ids, array( $field_name ) );
		$rows   = $wpdb->get_results( $wpdb->prepare( $sql, $params ), ARRAY_A ); // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared

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
				continue;
			}

			$segment = sanitize_text_field( (string) $segment );

			if ( '' === $segment ) {
				continue;
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

		if ( Array_Tools::get( $decoded, $nested_path, null ) === $value ) {
			return true;
		}

		$wildcard_path = $this->normalize_nested_path( $nested_path );

		if ( $wildcard_path === $nested_path ) {
			return false;
		}

		foreach ( $decoded as $item ) {
			if ( ! is_array( $item ) ) {
				continue;
			}

			if ( Array_Tools::get( $item, $wildcard_path, null ) === $value ) {
				return true;
			}
		}

		return false;
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
