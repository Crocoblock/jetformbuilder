<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views;

use Jet_Form_Builder\Actions\Methods\Form_Record\Models\Record_Field_Model;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Db_Queries\Query_Conditions_Builder;
use Jet_Form_Builder\Db_Queries\Views\View_Base;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Actions\Methods\Form_Record\Tools as RecordTools;

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

	public function set_filters( array $filters ) {
		parent::set_filters( $filters );

		$record_id = $this->filters['record_id'] ?? 0;

		if ( empty( $record_id ) ) {
			return $this;
		}

		$this->set_conditions(
			array(
				array(
					'type'   => Query_Conditions_Builder::TYPE_EQUAL,
					'values' => array( 'record_id', $record_id ),
				),
			)
		);

		return $this;
	}

	/**
	 * @since 2.1.6 https://github.com/Crocoblock/issues-tracker/issues/1436
	 * @since 2.0.0 Introduced
	 *
	 * @param $record_id
	 * @param string $value_key
	 * @param string $label_key
	 *
	 * @return array
	 */
	public static function get_request_list( $record_id, $value_key = 'field_name', $label_key = 'field_value' ): array {
		$request = static::get_request( $record_id );

		RecordTools::parse_values( $request );

		return Tools::prepare_list_for_js( $request, $value_key, $label_key, true );
	}


}
