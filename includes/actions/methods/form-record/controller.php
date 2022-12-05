<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record;

use Jet_Form_Builder\Actions\Methods\Form_Record\Models;
use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_Fields_View;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Classes\Http\Http_Tools;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Dev_Mode\Logger;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Live_Form;

class Controller {

	protected $settings = array(
		'save_user_data'    => false,
		'save_empty_fields' => false,
		'save_errors'       => false,
	);
	protected $columns  = array();
	protected $record_id;
	protected $is_new   = true;

	public function get_record_id(): int {
		return (int) $this->record_id;
	}

	public function set_record_id( $record_id ): Controller {
		$this->record_id = (int) $record_id;
		$this->is_new    = false;

		return $this;
	}

	/**
	 * @return $this
	 * @throws Sql_Exception
	 */
	public function save() {
		/**
		 * Saving general information about the request from the form
		 * in `*_jet_fb_records`
		 * by \Jet_Form_Builder\Actions\Methods\Form_Record\Record_Model
		 */
		$this->record_id = $this->save_record();

		/**
		 * Saving each field as a separate record
		 * in `*_jet_fb_records_fields`
		 * by \Jet_Form_Builder\Actions\Methods\Form_Record\Record_Field_Model
		 */
		$this->save_fields();

		/**
		 * We save information about completed actions
		 * in `*_jet_fb_records_actions`
		 * by \Jet_Form_Builder\Actions\Methods\Form_Record\Record_Action_Result_Model
		 */
		$this->save_actions();

		/**
		 * We save the errors that the Logger collected.
		 * in `*_jet_fb_records_errors`
		 * by \Jet_Form_Builder\Actions\Methods\Form_Record\Record_Error_Model
		 */
		$this->save_errors();

		return $this;
	}

	/**
	 * @return int
	 * @throws Sql_Exception
	 */
	public function save_record(): int {
		$args    = jet_form_builder()->form_handler->get_response_args();
		$columns = array(
			'form_id'           => jet_fb_handler()->get_form_id(),
			'referrer'          => jet_fb_handler()->refer,
			'submit_type'       => jet_form_builder()->form_handler->is_ajax() ? 'ajax' : 'reload',
			'user_id'           => get_current_user_id(),
			'from_content_id'   => Live_Form::instance()->post->ID ?? 0,
			'from_content_type' => Live_Form::instance()->post->post_type, /* it can be replaced by CCT slug */
			'status'            => $args['status'] ?? '',
		);

		$this->set_columns( $columns );
		$this->maybe_set_user_data();

		return ( new Models\Record_Model() )->insert( $this->columns );
	}

	/**
	 * @return int[]
	 * @throws Sql_Exception
	 */
	public function save_actions(): array {
		list( $success, $skipped, $failed ) = $this->get_chunked_actions();

		$actions = array_merge(
			$this->get_prepared_actions( $success, 'success' ),
			$this->get_prepared_actions( $skipped, 'skipped' ),
			$this->get_prepared_actions( $failed, 'failed' )
		);

		return ( new Models\Record_Action_Result_Model() )->insert_many( $actions );
	}

	public function get_chunked_actions(): array {
		list( $passed, $skipped ) = array(
			jet_fb_action_handler()->get_passed_actions(),
			jet_fb_action_handler()->get_skipped_actions(),
		);

		$passed_actions  = array();
		$skipped_actions = array();
		$with_errors     = array();

		foreach ( jet_fb_action_handler()->get_all() as $index => $action ) {
			if ( jet_fb_action_handler()->get_position() === $index ) {
				continue;
			}
			if ( in_array( $index, $passed, true ) ) {
				$passed_actions[] = $action;
			} elseif ( in_array( $index, $skipped, true ) ) {
				$skipped_actions[] = $action;
			} else {
				$with_errors[] = $action;
			}
		}

		return array(
			$passed_actions,
			$skipped_actions,
			$with_errors,
		);
	}

	/**
	 * @return int[]
	 * @throws Sql_Exception
	 */
	public function save_fields(): array {
		$fields = $this->get_prepared_fields();

		return ( new Models\Record_Field_Model() )->insert_many( $fields );
	}

	/**
	 * @return int[]
	 * @throws Sql_Exception
	 */
	public function save_errors(): array {
		$errors = $this->get_prepared_errors();

		return ( new Models\Record_Error_Model() )->insert_many( $errors );
	}

	private function get_prepared_errors(): array {
		$errors = array();

		if ( empty( $this->settings['save_errors'] ) ) {
			return array();
		}

		foreach ( Logger::instance()->get_logs() as $instance => $logs ) {
			foreach ( $logs as $log ) {
				$errors[] = array(
					'record_id'    => $this->record_id,
					'name'         => $instance,
					'message'      => $log['message'],
					'file'         => $log['file'],
					'line'         => $log['line'],
					'data'         => Tools::encode_json( $log['data'] ),
					'trace_string' => $log['trace_string'],
				);
			}
		}

		return $errors;
	}

	/**
	 * @since 2.1.6 https://github.com/Crocoblock/issues-tracker/issues/1436
	 * @since 2.0.0 Introduced
	 *
	 * @return array
	 */
	private function get_prepared_fields(): array {
		$fields = array();

		foreach ( $this->generate_request() as list( $field_name, $value, $type, $attrs ) ) {
			$fields[] = array(
				'record_id'   => $this->record_id,
				'field_name'  => $field_name,
				'field_type'  => empty( $type ) ? 'computed' : $type,
				'field_value' => $value,
				'field_attrs' => Tools::encode_json( $attrs ),
			);
		}

		return $fields;
	}

	private function generate_request(): \Generator {
		$core_fields = jet_form_builder()->form_handler->hidden_request_fields();
		$saved       = array();

		if ( ! $this->is_new ) {
			$saved = Record_Fields_View::get_request_list( $this->record_id );
		}

		foreach ( jet_fb_action_handler()->request_data as $field_name => $value ) {
			if (
				isset( $core_fields[ $field_name ] ) ||
				( empty( $this->settings['save_empty_fields'] ) && empty( $value ) ) ||
				array_key_exists( $field_name, $saved )
			) {
				continue;
			}

			$current_attrs = jet_fb_request_handler()->get_attrs_by_name( $field_name );

			if ( 'password' === ( $current_attrs['field_type'] ?? '' ) ) {
				continue;
			}

			$type          = jet_fb_request_handler()->get_type( $field_name );
			$attrs_to_save = $this->get_attrs_by_field_type( $type, $current_attrs );

			if ( ! is_scalar( $value ) ) {
				$value = Tools::encode_json( $value );

				$attrs_to_save['is_encoded'] = true;
			}

			yield array( $field_name, $value, $type, $attrs_to_save );
		}
	}

	private function get_attrs_by_field_type( string $type, array $block ) {
		$list = array( 'label' );

		switch ( $type ) {
			case 'text-field':
				$list[] = 'field_type';
				break;
		}
		$attrs = Block_Helper::get_attrs_from_block( $block, $list );

		return apply_filters( 'jet-form-builder/on-save-record/field-attributes', $attrs, $type, $block );
	}

	private function get_prepared_actions( $source, $status ): array {
		$actions = array();

		/**
		 * @var $source Base[]
		 */
		foreach ( $source as $action ) {
			if ( ! $action->get_executed_events() ) {
				continue;
			}
			foreach ( $action->get_executed_events() as $on_event ) {
				$actions[] = array(
					'record_id'   => $this->record_id,
					'action_slug' => $action->get_id(),
					'action_id'   => $action->_id,
					'on_event'    => $on_event,
					'status'      => $status,
				);
			}
		}

		return $actions;
	}

	public function maybe_set_user_data(): Controller {
		if ( empty( $this->settings['save_user_data'] ) ) {
			return $this;
		}

		$this->columns['user_agent'] = Http_Tools::get_user_agent();
		$this->columns['ip_address'] = Http_Tools::get_ip_address();

		return $this;
	}

	public function set_setting( string $key, $value ) {
		$this->settings[ $key ] = $value;

		return $this;
	}

	public function set_settings( array $source ) {
		$this->settings = array_merge( $this->settings, $source );

		return $this;
	}


	public function set_columns( array $columns ) {
		$this->columns = array_merge( $this->columns, $columns );

		return $this;
	}

}
