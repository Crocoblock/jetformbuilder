<?php


namespace Jet_Form_Builder\Gateways\Db_Models;


use Jet_Form_Builder\Db_Queries\Base_Db_Model;

class Payer_Model extends Base_Db_Model {

	/**
	 * @inheritDoc
	 */
	public static function table_name(): string {
		return 'payers';
	}

	/**
	 * @inheritDoc
	 */
	public static function schema(): array {
		return array(
			'id'             => 'bigint(20) NOT NULL AUTO_INCREMENT',
			'payer_id'       => 'varchar(100)',
			'first_name'     => 'varchar(100)',
			'last_name'      => 'varchar(100)',
			'email'          => 'varchar(255)',
			'created_at'     => 'TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP',
			'updated_at'     => 'TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL',
		);
	}

	/**
	 * @inheritDoc
	 */
	public static function schema_keys(): array {
		return array(
			'id'       => 'primary key',
			'payer_id' => 'index',
			'email'    => 'index',

		);
	}

}