<?php


namespace Jet_Form_Builder\Db_Queries;

use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

abstract class View_Base {

	abstract public function table(): string;

	public function column( $name ): string {
		return "`{$this->table()}`.`{$name}`";
	}

	public function select_columns(): array {
		return array( '*' );
	}

	public function conditions(): array {
		return array();
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

	protected function prepare_row( $row ): array {
		return array(
			'key'   => $row['id'],
			'value' => $row,
		);
	}

	/**
	 * @param $row
	 *
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public function get_prepared_row( $row ): array {
		$prepared = $this->prepare_row( $row );

		if ( ! isset( $prepared['key'] ) || ! isset( $prepared['value'] ) ) {
			throw new Query_Builder_Exception( 'Invalid ' . get_class( $this ) . '::prepare_row' );
		}

		if ( empty( $prepared['key'] ) || empty( $prepared['value'] ) ) {
			throw new Query_Builder_Exception( $this->empty_message(), $row );
		}

		return $prepared;
	}

	protected function empty_message(): string {
		return __( 'Empty row.', 'jet-form-builder' );
	}

	/**
	 * @return int[]
	 */
	public function limit(): array {
		return array();
	}

}
