<?php


namespace Jet_Form_Builder\Db_Queries\Constraints;


use Jet_Form_Builder\Db_Queries\Base_Db_Constraint;
use Jet_Form_Builder\Db_Queries\Models\Core_User_Model;

class User_Constraint extends Base_Db_Constraint {

	public function __construct() {
		$this->set_model( new Core_User_Model() );
		$this->set_foreign_keys( array( 'user_id' ) );
		$this->on_delete( self::ACTION_CASCADE );
	}

}