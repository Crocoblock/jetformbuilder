<?php


namespace Jet_Form_Builder\Db_Queries\Views;

use Jet_Form_Builder\Db_Queries\Execution_Builder;
use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Db_Queries\Query_Cache_Builder;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use spec\HubSpot\Discovery\Cms\Blogs\Tags\DiscoverySpec;

abstract class View_Base {

	const FROM_HIGH_TO_LOW = 'DESC';
	const FROM_LOW_TO_HIGH = 'ASC';

	protected $limit = array();
	protected $conditions = array();
	protected $order_by = array();
	protected $select = array( '*' );

	/** @var Relation[] */
	protected $relations = array();

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

	/**
	 * @param $callable
	 *
	 * @return $this
	 * @throws Query_Builder_Exception
	 */
	public function with( $callable ): View_Base {
		if ( is_string( $callable ) ) {
			$callable = array( $this, $callable );
		}
		if ( ! is_callable( $callable ) ) {
			throw new Query_Builder_Exception( 'Relation is not callable.' );
		}
		$this->relations[] = call_user_func( $callable );

		return $this;
	}

	public function get_prepared_join( Query_Builder $builder ) {
	}

	public function set_conditions( array $conditions ): View_Base {
		$this->conditions = array_merge( $this->always_conditions(), $conditions );

		return $this;
	}

	public function conditions(): array {
		if ( empty( $this->conditions ) ) {
			$this->set_conditions( array() );
		}

		return $this->conditions;
	}

	public function set_limit( array $limit ): View_Base {
		$this->limit = $limit;

		return $this;
	}

	/**
	 * @return int[]
	 */
	public function limit(): array {
		return $this->limit;
	}

	public function set_order_by( array $order_by ): View_Base {
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
	 * @param $key
	 * @param $value
	 *
	 * @return string
	 */
	public function json_pair( $key, $value ): string {
		return sprintf( '"%1$s":"%2$s"', (string) $key, (string) $value );
	}

	/**
	 * Get the column name with table prefix
	 *
	 * @param $column
	 *
	 * @return string
	 * @throws Query_Builder_Exception
	 */
	public function column( $column ): string {
		if ( is_string( $column ) ) {
			return "`{$this->table()}`.`{$column}`";
		}

		if ( isset( $column['as'] ) ) {
			return $column['as'];
		}

		$name  = $column['column'] ?? false;
		$table = empty( $column['table'] ) ? $this->table() : $column['table'];

		if ( ! $name ) {
			throw new Query_Builder_Exception( 'Please set the column name.', $column );
		}

		return "`{$table}`.`{$name}`";
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
			throw new Query_Builder_Exception( $this->empty_message(), $row );
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
			throw new Query_Builder_Exception( $this->empty_message(), $values );
		}

		return $prepared;
	}

	protected function empty_message(): string {
		return __( 'Empty row.', 'jet-form-builder' );
	}

	public static function get_paginated_args( $args ): array {
		return array_merge(
			array(
				'limit'      => 25,
				'sort'       => View_Base::FROM_HIGH_TO_LOW,
				'page'       => 1
			),
			$args
		);
	}

	public static function get_offset( $args ): int {
		return 1 === $args['page'] ? 0 : ( ( $args['page'] - 1 ) * $args['limit'] );
	}

	/**
	 * @param $columns
	 *
	 * @return View_Base
	 */
	public static function find( $columns ): View_Base {
		$conditions = static::prepare_columns( $columns );

		return ( new static )->set_conditions( $conditions );
	}


	public static function findOne( $columns ) {
		return static::find( $columns )->set_limit( array( 1 ) );
	}

	/**
	 * @param $primary_id
	 *
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public static function findById( $primary_id ) {
		return static::find( array( 'id' => $primary_id ) )
			->set_limit( array( 1 ) )
			->query()
			->query_one();
	}

	/**
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public static function all() {
		return ( new static )->query()->query_all();
	}

	/**
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public static function one() {
		return ( new static )->query()->query_one();
	}

	/**
	 * @return array|mixed
	 * @throws Query_Builder_Exception
	 */
	public static function values() {
		return ( new static )->query()->query_col();
	}

	/**
	 * @param $columns
	 *
	 * @return int
	 * @throws Query_Builder_Exception
	 */
	public static function delete( $columns ) {
		$conditions = static::prepare_columns( $columns );
		$self = ( new static )->set_conditions( $conditions );

		return Execution_Builder::instance()->delete( $self );
	}

	/**
	 * @param $columns
	 *
	 * @return array
	 */
	public static function prepare_columns( $columns ): array {
		$conditions = array();

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
	 * @return Query_Cache_Builder
	 */
	public function query() {
		return ( new Query_Cache_Builder() )->set_view( $this );
	}

}
