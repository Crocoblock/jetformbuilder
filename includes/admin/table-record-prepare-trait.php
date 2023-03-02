<?php


namespace Jet_Form_Builder\Admin;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Table_Record_Prepare_Trait {

	abstract public function get_columns_handlers(): array;

	abstract public function get_columns_headings(): array;

	abstract public function get_raw_list( array $args ): array;

	abstract public function get_list(): array;

	public function prepare_list( array $custom_list = array() ): array {
		$list = empty( $custom_list ) ? $this->get_list() : $custom_list;

		if ( ! $list || ! is_array( $list ) ) {
			return array();
		}
		$prepared = array();

		foreach ( $list as $item_id => $record ) {
			$prepared[ $item_id ] = $this->prepare_record( $record );
		}

		return $prepared;
	}

	public function before_prepare_record( array $record, $column_attrs, $column_name ) {
	}

	public function after_prepare_record( $prepared, array $record, $column_name ) {
	}

	public function prepare_record( $record ): array {
		$prepared = array();

		foreach ( $this->get_columns_handlers() as $column_name => $column_attrs ) {
			$this->before_prepare_record( $record, $column_attrs, $column_name );

			$prepared[ $column_name ] = $this->prepare_column_attrs( $record, $column_attrs, $column_name );

			$this->after_prepare_record( $prepared[ $column_name ], $record, $column_name );
		}

		return $prepared;
	}

	public function prepare_column_attrs( array $record, $column_attrs, $column_name ): array {
		$value                   = $column_attrs['value'] ?? $record[ $column_name ] ?? false;
		$column_attrs['type']    = $column_attrs['type'] ?? 'string';
		$column_attrs['default'] = $column_attrs['default'] ?? false;

		$default = $this->prepare_record_value_type( $column_attrs['default'], $column_attrs );

		if ( ! is_callable( $value ) ) {
			$column_attrs['value'] = $value ?: $default;
		} else {
			$column_attrs['value'] = $this->prepare_record_value_type(
				call_user_func( $value, $record, $default ),
				$column_attrs
			);
		}

		return $column_attrs;
	}

	public function transform_to_columns_values( array $columns ): array {
		$transformed = array();

		foreach ( $this->get_columns_handlers() as $column_name => $column_attrs ) {
			if ( ! isset( $columns[ $column_name ] ) ) {
				continue;
			}
			$column_attrs['type']    = $column_attrs['type'] ?? 'string';
			$column_attrs['default'] = $column_attrs['default'] ?? false;
			$column_attrs['value']   = $columns[ $column_name ];

			$transformed[ $column_name ] = $column_attrs;
		}

		return $transformed;
	}

	protected function prepare_record_value_type( $value, $column ) {
		$type = $column['type'] ?? 'string';

		switch ( $type ) {
			case 'integer':
				return (int) $value;
			case 'float':
				return (float) $value;
			case 'array':
				return (array) $value;
			case 'string':
				return (string) $value;
			case 'rawArray':
			default:
				return $value;
		}
	}

}