<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record;


use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Dev_Mode\Logger;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Live_Form;
use Jet_Form_Builder\Request\Request_Handler;

class Controller {

	protected $settings = array(
		'save_user_data'    => false,
		'save_empty_fields' => false,
		'save_errors'       => false
	);
	protected $columns = array();
	protected $record_id;


	/**
	 * @param $defaults
	 *
	 * @throws Sql_Exception
	 */
	public function save( $defaults ) {
		/**
		 * Saving general information about the request from the form
		 * in `*_jet_fb_records`
		 * by \Jet_Form_Builder\Actions\Methods\Form_Record\Record_Model
		 */
		$this->record_id = $this->save_record( $defaults );

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

	}

	/**
	 * @param $defaults
	 *
	 * @return int
	 * @throws Sql_Exception
	 */
	public function save_record( $defaults ) {
		$this->set_columns( array(
			'form_id'           => $this->handler()->get_form_id(),
			'referrer'          => $this->handler()->get_refer(),
			'submit_type'       => jet_form_builder()->form_handler->is_ajax() ? 'ajax' : 'reload',
			'user_id'           => get_current_user_id(),
			'from_content_id'   => Live_Form::instance()->post->ID ?? 0,
			'from_content_type' => 'post', /* it can be replaced by CCT slug */
		) );

		$this->set_columns( $defaults );

		$this->maybe_unset_user_data();

		return ( new Record_Model )->insert( $this->columns );
	}

	/**
	 * @return int[]
	 * @throws Sql_Exception
	 */
	public function save_actions() {
		list( $success, $skipped, $failed ) = $this->get_chunked_actions();

		$actions = array_merge(
			$this->get_prepared_actions( $success, 'success' ),
			$this->get_prepared_actions( $skipped, 'skipped' ),
			$this->get_prepared_actions( $failed, 'failed' )
		);

		return ( new Record_Action_Result_Model )->insert_many( $actions );
	}

	public function get_chunked_actions() {
		list( $passed, $skipped ) = array(
			$this->handler()->get_passed_actions(),
			$this->handler()->get_skipped_actions()
		);

		$passed_actions  = array();
		$skipped_actions = array();
		$with_errors     = array();

		foreach ( $this->handler()->get_all() as $index => $action ) {
			if ( $this->handler()->get_position() === $index ) {
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
			$with_errors
		);
	}

	/**
	 * @return int[]
	 * @throws Sql_Exception
	 */
	public function save_fields() {
		$fields = $this->get_prepared_fields();

		return ( new Record_Field_Model )->insert_many( $fields );
	}

	/**
	 * @return int[]
	 * @throws Sql_Exception
	 */
	public function save_errors() {
		$errors = $this->get_prepared_errors();

		return ( new Record_Error_Model )->insert_many( $errors );
	}

	private function get_prepared_errors() {
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
					'data'         => wp_json_encode( $log['data'] ),
					'trace_string' => $log['trace_string'],
				);
			}
		}

		return $errors;
	}

	private function get_prepared_fields() {
		$core_fields = jet_form_builder()->form_handler->hidden_request_fields();
		$fields      = array();

		foreach ( $this->handler()->request_data as $field_name => $value ) {
			// like 1=1 SQL-trick
			if ( false
			     || isset( $core_fields[ $field_name ] )
			     || ( empty( $this->settings['save_empty_fields'] ) && empty( $value ) )
			     || Request_Handler::REPEATERS_SETTINGS === $field_name
			) {
				continue;
			}
			$current_attrs = jet_form_builder()->form->get_field_by_name(
				0,
				$field_name,
				jet_form_builder()->form_handler->request_handler->_fields
			);

			$type = jet_form_builder()->form->field_name( $current_attrs['blockName'] ?? '' );

			$fields[] = array(
				'record_id'   => $this->record_id,
				'field_name'  => $field_name,
				'field_type'  => $type,
				'field_value' => is_scalar( $value ) ? $value : wp_json_encode( $value )
			);
		}

		return $fields;
	}

	private function get_prepared_actions( $source, $status ) {
		$actions = array();

		/**
		 * @var $source Base[]
		 */
		foreach ( $source as $action ) {
			$actions[] = array(
				'record_id'   => $this->record_id,
				'action_slug' => $action->get_id(),
				'action_id'   => $action->_id,
				'status'      => $status,
			);
		}

		return $actions;
	}

	public function maybe_unset_user_data() {
		if ( ! empty( $this->settings['save_user_data'] ) ) {
			return $this;
		}

		unset(
			$this->columns['user_agent'],
			$this->columns['ip_address']
		);

		return $this;
	}


	public function handler() {
		return jet_form_builder()->form_handler->action_handler;
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