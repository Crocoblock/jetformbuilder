<?php


namespace Jet_Form_Builder\Db_Queries\Constraints;

use Jet_Form_Builder\Db_Queries\Models\Core_Post_Model;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Form_Constraint extends Core_Table_Constraint {

	public function __construct() {
		$this->set_model( new Core_Post_Model() );
		$this->set_foreign_keys( array( 'form_id' ) );
		$this->on_delete( self::ACTION_CASCADE );
	}

}
