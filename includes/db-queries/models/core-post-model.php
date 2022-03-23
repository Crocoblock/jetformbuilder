<?php


namespace Jet_Form_Builder\Db_Queries\Models;


use Jet_Form_Builder\Db_Queries\Base_Db_Model;

class Core_Post_Model extends Base_Db_Model {

	public static function table() {
		global $wpdb;

		return $wpdb->posts;
	}

	public function create(): Base_Db_Model {
		return $this;
	}

	/**
	 * Returns table name
	 *
	 * @return [type] [description]
	 */
	public static function table_name(): string {
		return 'posts';
	}

	/**
	 * Returns columns schema
	 *
	 * @return [type] [description]
	 */
	public static function schema(): array {
		return array();
	}

	/**
	 * Returns schemas options
	 * Such as primary keys, charset
	 *
	 * @return [type] [description]
	 */
	public static function schema_keys(): array {
		return array();
	}
}