<?php


namespace JFB_Modules\Form_Record\Export;

use JFB_Components\Export\Export_Tools;
use JFB_Modules\Form_Record\Query_Views\Record_Fields_View;
use JFB_Modules\Form_Record\Query_Views\Record_View;
use JFB_Modules\Form_Record\Tools as RecordTools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Single_Controller extends Base_Export_Controller {

	protected $record_id;
	protected $record;
	protected $fields;

	/**
	 * @throws \Exception
	 */
	public function do_export() {
		$this->record_id = $this->get_record_id();
		$fields          = Record_Fields_View::get_request( $this->record_id );

		$record_view = Record_View::findOne( array( 'id' => $this->record_id ) );
		$record_view->set_select( array_keys( $this->extra_columns ) );

		$this->record = $record_view->query()->query_one();

		RecordTools::parse_values( $fields );

		$fields_columns = $this->get_field_columns( $fields );

		$this->get_exporter()->set_title( $this->get_file_name() );
		$this->get_exporter()->open();

		// headings
		$this->get_exporter()->add_row( $this->prepare_row( $fields_columns, $this->extra_columns ) );

		$fields_values = array();

		foreach ( $fields as $field ) {
			$fields_values[ $field['field_name'] ] = $field['field_value'];
		}

		$this->get_exporter()->add_row( $this->prepare_row( $fields_values, $this->record ) );
		$this->get_exporter()->close();
		die;
	}

	protected function get_field_columns( array $fields ): array {
		$columns = array();

		foreach ( $fields as $field ) {
			$label = $field['field_attrs']['label'] ?? '';
			$label = empty( $label ) ? $field['field_name'] : $label;

			$columns[ $field['field_name'] ] = $label;
		}

		return $columns;
	}

	/**
	 * @return int
	 * @throws \Exception
	 */
	protected function get_record_id(): int {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$record_id = absint( $_GET['id'] ?? '' );

		if ( ! $record_id ) {
			throw new \Exception(
				__( 'Record ID is empty', 'jet-form-builder' )
			);
		}

		return $record_id;
	}

	protected function get_file_name(): string {
		return sprintf(
		/* translators: %1$s - form title, %2$d - record ID */
			__( '%1$s record (%2$d)', 'jet-form-builder' ),
			get_the_title( $this->record['form_id'] ),
			$this->record_id
		);
	}


}
