<?php


namespace JFB_Modules\Form_Record\Query_Views;

use JFB_Modules\Form_Record\Models\Record_Action_Result_Model;
use JFB_Modules\Form_Record\Models\Record_Error_Model;
use Jet_Form_Builder\Db_Queries\Views\View_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Record_Errors extends View_Base {

	public function table(): string {
		return Record_Error_Model::table();
	}

	public function select_columns(): array {
		return Record_Error_Model::schema_columns();
	}
}
