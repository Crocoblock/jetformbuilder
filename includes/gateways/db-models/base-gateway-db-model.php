<?php


namespace Jet_Form_Builder\Gateways\Db_Models;


use Jet_Form_Builder\Db_Queries\Base_Db_Model;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;

abstract class Base_Gateway_Db_Model extends Base_Db_Model {

	/**
	 * @throws Sql_Exception
	 */
	public function before_insert() {
		$payments      = new Payment_Model();
		$payments_meta = new Payment_Meta_Model();
		$payers        = new Payer_Model();
		$payers_ship   = new Payer_Shipping_Model();
		$notes         = new Notes_Model();

		$payments->safe_create();
		$payers->safe_create();
		$payers_ship->safe_create();
		$payments_meta->safe_create();
		$notes->safe_create();
	}

}