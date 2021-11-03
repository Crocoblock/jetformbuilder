<?php


namespace Jet_Form_Builder\Db_Queries;


abstract class Query_Base {

	protected $sql_string;

	abstract public function table_from(): string;

	public function select_columns(): array {
		return array( '*' );
	}
	

	public function prepare_select() {

	}

	public function to_sql() {

	}

}