<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views;


use Jet_Form_Builder\Actions\Methods\Form_Record\Models\Record_Action_Result_Model;
use Jet_Form_Builder\Db_Queries\Views\View_Base;

class Record_Actions extends View_Base {

	protected $order_by = array(
		array(
			'column' => 'id',
			'sort'   => self::FROM_HIGH_TO_LOW,
		),
	);

	public function table(): string {
		return Record_Action_Result_Model::table();
	}

	public function select_columns(): array {
		return Record_Action_Result_Model::schema_columns();
	}
}