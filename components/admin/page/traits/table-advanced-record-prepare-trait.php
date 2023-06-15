<?php


namespace JFB_Components\Admin\Page\Traits;

use Jet_Form_Builder\Admin\Table_Views\Column_Base;
use Jet_Form_Builder\Admin\Table_Views\Column_Heading_Interface;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Table_Advanced_Record_Prepare_Trait {

	use Table_Record_Prepare_Trait;

	private $columns = array();

	abstract public function get_columns(): array;

	/**
	 * @return Column_Base[]
	 */
	private function get_prepared_columns(): array {
		if ( empty( $this->columns ) ) {
			$this->columns = $this->get_columns();
		}

		return $this->columns;
	}

	public function add_columns( array $columns ) {
		$this->columns = array_merge( $this->get_prepared_columns(), $columns );

		return $this;
	}

	public function get_columns_handlers(): array {
		$columns = $this->get_prepared_columns();

		foreach ( $columns as $column_name => $column ) {
			if ( is_a( $column, Column_Base::class ) ) {
				continue;
			}
			unset( $columns[ $column_name ] );
		}

		return $columns;
	}

	public function get_columns_headings(): array {
		$columns = $this->get_prepared_columns();

		foreach ( $columns as $column_name => $column ) {
			if ( is_array( $column ) ) {
				continue;
			}
			/** @var Column_Heading_Interface $column */
			if ( is_a( $column, Column_Heading_Interface::class ) && $column->has_label() ) {
				$columns[ $column_name ] = $column->get_heading();

				continue;
			}

			unset( $columns[ $column_name ] );
		}

		return $columns;
	}

	public function prepare_column_attrs( array $record, $column_attrs, $column_name ): array {
		/** @var Column_Base $column_attrs */
		return $column_attrs->set_column( $column_name )->get_column( $record );
	}

}
