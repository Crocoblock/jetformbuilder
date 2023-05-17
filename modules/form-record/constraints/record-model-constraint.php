<?php


namespace JFB_Modules\Form_Record\Constraints;

use JFB_Modules\Form_Record\Models\Record_Model;
use Jet_Form_Builder\Db_Queries\Base_Db_Constraint;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Record_Model_Constraint extends Base_Db_Constraint {

	public function __construct() {
		$this->set_model( new Record_Model() );
		$this->set_foreign_keys( array( 'record_id' ) );
		$this->on_delete( self::ACTION_CASCADE );
	}

}
