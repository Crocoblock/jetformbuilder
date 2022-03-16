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
			return static::find(
				array(
					'record_id' => (int) $record_id,
				)
			)->query()->query_all();

		} catch ( Query_Builder_Exception $exception ) {
			return array();
		}
	}

	public static function get_request_list( $record_id, $value_key = 'field_name', $label_key = 'field_value' ): array {
		$request = static::get_request( $record_id );

		return Tools::prepare_list_for_js( $request, $value_key, $label_key, true );
	}
}
