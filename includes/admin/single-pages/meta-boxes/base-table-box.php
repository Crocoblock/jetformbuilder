<?php


namespace Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes;

use Jet_Form_Builder\Admin\Table_Advanced_Record_Prepare_Trait;

abstract class Base_Table_Box extends Base_Meta_Box {

	use Table_Advanced_Record_Prepare_Trait;

	private $editable_table = false;

	final public function get_values(): array {
		return $this->prepare_list();
	}

	public function get_list(): array {
		return $this->get_raw_list(
			array(
				'offset' => 0,
				'limit'  => 8,
			)
		);
	}

	public function get_total(): int {
		return 0;
	}

	public function get_receive_endpoint(): array {
		return array();
	}

	public function after_prepare_record( $prepared, array $record, $column_name ) {
		$is_editable = $prepared['editable'] ?? false;

		if ( $is_editable ) {
			$this->set_editable_table( true );
		}
	}

	/**
	 * @param bool $editable_table
	 */
	public function set_editable_table( bool $editable_table ) {
		$this->editable_table = $editable_table;
	}

	/**
	 * @return bool
	 */
	public function is_editable_table(): bool {
		return $this->editable_table;
	}

	public function to_array(): array {
		return parent::to_array() + array(
			'columns'           => $this->get_columns_headings(),
			'render_type'       => self::TYPE_TABLE,
			'is_editable_table' => $this->is_editable_table(),
			'total'             => $this->get_total(),
			'receive_url'       => $this->get_receive_endpoint(),
		);
	}

}
