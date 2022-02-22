<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record;

use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Dev_Mode\Logger;
use Jet_Form_Builder\Dev_Mode\Manager;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Live_Form;
use Jet_Form_Builder\Request\Request_Handler;
use Jet_Form_Builder\Actions\Methods\Form_Record\Models;

class Controller {

	protected $settings = array(
		'save_user_data'    => false,
		'save_empty_fields' => false,
		'save_errors'       => false,
	);
	protected $columns = array();
	protected $record_id;

	public function __construct() {
		$this->set_setting( 'save_errors', Manager::instance()->active() );
	}


	public function get_record_id(): int {
		return (int) $this->record_id;
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
	 * @param $defaults
	 *
	 * @return int
	 * @throws Sql_Exception
	 */
	public function save_record( $defaults = array() ) {
		$args = jet_form_builder()->form_handler->get_response_args();

		$this->set_columns(
			array(
				'form_id'           => jet_fb_handler()->get_form_id(),
				'referrer'          => jet_fb_handler()->refer,
				'submit_type'       => jet_form_builder()->form_handler->is_ajax() ? 'ajax' : 'reload',
				'user_id'           => get_current_user_id(),
				'from_content_id'   => Live_Form::instance()->post->ID ?? 0,
				'from_content_type' => 'post', /* it can be replaced by CCT slug */
				'status'            => $args['status'] ?? '',
			)
		);

		$this->set_columns( $defaults );

		$this->maybe_unset_user_data();

		return ( new Models\Record_Model() )->insert( $this->columns );
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

		return ( new Models\Record_Action_Result_Model() )->insert_many( $actions );
	}

	public function get_chunked_actions() {
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
	public function save_fields() {
		$fields = $this->get_prepared_fields();

		return ( new Models\Record_Field_Model() )->insert_many( $fields );
	}

	/**
	 * @return int[]
	 * @throws Sql_Exception
	 */
	public function save_errors() {
		$errors = $this->get_prepared_errors();

		return ( new Models\Record_Error_Model() )->insert_many( $errors );
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

	private function get_prepared_fields(): array {
		$core_fields = jet_form_builder()->form_handler->hidden_request_fields();
		$fields      = array();

		foreach ( jet_fb_action_handler()->request_data as $field_name => $value ) {
			// like 1=1 SQL-trick
			if ( false
			     || isset( $core_fields[ $field_name ] )
			     || ( empty( $this->settings['save_empty_fields'] ) && empty( $value ) )
			) {
				continue;
			}
			$current_attrs = Block_Helper::find_block_by_name(
				$field_name,
				jet_form_builder()->form_handler->request_handler->_fields
			);

			$type = Block_Helper::delete_namespace( $current_attrs );

			$fields[] = array(
				'record_id'   => $this->record_id,
				'field_name'  => $field_name,
				'field_type'  => $type,
				'field_value' => is_scalar( $value ) ? $value : wp_json_encode( $value ),
			);
		}

		return $fields;
	}

	private function get_prepared_actions( $source, $status ): array {
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

	public function maybe_unset_user_data(): Controller {
		if ( ! empty( $this->settings['save_user_data'] ) ) {
			return $this;
		}

		unset(
			$this->columns['user_agent'],
			$this->columns['ip_address']
		);

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
