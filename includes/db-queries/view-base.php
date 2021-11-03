<?php


namespace Jet_Form_Builder\Db_Queries;


abstract class View_Base {

	abstract public function table_name(): string;

	public function table_prefix(): string {
		return '';
	}

	public function table(): string {
		return $this->table_prefix() . $this->table_name();
	}

	public function select_columns(): array {
		return array( '*' );
	}

	public function conditions(): array {

	}

}