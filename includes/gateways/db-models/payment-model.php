<?php


namespace Jet_Form_Builder\Gateways\Db_Models;


class Payment_Model extends \Jet_Form_Builder\Db_Queries\Base_Db_Model {

	/**
	 * @inheritDoc
	 */
	public static function table_name(): string {
		return 'payments';
	}

	/**
	 * @inheritDoc
	 */
	public static function schema(): array {
		return array(
			'id'                     => 'bigint(20) NOT NULL AUTO_INCREMENT',
			'transaction_id'         => 'varchar(255)',
			'initial_transaction_id' => 'varchar(255)',
			'form_id'                => 'bigint(20)',
			'user_id'                => 'bigint(20)',
			'gateway_id'             => 'varchar(100)',
			'scenario'               => 'varchar(100)',
			'amount_value'           => 'DECIMAL(10,4)',
			'amount_code'            => 'varchar(100)',
			'type'                   => 'varchar(100)',
			'status'                 => 'varchar(100)',
			'created_at'             => 'TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP',
			'updated_at'             => 'TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL'
		);
	}

	/**
	 * @inheritDoc
	 */
	public static function schema_keys(): array {
		return array( 'primary key' => 'id' );
	}
}