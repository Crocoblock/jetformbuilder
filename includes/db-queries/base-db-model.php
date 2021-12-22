<?php


namespace Jet_Form_Builder\Db_Queries;


use Jet_Form_Builder\Exceptions\Skip_Exception;
use Jet_Form_Builder\Exceptions\Sql_Exception;

abstract class Base_Db_Model {

	protected $prefix = 'jet_fb_';

	/**
	 * Returns table name
	 * @return [type] [description]
	 */
	abstract protected function table_name(): string;

	/**
	 * Returns columns schema
	 * @return [type] [description]
	 */
	abstract public function schema(): array;

	/**
	 * Returns schemas options
	 * Such as primary keys, charset
	 * @return [type] [description]
	 */
	abstract public function schema_keys(): array;

	/**
	 * @throws Sql_Exception
	 */
	public function safe_create() {
		Execution_Builder::instance()->safe_create( $this );
	}

	/**
	 * @param array $columns
	 *
	 * @return int
	 * @throws Sql_Exception
	 */
	public function insert( $columns = array(), $format = null ) {
		return Execution_Builder::instance()->insert( $this, $columns, $format );
	}

	/**
	 * @param $columns
	 * @param $where
	 * @param null $format
	 * @param null $where_format
	 *
	 * @return int
	 * @throws Sql_Exception
	 */
	public function update( $columns, $where, $format = null, $where_format = null ) {
		return Execution_Builder::instance()->update( $this, $columns, $where, $format, $where_format );
	}

	public function get_defaults(): array {
		return array();
	}

	/**
	 * To skip checking the rights specified in the "capabilities_to_create" method,
	 * throw the Skip_Exception exception.
	 *
	 * If you need a custom check before creating the table, throw a Sql_Exception.
	 *
	 * @throws Skip_Exception
	 */
	public function before_create() {
		throw new Skip_Exception();
	}

	public function capabilities_to_create(): array {
		return array( 'read' );
	}

	/**
	 * @throws Skip_Exception
	 */
	public function before_insert() {
		throw new Skip_Exception();
	}

	public function capabilities_to_insert(): array {
		return array( 'read' );
	}

	/**
	 * @throws Skip_Exception
	 */
	public function before_update() {
		throw new Skip_Exception();
	}

	public function capabilities_to_update(): array {
		return array( 'read' );
	}

	public function schema_charset_collate() {
		return $this->wpdb()->get_charset_collate();
	}

	/**
	 * You must you this function,
	 * to get right name of table
	 * @return string table name
	 */
	public function table() {
		return $this->wpdb()->prefix . $this->prefix . $this->table_name();
	}

	/**
	 * Returns WPDB instance
	 * @return \QM_DB|\wpdb [description]
	 */
	protected function wpdb() {
		global $wpdb;

		return $wpdb;
	}

}