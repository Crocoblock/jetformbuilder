<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views;


use Jet_Form_Builder\Actions\Methods\Form_Record\Models\Record_Field_Model;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Db_Queries\Views\View_Base;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

class Record_Fields_View extends View_Base {

	public function table(): string {
		return Record_Field_Model::table();
	}

	public function select_columns(): array {
		return Record_Field_Model::schema_columns();
	}

	public static function get_request( $record_id ): array {
		try {
			$request = static::find(
				array(
					'record_id' => (int) $record_id
				)
			)->query()->query_all();

		} catch ( Query_Builder_Exception $exception ) {
			return array();
		}

		return Tools::prepare_list_for_js( $request, 'field_value', 'field_name', true );
	}
}