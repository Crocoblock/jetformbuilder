<?php


namespace JFB_Modules\Gateways\Db_Models\Constraints;

use Jet_Form_Builder\Db_Queries\Base_Db_Constraint;
use JFB_Modules\Gateways\Db_Models\Payer_Shipping_Model;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Payer_Shipping_Model_Constraint extends Base_Db_Constraint {

	public function __construct() {
		$this->set_model( new Payer_Shipping_Model() );
		$this->set_foreign_keys( array( 'payer_shipping_id' ) );
		$this->on_delete( self::ACTION_CASCADE );
	}

}
