<?php


namespace Jet_Form_Builder\Db_Queries;


class Base_Db_Constraint {

	protected $foreign_keys;
	protected $parent_table;
	protected $parent_keys = [ 'id' ];

	public function set_foreign_keys( array $keys ) {
		$this->foreign_keys = $keys;

		return $this;
	}

	public function set_table( string $table ) {
		$this->parent_table = $table;

		return $this;
	}

	public function set_parent_keys( array $keys ) {
		$this->parent_keys = $keys;

		return $this;
	}

	public function get_name() {
		return "{$this->parent_table}__" . implode( '_', $this->foreign_keys );
	}

	final public function build_part() {
		$constraint = 'FOREIGN KEY (' . implode( ',', $this->foreign_keys ) . ') ';
		$constraint .= "REFERENCES {$this->parent_table}(" . implode( ',', $this->parent_keys ) . ')';

		return $constraint;
	}

	final public function build() {
		return "CONSTRAINT {$this->get_name()} {$this->build_part()}";
	}

}