<?php


namespace Jet_Form_Builder\Form_Messages;

// If this file is called directly, abort.
use Jet_Form_Builder\Classes\Get_Template_Trait;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Form messages class
 */
class Builder {

	use Get_Template_Trait;

	private $form_id;
	private $status;
	private $success_statuses = array( 'success' );

	public $manager;

	/**
	 * Class constructor
	 *
	 * @param $data
	 */
	public function __construct( $data ) {
		$this->form_id = $data->form_id;
		$this->manager = new Manager( $this->form_id, $data->actions );
	}

	private function is_success( $status ) {
		return in_array( $status, $this->success_statuses );
	}

	public function add_success_statuses( $statuses ) {
		$this->success_statuses = array_merge( $this->success_statuses, $statuses );
	}

	private function get_status_class( $status ) {
		return $this->is_success( $status ) ? 'success' : 'error';
	}

	/**
	 * Set form submittion status
	 *
	 * @param [type] $status [description]
	 *
	 * @return Builder
	 */
	public function set_form_status( $status ) {
		$this->status = $status;

		return $this;
	}

	/**
	 * Get form submitting status
	 */
	public function get_form_status() {
		if ( ! $this->status ) {
			$this->status = isset( $_REQUEST['status'] ) ? esc_attr( $_REQUEST['status'] ) : null;
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

		$message_content = $this->manager->get_message_text( $status );

		$class = 'jet-form-message';
		$class .= ' jet-form-message--' . $this->get_status_class( $status );

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

	public function get_rendered_messages() {
		ob_start();
		$this->render_messages();
		return ob_get_clean();
	}


}