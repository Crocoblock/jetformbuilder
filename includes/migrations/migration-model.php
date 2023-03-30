<?php


namespace Jet_Form_Builder\Migrations;

use Jet_Form_Builder\Db_Queries\Base_Db_Model;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Migration_Model extends Base_Db_Model {

	/**
	 * @return string
	 */
	public static function table_name(): string {
		return 'migrations';
	}

	/**
	 * @return array
	 */
	public static function schema(): array {
		return array(
			'id'             => 'bigint(20) NOT NULL AUTO_INCREMENT',
			'version'        => 'varchar(255)',
			'executed_at'    => 'TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP',
			'execution_time' => 'int(11)',
		);
	}

	/**
	 * @return array
	 */
	public static function schema_keys(): array {
		return array(
			'id' => 'primary key',
		);
	}
}
