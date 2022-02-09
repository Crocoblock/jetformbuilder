<?php


namespace Jet_Form_Builder\Gateways\Db_Models\Constraints;


use Jet_Form_Builder\Db_Queries\Base_Db_Constraint;
use Jet_Form_Builder\Gateways\Db_Models\Payer_Shipping_Model;

class Payer_Shipping_Model_Constraint extends Base_Db_Constraint {

	public function __construct() {
		$this->set_table( Payer_Shipping_Model::table() );
		$this->set_foreign_keys( array( 'payer_shipping_id' ) );
		$this->on_delete( self::ACTION_CASCADE );
	}

}