<?php
/**
 * Form messages class
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

if ( ! class_exists( 'Jet_Engine_Booking_Forms_Messages' ) ) {

	/**
	 * Define Jet_Engine_Booking_Forms_Messages class
	 */
	class Jet_Engine_Booking_Forms_Messages {

		private $form_id      = null;
		private $status       = null;
		private $is_ajaxified = false;

		/**
		 * Class constructor
		 */
		public function __construct( $form_id ) {

			$this->form_id = $form_id;

		}

		/**
		 * Set form submittion status
		 * @param [type] $status [description]
		 */
		public function set_form_status( $status ) {
			$this->status = $status;
		}

		/**
		 * Set is ajaxified status
		 *
		 * @param [type] $is_ajaxified [description]
		 */
		public function set_is_ajaxified( $is_ajaxified ) {
			$this->is_ajaxified = $is_ajaxified;
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
			$all_messages = jet_engine()->forms->editor->get_messages( $this->form_id );

			if ( isset( $all_messages['empty_field'] ) ) {
				$message_content = $all_messages['empty_field'];
			} else {
				$default_messages = jet_engine()->forms->get_message_types();
				$message_content  = isset( $default_messages['empty_field'] ) ? $default_messages['empty_field']['default'] : '';
			}

			include jet_engine()->get_template( 'forms/common/field-message.php' );
		}

		/**
		 * Render form messages
		 *
		 * @return void
		 */
		public function render_messages() {

			$status = $this->get_form_status();

			if ( ! $status ) {

				if ( $this->is_ajaxified ) {
					echo '<div class="jet-form-messages-wrap" data-form-id="' . $this->form_id . '"></div>';
				}

				return;
			}

			if ( 'success' === $status ) {
				$status_class = 'success';
			} else {
				$status_class = 'error';
			}

			$all_messages = jet_engine()->forms->editor->get_messages( $this->form_id );

			if ( isset( $all_messages[ $status ] ) ) {
				$message_content = $all_messages[ $status ];
			} else {
				$default_messages = jet_engine()->forms->get_message_types();
				$message_content  = isset( $default_messages[ $status ] ) ? $default_messages[ $status ]['default'] : $status;
			}

			$class  = 'jet-form-message';
			$class .= ' jet-form-message--' . $status_class;

			include jet_engine()->get_template( 'forms/common/messages.php' );

		}

		public function get_messages_data() {

			$all_messages     = jet_engine()->forms->editor->get_messages( $this->form_id );
			$default_messages = jet_engine()->forms->get_message_types();

			foreach ( $default_messages as $status => $message ) {
				if ( ! isset( $all_messages[ $status ] ) ) {
					$all_messages[ $status ] = $message['default'];
				}
			}

			return $all_messages;

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

}
