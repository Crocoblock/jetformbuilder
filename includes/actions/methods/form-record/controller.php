<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record;


use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Live_Form;

class Controller {

	protected $save_errors = false;
	protected $save_user_data = false;
	protected $save_fields = true;
	protected $columns = array();

	public function set_saving_errors( $is_save ) {
		$this->save_errors = $is_save;

		return $this;
	}

	public function set_saving_user_data( $is_save ) {
		$this->save_user_data = $is_save;

		return $this;
	}

	public function set_saving_fields( $is_save ) {
		$this->save_fields = $is_save;

		return $this;
	}

	public function set_columns( array $columns ) {
		$this->columns = array_merge( $this->columns, $columns );

		return $this;
	}

	/**
	 * @param $handler
	 * @param $is_success
	 * @param $args
	 *
	 * @throws Sql_Exception
	 */
	public function hook_handler( $handler, $is_success, $args ) {
		$this->save( array(
			'status' => $args['status'] ?? ''
		) );
	}

	/**
	 * @param $defaults
	 *
	 * @throws Sql_Exception
	 */
	public function save( $defaults ) {
		$record_id = $this->save_record( $defaults );
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
			'user_id'           => get_current_user_id(),
			'from_content_id'   => Live_Form::instance()->post->ID ?? 0,
			// it can be replaced by CCT slug
			'from_content_type' => 'post'
		) );

		$this->set_columns( $defaults );

		do_action( 'jet-form-builder/action/save-record/before-insert', $this );

		$this->maybe_unset_user_data();

		return ( new Record_Model )->insert( $this->columns );
	}

	public function maybe_unset_user_data() {
		if ( $this->save_user_data ) {
			return $this;
		}

		unset(
			$this->columns['user_agent'],
			$this->columns['ip_address']
		);

		return $this;
	}

	public function save_record_fields() {

	}

	public function handler() {
		return jet_form_builder()->form_handler->action_handler;
	}

}