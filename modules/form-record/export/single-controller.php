<?php


namespace JFB_Modules\Form_Record\Export;

use JFB_Modules\Form_Record\Query_Views\Record_View;
use JFB_Modules\Form_Record\Tools;

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

		$record_view = Record_View::findOne( array( 'id' => $this->record_id ) );
		$record_view->set_select( array_keys( $this->extra_columns ) );

		$this->record = $record_view->query()->query_one();

		// set fields & request
		Tools::apply_context( $this->record );

		$fields_columns = $this->get_field_columns();

		$this->get_exporter()->set_title( $this->get_file_name() );
		$this->get_exporter()->open();

		// headings
		$this->get_exporter()->add_row( $this->prepare_row( $fields_columns, $this->extra_columns ) );

		foreach ( jet_fb_context()->iterate_values_table() as $row ) {
			$this->get_exporter()->add_row(
				$this->prepare_row( iterator_to_array( $row ), $this->record )
			);
		}

		$this->get_exporter()->close();
		die;
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
