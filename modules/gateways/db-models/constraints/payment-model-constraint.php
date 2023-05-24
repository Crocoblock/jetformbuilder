<?php


namespace JFB_Modules\Gateways\Db_Models\Constraints;

use Jet_Form_Builder\Db_Queries\Base_Db_Constraint;
use JFB_Modules\Gateways\Db_Models\Payment_Model;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Payment_Model_Constraint extends Base_Db_Constraint {

	public function __construct() {
		$this->set_model( new Payment_Model() );
		$this->set_foreign_keys( array( 'payment_id' ) );
		$this->on_delete( self::ACTION_CASCADE );
	}

}
