<?php


namespace JFB_Components;

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
			'id'         => 'bigint(20) NOT NULL AUTO_INCREMENT',
			'form_id'    => 'bigint(20) UNSIGNED NOT NULL',
			'record_id'  => 'bigint(20) NOT NULL',
			// slug of action (it has nothing to do with the actions used in the form.)
			'action'     => 'varchar(100)',
			'hash'       => 'varchar(255)',
			// How many times has it been done?
			'exec_count' => 'int(11)',
			// How many times can be done
			'limit_exec' => 'int(11)',
			'expire_at'  => 'TIMESTAMP',
			'created_at' => 'TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP',
			'updated_at' => 'TIMESTAMP',
		);
	}

	public static function schema_keys(): array {
		return array();
	}
}
