<?php


namespace JFB_Modules\Form_Record\Export;

use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use JFB_Modules\Block_Parsers\Field_Data_Parser;
use JFB_Modules\Form_Record\Query_Views\Record_Fields_View;
use JFB_Modules\Form_Record\Query_Views\Record_View;
use JFB_Modules\Form_Record\Tools as RecordTools;
use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Multiple_Controller extends Base_Export_Controller {

	protected $form_id;

	/**
	 * @throws \Exception
	 */
	public function do_export() {
		$this->form_id = $this->get_form_id();

		// set fields without request
		jet_fb_context()->set_parsers(
			Block_Helper::get_blocks_by_post( $this->form_id )
		);

		$this->fields_columns = $this->get_field_columns();
		$this->modify_extra_columns();

		if ( ! $this->fields_columns && ! $this->extra_columns ) {
			throw new \Exception(
				__( 'Fields or additional columns must be specified', 'jet-form-builder' )
			);
		}

		$this->get_exporter()->set_title( $this->get_file_name() );
		$this->get_exporter()->open();

		// headings
		$this->get_exporter()->add_row( $this->prepare_row( $this->fields_columns, $this->extra_columns ) );

		$this->add_rows();
		$this->get_exporter()->close();
		die;
	}

	protected function add_rows() {
		try {
			$records = $this->get_records();
		} catch ( Query_Builder_Exception $exception ) {
			return;
		}

		$fields_view     = $this->get_fields_view();
		$fields_headings = array_keys( $this->fields_columns );
		$fields_empty    = array_fill_keys( $fields_headings, '' );
		$names           = $this->get_selected_field_names();

		foreach ( $records as $record ) {
			$fields_view->set_conditions( array() );
			$fields_view->set_filters(
				array(
					'record_id' => $record['id'],
					'names'     => $names,
				)
			);

			/**
			 * @see https://github.com/Crocoblock/issues-tracker/issues/3112
			 */
			if ( empty( $this->extra_columns['id'] ) ) {
				unset( $record['id'] );
			}

			try {
				$request = $this->get_fields_values( $fields_view );
			} catch ( Query_Builder_Exception $exception ) {
				$this->get_exporter()->add_row( $this->prepare_row( $fields_empty, $record ) );

				continue;
			}

			jet_fb_context()->set_request( $request );
			jet_fb_context()->apply_request();

			foreach ( jet_fb_context()->iterate_values_table() as $row ) {
				$this->get_exporter()->add_row(
					$this->prepare_row(
						array_merge( $fields_empty, iterator_to_array( $row ) ),
						$record
					)
				);
			}
		}
	}

	protected function get_selected_field_names(): array {
		$names = array();

		foreach ( jet_fb_context()->iterate_parsers() as $parser ) {
			$names[] = $parser->get_name();
		}

		return $names;
	}

	/**
	 * @param Record_Fields_View $view
	 *
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	protected function get_fields_values( Record_Fields_View $view ): array {
		return iterator_to_array(
			RecordTools::iterate_request( $view->query()->generate_all( ARRAY_A ) )
		);
	}

	protected function get_field_columns(): array {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$fields = array_map( 'sanitize_key', (array) ( $_GET['fields'] ?? array() ) );

		foreach ( jet_fb_context()->iterate_parsers() as $name => $parser ) {
			if ( in_array( $name, $fields, true ) ) {
				continue;
			}
			$parser->get_context()->remove( $parser->get_name() );
		}

		return parent::get_field_columns();
	}

	protected function modify_extra_columns() {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$extra = array_map( 'sanitize_key', (array) ( $_GET['extra'] ?? array() ) );

		foreach ( $this->extra_columns as $column_name => $label ) {
			if ( ! in_array( $column_name, $extra, true ) ) {
				unset( $this->extra_columns[ $column_name ] );
			}
		}
	}

	/**
	 * @return int
	 * @throws \Exception
	 */
	protected function get_form_id(): int {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$form_id = absint( $_GET['filters']['form'] ?? '' );

		if ( ! $form_id ) {
			throw new \Exception(
				__( 'Form ID is empty', 'jet-form-builder' )
			);
		}

		return $form_id;
	}

	/**
	 * @return \Generator
	 * @throws Query_Builder_Exception
	 */
	protected function get_records(): \Generator {
		$view = ( new Record_View() )->set_filters(
		// phpcs:ignore WordPress.Security
			(array) ( $_GET['filters'] ?? array() )
		);

		$columns = $this->extra_columns;

		/**
		 * @see https://github.com/Crocoblock/issues-tracker/issues/3112
		 */
		if ( empty( $columns['id'] ) ) {
			$columns['id'] = true;
		}

		$view->set_select( array_keys( $columns ) );

		return $view->query()->generate_all( ARRAY_A );
	}

	protected function get_fields_view(): Record_Fields_View {
		$view = new Record_Fields_View();
		$view->set_select(
			array(
				'field_value',
				'field_name',
				'field_attrs',
			)
		);

		return $view;
	}

	protected function get_file_name(): string {
		return get_the_title( $this->form_id ) . ' ' . __( 'records', 'jet-form-builder' );
	}


}
