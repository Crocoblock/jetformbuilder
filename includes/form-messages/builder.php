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

	private $status;

	/**
	 * @var Message_Content_Processor
	 */
	private $content_processor;

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

	public function get_manager( $data = array() ) {
		return jet_form_builder()->msg_router->get_manager( $data );
	}

	/**
	 * Get form submitting status
	 */
	public function get_form_status() {
		if ( ! $this->status ) {
			// phpcs:ignore WordPress.Security.NonceVerification.Recommended
			$this->status = isset( $_GET['status'] ) ? sanitize_text_field( wp_unslash( $_GET['status'] ) ) : null;
		}

		return $this->status;
	}

	public function prepare_message_content( string $message ): string {
		return $this->get_content_processor()->prepare_macros(
			$message,
			jet_fb_context()->get_request()
		);
	}

	public function render_empty_field_message() {
		$message_content = $this->get_content_processor()->prepare_trusted(
			$this->get_manager()->get_message( 'empty_field' ),
			jet_fb_context()->get_request()
		);

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

		$info    = new Status_Info( $status );
		$manager = $this->get_manager();
		$message = $manager->get_message_by_info( $info );

		// Only a registered key resolves to a template stored in form/action settings.
		if ( ! $info->is_dynamic() && $manager->isset_message_type( $info->get_message() ) ) {
			$message_content = $this->get_content_processor()->prepare_trusted(
				$message,
				jet_fb_context()->get_request()
			);
		} else {
			$message_content = $this->get_content_processor()->prepare_untrusted( $message );
		}

		$class  = 'jet-form-builder-message';
		$class .= ' jet-form-builder-message--' . $info->get_css_class();

		include $this->get_global_template( 'common/messages.php' );
	}

	/**
	 * Render message samples for editor
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

	public function get_content_processor(): Message_Content_Processor {
		if ( is_null( $this->content_processor ) ) {
			$this->content_processor = new Message_Content_Processor();
		}

		return $this->content_processor;
	}


}
