<?php


namespace Jet_Form_Builder\Db_Queries\Views;

use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

abstract class View_Base {

	const FROM_HIGH_TO_LOW = 'DESC';
	const FROM_LOW_TO_HIGH = 'ASC';

	abstract public function table(): string;

	public function select_columns(): array {
		return array( '*' );
	}

	public function conditions(): array {
		return array();
	}

	/**
	 * @return int[]
	 */
	public function limit(): array {
		return array();
	}

	/**
	 * @return string[]
	 */
	public function order_by(): array {
		return array(
			array(
				'column' => 'id',
				'sort'   => self::FROM_HIGH_TO_LOW,
			),
		);
	}

	/**
	 * @param $key
	 * @param $value
	 *
	 * @return string
	 */
	protected function json_pair( $key, $value ): string {
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

	protected function prepare_row( $row ): array {
		return $row;
	}

	/**
	 * @param $row
	 *
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public function get_prepared_row( $row ): array {
		$prepared = $this->prepare_row( $row );

		if ( empty( $prepared ) ) {
			throw new Query_Builder_Exception( $this->empty_message(), $row );
		}

		return $prepared;
	}

	protected function empty_message(): string {
		return __( 'Empty row.', 'jet-form-builder' );
	}


}
