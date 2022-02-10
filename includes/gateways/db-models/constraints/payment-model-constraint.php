<?php


namespace Jet_Form_Builder\Gateways\Db_Models\Constraints;


use Jet_Form_Builder\Db_Queries\Base_Db_Constraint;
use Jet_Form_Builder\Gateways\Db_Models\Payment_Model;

class Payment_Model_Constraint extends Base_Db_Constraint {

	public function __construct() {
		$this->set_model( new Payment_Model() );
		$this->set_foreign_keys( array( 'payment_id' ) );
		$this->on_delete( self::ACTION_CASCADE );
	}

}