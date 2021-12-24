<?php


namespace Jet_Form_Builder\Gateways\Db_Models;


class Payer_Model extends \Jet_Form_Builder\Db_Queries\Base_Db_Model {

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
			'address_line_1' => 'varchar(255)',
			'admin_area_2'   => 'varchar(255)',
			'admin_area_1'   => 'varchar(255)',
			'postal_code'    => 'varchar(100)',
			'country_code'   => 'varchar(100)',
			'created_at'     => 'TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP',
			'updated_at'     => 'TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL'
		);
	}

	/**
	 * @inheritDoc
	 */
	public static function schema_keys(): array {
		return array( 'primary key' => 'id' );
	}

	public function prepare_where( $payer ): array {
		return array( 'id', 'payer_id' );
	}
}