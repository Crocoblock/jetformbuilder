<?php


namespace Jet_Form_Builder\Db_Queries\Models;

use Jet_Form_Builder\Db_Queries\Base_Db_Model;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Core_User_Model extends Base_Db_Model {

	public static function table() {
		global $wpdb;

		return $wpdb->users;
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
		return 'users';
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