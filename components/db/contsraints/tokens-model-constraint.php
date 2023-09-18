<?php


namespace JFB_Component\Db\Constraints;

use Jet_Form_Builder\Db_Queries\Base_Db_Constraint;
use JFB_Component\Db\Models\Tokens_Model;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Tokens_Model_Constraint extends Base_Db_Constraint {

	public function __construct() {
		$this->set_model( new Tokens_Model() );
		$this->set_foreign_keys( array( 'token_id' ) );
		$this->on_delete( self::ACTION_CASCADE );
	}

}
