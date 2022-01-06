<?php


namespace Jet_Form_Builder\Db_Queries\Views;

use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

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

	public function with( View_Base $view, Relation $relation = null ): View_Base {
		if ( ! $relation ) {
			$relation = new Relation();
		}
		$this->relations[] = $relation->left( $this )->right( $view );

		return $this;
	}

	public function primary_column(): string {
		return 'id';
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
		return $row;
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

	protected function empty_message(): string {
		return __( 'Empty row.', 'jet-form-builder' );
	}

	/**
	 * @return Query_Builder
	 */
	public function query() {
		return ( new Query_Builder() )->set_view( $this );
	}

}
