<?php


namespace Jet_Form_Builder\Db_Queries;

class Base_Db_Constraint {

	const ACTION_CASCADE     = 'CASCADE';
	const ACTION_SET_DEFAULT = 'SET DEFAULT';
	const ACTION_SET_NULL    = 'SET NULL';
	const ACTION_RESTRICT    = 'RESTRICT';

	protected $foreign_keys;
	protected $foreign_table;

	/** @var Base_Db_Model */
	protected $parent_model;
	protected $parent_keys = array( 'id' );

	protected $actions = array();

	/**
	 * @param array $keys
	 *
	 * @return $this
	 */
	public function set_foreign_keys( array $keys ): Base_Db_Constraint {
		$this->foreign_keys = $keys;

		return $this;
	}

	/**
	 * @param string $table
	 *
	 * @return $this
	 */
	public function set_foreign_table( string $table ): Base_Db_Constraint {
		$this->foreign_table = $table;

		return $this;
	}

	public function set_model( Base_Db_Model $model ): Base_Db_Constraint {
		$this->parent_model = $model;

		return $this;
	}

	public function get_model(): Base_Db_Model {
		return $this->parent_model;
	}

	public function get_table(): string {
		return $this->parent_model::table();
	}

	public function set_parent_keys( array $keys ): Base_Db_Constraint {
		$this->parent_keys = $keys;

		return $this;
	}

	public function on_delete( string $action ): Base_Db_Constraint {
		return $this->set_action( 'DELETE', $action );
	}

	public function on_update( string $action ): Base_Db_Constraint {
		return $this->set_action( 'UPDATE', $action );
	}

	/**
	 * @param string $name
	 * @param string $action
	 *
	 * @return $this
	 */
	public function set_action( string $name, string $action ): Base_Db_Constraint {
		$this->actions[ $name ] = $action;

		return $this;
	}

	public function get_name(): string {
		return "{$this->get_table()}__" . implode( '_', $this->foreign_keys ) . "__{$this->foreign_table}";
	}

	final public function build_part(): string {
		$constraint  = 'FOREIGN KEY (' . implode( ',', $this->foreign_keys ) . ') ';
		$constraint .= "REFERENCES {$this->get_table()}(" . implode( ',', $this->parent_keys ) . ')';

		foreach ( $this->actions as $name => $action ) {
			$constraint .= " ON {$name} {$action}";
		}

		return $constraint;
	}

	final public function build(): string {
		return "CONSTRAINT {$this->get_name()} {$this->build_part()}";
	}

}
