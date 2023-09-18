<?php


namespace JFB_Component\Db\Models;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Db_Queries\Base_Db_Model;

class Tokens_Model extends Base_Db_Model {

	public static function table_name(): string {
		return 'tokens';
	}

	public static function schema(): array {
		return array(
			'id'             => 'bigint(20) NOT NULL AUTO_INCREMENT',
			// slug of action (it has nothing to do with the actions used in the form.)
			'action'         => 'varchar(100)',
			'hash'           => 'text',
			// How many times was performed
			'exec_count'     => 'int(11) NOT NULL DEFAULT 0',
			// How many times can be done
			'limit_exec'     => 'int(11) NOT NULL DEFAULT 1',
			'expire_at'      => 'TIMESTAMP',
			self::CREATED_AT => 'TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP',
			self::UPDATED_AT => 'TIMESTAMP',
		);
	}

	public function get_defaults(): array {
		return array(
			// Set current time in UTC+0
			self::CREATED_AT => current_time( 'mysql', true ),
		);
	}

	public static function schema_keys(): array {
		return array(
			'id'             => 'primary key',
			self::CREATED_AT => 'index',
			'expire_at'      => 'index',
		);
	}
}
