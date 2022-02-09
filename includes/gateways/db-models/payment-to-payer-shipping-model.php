<?php


namespace Jet_Form_Builder\Gateways\Db_Models;


use Jet_Form_Builder\Db_Queries\Base_Db_Model;
use Jet_Form_Builder\Gateways\Db_Models\Constraints\Payer_Shipping_Model_Constraint;
use Jet_Form_Builder\Gateways\Db_Models\Constraints\Payment_Model_Constraint;

class Payment_To_Payer_Shipping_Model extends Base_Db_Model {

	/**
	 * @inheritDoc
	 */
	public static function table_name(): string {
		return 'payment_to_payer_shipping';
	}

	/**
	 * @inheritDoc
	 */
	public static function schema(): array {
		return array(
			'payment_id'        => 'bigint(20) NOT NULL',
			'payer_shipping_id' => 'bigint(20) NOT NULL',
		);
	}

	public static function schema_keys(): array {
		return array(
			'payment_id'        => 'index',
			'payer_shipping_id' => 'index'
		);
	}

	public function foreign_relations(): array {
		return array(
			new Payer_Shipping_Model_Constraint(),
			new Payment_Model_Constraint()
		);
	}

}