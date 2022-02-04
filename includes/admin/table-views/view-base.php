<?php


namespace Jet_Form_Builder\Admin\Table_Views;

use Jet_Form_Builder\Classes\Repository_Static_Item_It;
use Jet_Form_Builder\Db_Queries\Base_Db_Model;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;

abstract class View_Base implements Repository_Static_Item_It {

	const COLUMN_CHOOSE  = 'choose';
	const COLUMN_ACTIONS = 'actions';

	abstract public function get_columns_handlers(): array;

	abstract public function get_columns_headings(): array;

	abstract public function get_raw_list( array $args ): array;

	public function get_list(): array {
		return $this->get_raw_list(
			array(
				'offset' => 0,
				'limit'  => 15,
			)
		);
	}

	public function get_single_actions(): array {
		return array();
	}

	/**
	 * @return Base_Db_Model[]
	 */
	public function get_dependencies(): array {
		return array();
	}

	/**
	 * @return array
	 */
	final public function load_view(): array {
		try {
			$this->prepare_dependencies();
		} catch ( Sql_Exception $exception ) {
			return array(
				'list'    => array(),
				'columns' => array(),
				'actions' => array(),
			);
		}

		return array_merge(
			array(
				'list'    => $this->prepare_list(),
				'columns' => $this->get_columns_headings(),
				'actions' => $this->get_single_actions(),
			),
			$this->load_data()
		);
	}

	public function load_data(): array {
		return array();
	}

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

	public function prepare_record( $record ): array {
		$prepared = array();

		foreach ( $this->get_columns_handlers() as $column_name => $column_attrs ) {
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

			$prepared[ $column_name ] = $column_attrs;
		}

		return $prepared;
	}

	/**
	 * @throws Sql_Exception
	 */
	public function prepare_dependencies() {
		foreach ( $this->get_dependencies() as $model ) {
			$model->safe_create();
		}
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
