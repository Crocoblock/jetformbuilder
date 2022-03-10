<?php


namespace Jet_Form_Builder\Gateways\Db_Models;


use Jet_Form_Builder\Actions\Methods\Form_Record\Constraints\Record_Model_Constraint;
use Jet_Form_Builder\Db_Queries\Base_Db_Constraint;
use Jet_Form_Builder\Db_Queries\Base_Db_Model;
use Jet_Form_Builder\Gateways\Db_Models\Constraints\Payment_Model_Constraint;

class Payment_To_Record extends Base_Db_Model {

	public static function table_name(): string {
		return 'payments_to_records';
	}

	/**
	 * @inheritDoc
	 */
	public static function schema(): array {
		return array(
			'id'         => 'bigint(20) NOT NULL AUTO_INCREMENT',
			'payment_id' => 'bigint(20) NOT NULL',
			'record_id'  => 'bigint(20) NOT NULL',
		);
	}

	public static function schema_keys(): array {
		return array(
			'id'         => 'primary key',
			'payment_id' => 'index',
			'record_id'  => 'index',
		);
	}

	public function foreign_relations(): array {
		return array(
			new Payment_Model_Constraint(),
			new Record_Model_Constraint(),
		);
	}
}