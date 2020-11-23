<?php


namespace Jet_Form_Builder;

// If this file is called directly, abort.
use Jet_Form_Builder\Classes\Get_Template_Trait;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Form messages class
 */
class Form_Messages_Builder {

	use Get_Template_Trait;

	private $form_id;
	private $status;

	public $manager;

	/**
	 * Class constructor
	 *
	 * @param $data
	 */
	public function __construct( $data ) {
		$this->form_id = $data->form_id;
		$this->manager = new Form_Messages_Manager( $this->form_id, $data->actions );
	}

	/**
	 * Set form submittion status
	 *
	 * @param [type] $status [description]
	 */
	public function set_form_status( $status ) {
		$this->status = $status;

		return $this;
	}

	/**
	 * Get form submittion status
	 */
	public function get_form_status() {
		if ( ! $this->status ) {
			$this->status = isset( $_REQUEST['status'] ) ? $_REQUEST['status'] : null;
		}

		return $this->status;
	}

	public function render_empty_field_message() {
		$message_content = $this->manager->get_message_text( 'empty_field' );

		include $this->get_global_template( 'common/field-message.php' );
	}

	/**
	 * Render form messages
	 *
	 * @return void
	 */
	public function render_messages() {
		$status = $this->get_form_status();

		if ( ! $status ) {
			return;
		}

		if ( 'success' === $status ) {
			$status_class = 'success';
		} else {
			$status_class = 'error';
		}

		$message_content = $this->manager->get_message_text( $status );

		$class = 'jet-form-message';
		$class .= ' jet-form-message--' . $status_class;

		include $this->get_global_template( 'common/messages.php' );
	}

	/**
	 * Render message samples for editor
	 *
	 * @return [type] [description]
	 */
	public function render_messages_samples() {
		// Render success sample
		$this->set_form_status( 'success' );
		$this->render_messages();

		// Render error sample
		$this->set_form_status( 'failed' );
		$this->render_messages();

		// Reset status
		$this->set_form_status( null );

	}


}