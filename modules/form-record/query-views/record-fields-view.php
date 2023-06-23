<?php


namespace JFB_Modules\Form_Record\Query_Views;

use Jet_Form_Builder\Db_Queries\Query_Builder;
use JFB_Modules\Form_Record\Models\Record_Field_Model;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Db_Queries\Query_Conditions_Builder;
use Jet_Form_Builder\Db_Queries\Views\View_Base;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use JFB_Modules\Form_Record\Tools as RecordTools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Record_Fields_View extends View_Base {

	public function table(): string {
		return Record_Field_Model::table();
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

		$this->set_record_filter();
		$this->set_names_filter();

		return $this;
	}

	protected function set_record_filter(): Record_Fields_View {
		$record_id = absint( $this->filters['record_id'] ?? 0 );

		if ( empty( $record_id ) ) {
			return $this;
		}

		return $this->add_conditions(
			array(
				array(
					'type'   => Query_Conditions_Builder::TYPE_EQUAL,
					'values' => array( 'record_id', $record_id ),
				),
			)
		);
	}

	protected function set_names_filter(): Record_Fields_View {
		$names = (array) ( $this->filters['names'] ?? array() );

		if ( empty( $names ) ) {
			return $this;
		}

		return $this->add_conditions(
			array(
				array(
					'type'   => Query_Conditions_Builder::TYPE_IN,
					'values' => array( 'field_name', $names ),
				),
			)
		);
	}

	/**
	 * @since 2.1.6 https://github.com/Crocoblock/issues-tracker/issues/1436
	 * @since 2.0.0 Introduced
	 *
	 * @param $record_id
	 *
	 * @return array
	 */
	public static function get_request_list( $record_id ): array {
		$request = static::get_request( $record_id );

		return iterator_to_array( RecordTools::iterate_request( $request ) );
	}

	public function query(): Query_Builder {
		$this->prepare_dependencies();

		if ( ! $this->select ) {
			$this->set_select( Record_Field_Model::schema_columns() );
		}

		return ( new Query_Builder() )->set_view( $this );
	}


}
