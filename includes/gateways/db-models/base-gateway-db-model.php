<?php


namespace Jet_Form_Builder\Gateways\Db_Models;


use Jet_Form_Builder\Db_Queries\Base_Db_Model;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;

abstract class Base_Gateway_Db_Model extends Base_Db_Model {

	/**
	 * @throws Sql_Exception
	 */
	public function before_insert() {
		( new Payment_Model() )->safe_create();
		( new Payment_Meta_Model() )->safe_create();
		( new Payer_Model() )->safe_create();
		( new Payer_Shipping_Model() )->safe_create();
		( new Notes_Model() )->safe_create();
	}

}