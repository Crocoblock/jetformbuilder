<?php


namespace JFB_Modules\Form_Record\Export;

use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use JFB_Components\Export\Export_Tools;
use JFB_Components\Export\Table_Entries_Export_It;
use JFB_Components\Wp_Nonce\Wp_Nonce;
use JFB_Components\Wp_Nonce\Wp_Nonce_It;
use JFB_Components\Wp_Nonce\Wp_Nonce_Trait;
use JFB_Modules\Form_Record\Module;
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
	protected function do_export() {
		if ( ! $this->get_wp_nonce()->verify() || ! current_user_can( 'manage_options' ) ) {
			throw new \Exception(
				__( 'You don`t have access to this URL', 'jet-form-builder' )
			);
		}

		$exporter        = $this->get_exporter();
		$this->record_id = $this->get_record_id();
		$this->record    = Record_View::findById( $this->record_id );
		$fields          = Record_Fields_View::get_request( $this->record_id );

		RecordTools::parse_values( $fields );

		$fields_columns = $this->get_field_columns( $fields );

		$exporter->set_file_name( $this->get_file_name(), 'jfb-form-record-' . $this->record_id );
		$exporter->headers();

		// headings
		$exporter->add_row( $this->prepare_row( $fields_columns, $this->extra_columns ) );

		$fields_values = array();

		foreach ( $fields as $field ) {
			$fields_values[ $field['field_name'] ] = $field['field_value'];
		}

		$exporter->add_row( $this->prepare_row( $fields_values, $this->record ) );
		$exporter->close();
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
			__( '%1$s-record-%2$d', 'jet-form-builder' ),
			get_the_title( $this->record['form_id'] ),
			$this->record_id
		);
	}


}
