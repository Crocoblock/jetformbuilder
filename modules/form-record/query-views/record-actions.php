<?php


namespace JFB_Modules\Form_Record\Query_Views;

use JFB_Modules\Form_Record\Models\Record_Action_Result_Model;
use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Db_Queries\Views\View_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Record_Actions extends View_Base {

	public function table(): string {
		return Record_Action_Result_Model::table();
	}

	public function select_columns(): array {
		return Record_Action_Result_Model::schema_columns();
	}

	public function get_dependencies(): array {
		return array(
			new Record_Action_Result_Model(),
		);
	}

	public function query(): Query_Builder {
		$this->prepare_dependencies();

		return ( new Query_Builder() )->set_view( $this );
	}
}
