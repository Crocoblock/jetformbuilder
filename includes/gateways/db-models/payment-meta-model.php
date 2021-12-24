<?php


namespace Jet_Form_Builder\Gateways\Db_Models;


class Payment_Meta_Model extends \Jet_Form_Builder\Db_Queries\Base_Db_Model {

	/**
	 * @inheritDoc
	 */
	public static function table_name(): string {
		return 'payments_meta';
	}

	/**
	 * @inheritDoc
	 */
	public static function schema(): array {
		return array(
			'id'         => 'bigint(20) NOT NULL AUTO_INCREMENT',
			'payment_id' => 'bigint(20)',
			'meta_key'   => 'varchar(255)',
			'meta_value' => 'text',
			'created_at' => 'TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP',
			'updated_at' => 'TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL'
		);
	}

	/**
	 * @inheritDoc
	 */
	public static function schema_keys(): array {
		return array( 'primary key' => 'id' );
	}
}