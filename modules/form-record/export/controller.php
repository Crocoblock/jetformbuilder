<?php


namespace JFB_Modules\Form_Record\Export;

use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use JFB_Components\Export\Export_Tools;
use JFB_Components\Export\Multiple_Entries_Export_It;
use JFB_Components\Wp_Nonce\Wp_Nonce;
use JFB_Modules\Form_Record\Query_Views\Record_Fields_View;
use JFB_Modules\Form_Record\Query_Views\Record_View;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Controller {

	const ACTION = 'jfb_records_export_admin';

	protected $nonce;
	protected $fields_columns;
	protected $extra_columns;
	protected $form_id;

	public function __construct() {
		$this->nonce = new Wp_Nonce( self::ACTION );
	}

	public function run() {
		try {
			$this->do_export();
		} catch ( \Exception $exception ) {
			// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
			wp_die(
				$exception->getMessage(),
				__( 'Error', 'jet-form-builder' )
			);
			// phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
		}
	}

	/**
	 * @throws \Exception
	 */
	protected function do_export() {
		if ( ! $this->nonce->verify() || ! current_user_can( 'manage_options' ) ) {
			throw new \Exception(
				__( 'You don`t have access to this URL', 'jet-form-builder' )
			);
		}

		$exporter             = $this->get_exporter();
		$this->form_id        = $this->get_form_id();
		$this->fields_columns = $this->get_field_columns();
		$this->extra_columns  = $this->get_extra_columns();

		if ( ! $this->fields_columns && ! $this->extra_columns ) {
			throw new \Exception(
				__( 'Fields or additional columns must be specified', 'jet-form-builder' )
			);
		}

		$exporter->set_file_name( $this->get_file_name(), 'jfb-form-records' );
		$exporter->headers();

		// headings
		$exporter->add_row( $this->prepare_row( $this->fields_columns, $this->extra_columns ) );

		$this->add_rows( $exporter );
		$exporter->close();
		die;
	}


	/**
	 * @param Multiple_Entries_Export_It $export
	 */
	protected function add_rows( Multiple_Entries_Export_It $export ) {
		try {
			$records = $this->get_records();
		} catch ( Query_Builder_Exception $exception ) {
			return;
		}

		$fields_view     = $this->get_fields_view();
		$fields_headings = array_keys( $this->fields_columns );
		$fields_empty    = array();

		foreach ( $fields_headings as $name ) {
			$fields_empty[ $name ] = '';
		}

		foreach ( $records as $record ) {
			$fields_view->set_conditions( array() );
			$fields_view->set_filters(
				array(
					'record_id' => $record['id'],
					'names'     => $fields_headings,
				)
			);

			try {
				$fields_values = $this->get_fields_values( $fields_view, $fields_headings );
			} catch ( Query_Builder_Exception $exception ) {
				$fields_values = $fields_empty;
			}

			$export->add_row( $this->prepare_row( $fields_values, $record ) );
		}
	}


	protected function prepare_row( array $fields_values, array $extra_values ): array {
		foreach ( $extra_values as $property => $record_value ) {
			$extra_values[ sprintf( 'extra|%s', $property ) ] = is_null( $record_value ) ? '' : $record_value;
			unset( $extra_values[ $property ] );
		}

		return array_merge(
			$fields_values,
			$extra_values
		);
	}

	/**
	 * @param Record_Fields_View $view
	 * @param array $fields_headings
	 *
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	protected function get_fields_values( Record_Fields_View $view, array $fields_headings ): array {
		$fields_values = array();
		$fields        = $view->query()->generate_all();

		foreach ( $fields as $field ) {
			foreach ( $fields_headings as $field_name ) {
				if ( ! isset( $fields_values[ $field_name ] ) ) {
					$fields_values[ $field_name ] = '';
				}

				if ( ( $field->field_name ?? '' ) !== $field_name ) {
					continue;
				}

				$fields_values[ $field_name ] = $field->field_value;
			}
		}

		return $fields_values;
	}

	protected function get_field_columns(): array {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$fields  = array_map( 'sanitize_key', (array) ( $_GET['fields'] ?? array() ) );
		$columns = array();

		$blocks = Block_Helper::get_blocks_by_post( $this->form_id );

		foreach ( $fields as $field_name ) {
			$block = Block_Helper::find_block_by_name( $field_name, $blocks );

			if ( empty( $block['attrs']['label'] ) ) {
				$columns[ $field_name ] = $field_name;
				continue;
			}

			$columns[ $field_name ] = $block['attrs']['label'];
		}

		return $columns;
	}

	protected function get_extra_columns(): array {
		$columns = array(
			'id'                => __( 'ID (primary)', 'jet-form-builder' ),
			'form_id'           => __( 'Form ID', 'jet-form-builder' ),
			'user_id'           => __( 'User ID', 'jet-form-builder' ),
			'from_content_id'   => __( 'From content ID', 'jet-form-builder' ),
			'from_content_type' => __( 'From content type', 'jet-form-builder' ),
			'status'            => __( 'Status', 'jet-form-builder' ),
			'ip_address'        => __( 'IP address', 'jet-form-builder' ),
			'user_agent'        => __( 'User agent', 'jet-form-builder' ),
			'referrer'          => __( 'Referrer', 'jet-form-builder' ),
			'submit_type'       => __( 'Submit type', 'jet-form-builder' ),
			'is_viewed'         => __( 'Is viewed', 'jet-form-builder' ),
			'created_at'        => __( 'Created', 'jet-form-builder' ),
			'updated_at'        => __( 'Updated', 'jet-form-builder' ),
		);

		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$extra = array_map( 'sanitize_key', (array) ( $_GET['extra'] ?? array() ) );

		foreach ( $columns as $column_name => $label ) {
			if ( ! in_array( $column_name, $extra, true ) ) {
				unset( $columns[ $column_name ] );
			}
		}

		return $columns;
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
	 * @return Multiple_Entries_Export_It
	 * @throws \Exception
	 */
	protected function get_exporter(): Multiple_Entries_Export_It {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$exporter = Export_Tools::get_exporter( sanitize_key( $_GET['format'] ?? 'csv' ) );

		if ( ! ( $exporter instanceof Multiple_Entries_Export_It ) ) {
			throw new \Exception(
				__( 'Undefined export type', 'jet-form-builder' )
			);
		}

		return $exporter;
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
		$view->set_select( array_keys( $this->extra_columns ) );

		return $view->query()->generate_all( ARRAY_A );
	}

	protected function get_fields_view(): Record_Fields_View {
		$view = new Record_Fields_View();
		$view->set_select(
			array(
				'field_value',
				'field_name',
			)
		);

		return $view;
	}

	protected function get_file_name(): string {
		return get_the_title( $this->form_id ) . ' ' . __( 'records', 'jet-form-builder' );
	}

	public function get_nonce(): Wp_Nonce {
		return $this->nonce;
	}

	public function get_url(): string {
		return add_query_arg(
			array(
				'action'                 => self::ACTION,
				$this->nonce->get_name() => $this->nonce->create(),
			),
			admin_url( 'admin.php' )
		);
	}


}
