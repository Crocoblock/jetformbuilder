<?php


namespace Jet_Form_Builder\Db_Queries\Views;

use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Db_Queries\Execution_Builder;
use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Db_Queries\Query_Cache_Builder;
use Jet_Form_Builder\Db_Queries\Traits\Model_Dependencies;
use Jet_Form_Builder\Db_Queries\Traits\Model_Dependencies_Interface;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class View_Base implements Model_Dependencies_Interface {

	use Model_Dependencies;

	const FROM_HIGH_TO_LOW = 'DESC';
	const FROM_LOW_TO_HIGH = 'ASC';

	protected $limit      = array();
	protected $conditions = array();
	protected $order_by   = array();
	protected $select;

	/** @var Relation[] */
	protected $relations = array();
	protected $filters   = array();

	abstract public function table(): string;

	public function select_columns(): array {
		return $this->select;
	}

	public function always_conditions(): array {
		return array();
	}

	public function custom_where(): string {
		return '';
	}

	public function set_table_args( array $table_args ) {
		$offset  = $table_args['offset'] ?? 0;
		$limit   = $table_args['limit'] ?? 15;
		$filters = $table_args['filters'] ?? array();

		if ( -1 === $limit ) {
			$this->set_limit( array() );
		} else {
			$this->set_limit( array( $offset, $limit ) );
		}
		$this->set_filters( $filters );

		return $this;
	}

	public function set_filters( array $filters ) {
		$this->filters = esc_sql( $filters );

		return $this;
	}

	/**
	 * @param $callback
	 *
	 * @return $this
	 * @throws Query_Builder_Exception
	 */
	public function with( $callback ): View_Base {
		if ( is_string( $callback ) ) {
			$callback = array( $this, $callback );
		}
		if ( ! is_callable( $callback ) ) {
			throw new Query_Builder_Exception( 'Relation is not callable.' );
		}
		$this->relations[] = call_user_func( $callback );

		return $this;
	}

	public function get_prepared_join( Query_Builder $builder ) {
	}

	/**
	 * @param array $conditions
	 *
	 * @return $this
	 */
	public function set_conditions( array $conditions ): View_Base {
		$this->conditions = array_merge( $this->always_conditions(), $conditions );

		return $this;
	}

	public function add_conditions( array $conditions ): View_Base {
		if ( empty( $this->conditions ) ) {
			return $this->set_conditions( $conditions );
		}

		$this->conditions = array_merge( $this->conditions, $conditions );

		return $this;
	}

	public function conditions(): array {
		if ( empty( $this->conditions ) ) {
			$this->set_conditions( array() );
		}

		return $this->conditions;
	}

	public function set_limit( array $limit ): View_Base {
		$this->limit = array_map( 'intval', $limit );

		return $this;
	}

	/**
	 * @return int[]
	 */
	public function limit(): array {
		return $this->limit;
	}

	public function set_order_by( array $order_by ): View_Base {
		if ( ! in_array( $order_by, array( self::FROM_HIGH_TO_LOW, self::FROM_LOW_TO_HIGH ), true ) ) {
			return $this;
		}

		$this->order_by = $order_by;

		return $this;
	}

	/**
	 * @return string[]
	 */
	public function order_by(): array {
		return $this->order_by;
	}

	/**
	 * @since 3.1.0 Added $raw argument
	 *
	 * Get the column name with table prefix
	 *
	 * @param $column
	 * @param bool $raw
	 *
	 * @return string
	 * @since 3.1.0 Added $raw argument
	 *
	 * Get the column name with table prefix
	 */
	public function column( $column, bool $raw = false ): string {
		if ( is_string( $column ) ) {
			return $raw ? "{$this->table()}.{$column}" : "`{$this->table()}`.`{$column}`";
		}

		if ( isset( $column['as'] ) ) {
			return $column['as'];
		}

		$name  = $column['column'] ?? false;
		$table = empty( $column['table'] ) ? $this->table() : $column['table'];

		if ( ! $name ) {
			wp_die( 'Please set the column name.', 'View Base Error' );
		}

		return $raw ? "{$table}.{$name}" : "`{$table}`.`{$name}`";
	}

	protected function prepare_row( $row ) {
		if ( ! $row ) {
			return array();
		}
		foreach ( $row as $column => $value ) {
			$parts = explode( '.', $column );

			if ( ! isset( $parts[1] ) ) {
				continue;
			}

			$row[ $parts[0] ][ $parts[1] ] = $value;
			unset( $row[ $column ] );
		}

		return $row;
	}

	protected function prepare_values( $values ) {
		return $values;
	}

	/**
	 * @param $row
	 *
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public function get_prepared_row( $row ) {
		$prepared = $this->prepare_row( $row );

		if ( empty( $prepared ) ) {
			throw new Query_Builder_Exception(
				esc_html( $this->empty_message() ),
				// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				$row
			);
		}

		return $prepared;
	}

	/**
	 * @param $values
	 *
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public function get_prepared_values( $values ) {
		$prepared = $this->prepare_values( $values );

		if ( empty( $prepared ) ) {
			throw new Query_Builder_Exception(
				esc_html( $this->empty_message() ),
				// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				$values
			);
		}

		return $prepared;
	}

	protected function empty_message(): string {
		return __( 'Empty row.', 'jet-form-builder' );
	}

	public static function get_paginated_args( $args ): array {
		$base = array_merge(
			array(
				'limit' => 25,
				'sort'  => self::FROM_HIGH_TO_LOW,
				'page'  => 1,
			),
			$args
		);

		$base['offset'] = static::get_offset( $args );

		return $base;
	}

	/**
	 * @param int|array $args
	 * @param int $limit
	 *
	 * @return int
	 */
	public static function get_offset( $args, int $limit = 0 ): int {
		if ( is_array( $args ) ) {
			$page  = (int) $args['page'];
			$limit = (int) $args['limit'];
		} else {
			$page = (int) $args;
		}

		return 1 === $page ? 0 : ( ( $page - 1 ) * $limit );
	}

	/**
	 * @param $columns
	 *
	 * @return View_Base
	 */
	public static function find( $columns ): View_Base {
		$conditions = static::prepare_columns( $columns );

		return ( new static() )->set_conditions( $conditions );
	}


	public static function findOne( $columns ): View_Base {
		return static::find( $columns )->set_limit( array( 1 ) );
	}

	/**
	 * @param $primary_id
	 *
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public static function findById( $primary_id ): array {
		return static::find( array( 'id' => $primary_id ) )
					->set_limit( array( 1 ) )
					->query()
					->query_one();
	}

	/**
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public static function all(): array {
		return ( new static() )->query()->query_all();
	}

	/**
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public static function one(): array {
		return ( new static() )->query()->query_one();
	}

	/**
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public static function values(): array {
		return ( new static() )->query()->query_col();
	}

	/**
	 * @param $where
	 *
	 * @return int
	 * @throws Query_Builder_Exception
	 */
	public static function delete( $where ): int {
		return Execution_Builder::instance()->view_delete( static::create( $where ) );
	}

	/**
	 * @param array $columns
	 * @param array $where
	 *
	 * @return int
	 * @throws Sql_Exception
	 */
	public static function update( array $columns, array $where ): int {
		return Execution_Builder::instance()->view_update( $columns, static::create( $where ) );
	}

	/**
	 * @param array $columns
	 *
	 * @return string
	 */
	public function build_set( array $columns ): string {
		$columns = $this->attach_columns( $columns );

		return Query_Builder::build_set( $columns );
	}

	/**
	 * Prepare columns for build conditions
	 *
	 * @param $columns
	 *
	 * @return array
	 */
	public static function prepare_columns( $columns ): array {
		$conditions = array();

		if ( ! is_array( $columns ) ) {
			return array(
				array(
					'type'   => 'equal_column',
					'values' => array( 'id', $columns ),
				),
			);
		}

		foreach ( $columns as $column => $value ) {
			if ( is_numeric( $column ) ) {
				$conditions[] = $value;
			} else {
				$conditions[] = array(
					'type'   => 'equal_column',
					'values' => array( $column, $value ),
				);
			}
		}

		return $conditions;
	}

	/**
	 * @param array $columns
	 *
	 * @return array
	 */
	public function attach_columns( array $columns ): array {
		foreach ( $columns as $name => $value ) {
			if ( is_numeric( $name ) ) {
				continue;
			}
			$columns[ $this->column( $name ) ] = $value;
			unset( $columns[ $name ] );
		}

		return $columns;
	}

	/**
	 * @param mixed $where
	 *
	 * @return View_Base
	 */
	public static function create( $where ): View_Base {
		$conditions = static::prepare_columns( $where );

		return ( new static() )->set_conditions( $conditions );
	}


	/**
	 * @return Query_Builder
	 * @throws Query_Builder_Exception
	 */
	public function query(): Query_Builder {
		$this->prepare_dependencies();

		if ( ! $this->select ) {
			$this->set_select( array( '*' ) );
		}

		return ( new Query_Builder() )->set_view( $this );
	}

	/**
	 * @throws Query_Builder_Exception
	 */
	public function prepare_dependencies() {
		foreach ( $this->get_dependencies() as $model ) {
			$model->create();

			foreach ( $model->get_migrations() as $migration ) {
				throw new Query_Builder_Exception( esc_html( get_class( $model ) . ' is not updated' ) );
			}
		}
	}

	/**
	 * @param string[] $select
	 */
	public function set_select( array $select ) {
		$this->select = $select;
	}

}
