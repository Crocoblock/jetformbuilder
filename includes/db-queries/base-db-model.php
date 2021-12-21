<?php


namespace Jet_Form_Builder\Db_Queries;


abstract class Base_Db_Model {

	protected $prefix = 'jet_fb_';

	/**
	 * Returns table name
	 * @return [type] [description]
	 */
	abstract protected function table_name();

	/**
	 * You must you this function,
	 * to get right name of table
	 * @return string table name
	 */
	public function table() {
		return $this->wpdb()->prefix . $this->prefix . $this->table_name();
	}

	/**
	 * Returns columns schema
	 * @return [type] [description]
	 */
	abstract public function schema();

	/**
	 * Returns schemas options
	 * Such as primary keys, charset
	 * @return [type] [description]
	 */
	abstract public function schema_keys();


	/**
	 * Returns an array, where the values
	 * are the names of the columns, which
	 * cannot be inserted
	 *
	 * @return array [description]
	 */
	abstract public function excluded_columns_for_insert();


	public function schema_charset_collate() {
		return $this->wpdb()->get_charset_collate();
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