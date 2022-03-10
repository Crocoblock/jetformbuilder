<?php


namespace Jet_Form_Builder\Gateways\Db_Models;


use Jet_Form_Builder\Db_Queries\Base_Db_Model;
use Jet_Form_Builder\Gateways\Db_Models\Constraints\Payer_Model_Constraint;

class Payer_Shipping_Model extends Base_Db_Model {

	/**
	 * @inheritDoc
	 */
	public static function table_name(): string {
		return 'payers_shipping';
	}

	/**
	 * @inheritDoc
	 */
	public static function schema(): array {
		return array(
			'id'             => 'bigint(20) NOT NULL AUTO_INCREMENT',
			'payer_id'       => 'bigint(20)',
			'full_name'      => 'varchar(255)',
			'address_line_1' => 'varchar(255)',
			'address_line_2' => 'varchar(255)',
			'admin_area_2'   => 'varchar(255)',
			'admin_area_1'   => 'varchar(255)',
			'postal_code'    => 'varchar(100)',
			'country_code'   => 'varchar(100)',
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
			'payer_id' => 'index'
		);
	}

	public function foreign_relations(): array {
		return array(
			new Payer_Model_Constraint(),
		);
	}

}