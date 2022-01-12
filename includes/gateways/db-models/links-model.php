<?php


namespace Jet_Form_Builder\Gateways\Db_Models;


use Jet_Form_Builder\Db_Queries\Base_Db_Model;

class Links_Model extends Base_Db_Model {

	/**
	 * @inheritDoc
	 */
	public static function table_name(): string {
		return 'links';
	}

	/**
	 * @inheritDoc
	 */
	public static function schema(): array {
		return array(
			'id'            => 'bigint(20) NOT NULL AUTO_INCREMENT',
			'relation_id'   => 'bigint(20)',
			'relation_type' => 'varchar(100)',
			'href'          => 'text',
			'rel'           => 'varchar(20)',
			'method'        => 'varchar(20) DEFAULT \'GET\'',
			'created_at'    => 'TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP',
			'updated_at'    => 'TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL',
		);
	}

	/**
	 * @inheritDoc
	 */
	public static function schema_keys(): array {
		return array(
			'id' => 'primary key',
		);
	}


}