<?php

namespace JFB_Modules\Actions_V2\Send_Email;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Classes\Http\Http_Tools;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Request\Request_Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
class Send_Email_Action extends Base {

	private $content_type = '';
	private $mail_to      = array();
	private $cc           = array();
	private $bcc          = array();
	private $reply_to     = '';
	private $from_email   = '';
	private $content      = '';
	private $subject      = '';
	private $from_name    = '';
	private $attachments  = array();
	private $headers      = '';

	public function get_name() {
		return __( 'Send Email', 'jet-form-builder' );
	}

	public function get_id() {
		return 'send_email';
	}

	public function self_script_name() {
		return 'jetFormEmailData';
	}

	public function editor_labels() {
		return array(
			'mail_to'          => __( 'Mail To:', 'jet-form-builder' ),
			'custom_email'     => __( 'Email Address:', 'jet-form-builder' ),
			'from_field'       => __( 'From Field:', 'jet-form-builder' ),
			'reply_to'         => __( 'Reply To:', 'jet-form-builder' ),
			'reply_to_email'   => __( 'Reply to Email Address:', 'jet-form-builder' ),
			'reply_from_field' => __( 'Reply To Email From Field:', 'jet-form-builder' ),
			'subject'          => __( 'Subject:', 'jet-form-builder' ),
			'from_name'        => __( 'From Name:', 'jet-form-builder' ),
			'from_address'     => __( 'From Email Address:', 'jet-form-builder' ),
			'content_type'     => __( 'Content type:', 'jet-form-builder' ),
			'disable_format'   => __( 'Disable Auto-Formatting', 'jet-form-builder' ),
			'content'          => __( 'Content:', 'jet-form-builder' ),
			'attachments'      => __( 'Attachments:', 'jet-form-builder' ),
			'add_attachment'   => __( 'Add form field with attachment', 'jet-form-builder' ),
		);
	}

	public function action_attributes() {
		return array(
			'mail_to'          => array(
				'default' => '',
			),
			'custom_email'     => array(
				'default' => '',
			),
			'from_field'       => array(
				'default' => '',
			),
			'reply_to'         => array(
				'default' => '',
			),
			'reply_to_email'   => array(
				'default' => '',
			),
			'reply_from_field' => array(
				'default' => '',
			),
			'subject'          => array(
				'default' => '',
				'path'    => 'email/subject',
			),
			'from_name'        => array(
				'default' => '',
				'path'    => 'email/from_name',
			),
			'from_address'     => array(
				'default' => '',
				'path'    => 'email/from_address',
			),
			'content_type'     => array(
				'default' => '',
				'path'    => 'email/content_type',
			),
			'content'          => array(
				'default' => '',
				'path'    => 'email/content',
			),
		);
	}

	/**
	 * Regsiter custom action data for the editor
	 *
	 * @return [type] [description]
	 */
	public function action_data() {
		return array(
			'replyTo'      => Tools::with_placeholder(
				array(
					array(
						'value' => 'form',
						'label' => __( 'Email from submitted form field', 'jet-form-builder' ),
					),
					array(
						'value' => 'custom',
						'label' => __( 'Custom email', 'jet-form-builder' ),
					),
				)
			),
			'content_type' => Tools::with_placeholder(
				array(
					array(
						'value' => 'text/plain',
						'label' => __( 'Plain text', 'jet-form-builder' ),
					),
					array(
						'value' => 'text/html',
						'label' => __( 'HTML', 'jet-form-builder' ),
					),
				)
			),
			'customMacros' => apply_filters( 'jet-form-builder/actions/send-email/custom-macros', false ),
		);
	}

	/**
	 * @param array $request
	 * @param Action_Handler $handler
	 *
	 * @throws Action_Exception
	 */
	public function do_action( array $request, Action_Handler $handler ) {
		$message = apply_filters(
			'jet-form-builder/send-email/message_content',
			$this->settings['content'] ?? '',
			$this
		);
		$this->set_content( $message );

		$content_type = apply_filters(
			'jet-form-builder/send-email/content-type',
			$this->get_default_content_type(),
			$this
		);
		$this->set_content_type( $content_type );

		$from_name = apply_filters(
			'jet-form-builder/send-email/from-name',
			$this->get_default_from_name(),
			$this
		);
		$this->set_from_name( $from_name );

		$reply_to = apply_filters(
			'jet-form-builder/send-email/reply-to',
			$this->get_default_reply_to(),
			$this
		);
		$this->set_reply_to( $reply_to );

		$from_email = apply_filters(
			'jet-form-builder/send-email/from-address',
			$this->get_default_from_address(),
			$this
		);
		$this->set_from_address( $from_email );

		$this->set_mail_to( $this->get_default_mail_to() );
		$this->set_cc( $this->get_default_cc() );
		$this->set_bcc( $this->get_default_bcc() );
		$this->set_subject( $this->get_default_subject() );
		$this->set_attachments( $this->get_default_attachments() );

		$headers = apply_filters(
			'jet-form-builder/send-email/headers',
			$this->get_default_headers(),
			$this
		);
		$this->set_headers( $headers );

		/**
		 * Hooks before the email is sent
		 */
		do_action( 'jet-form-builder/send-email/send-before', $this );

		if ( jet_form_builder()->has_module( 'dev' ) ) {
			add_action(
				'wp_mail_failed',
				function ( \WP_Error $wp_error ) {
					new Action_Exception( 'failed', $wp_error->get_error_message(), $wp_error->get_error_data() );
				}
			);
		}

		$this->validate();

		$sent = wp_mail(
			$this->get_mail_to(),
			$this->get_subject(),
			$this->get_content(),
			$this->get_headers(),
			$this->get_attachments()
		);

		if ( ! $sent ) {
			throw new Action_Exception(
				'failed',
				array(
					// phpcs:disable WordPress.Security.EscapeOutput.ExceptionNotEscaped
					'to'      => $this->get_mail_to(),
					'subject' => $this->get_subject(),
					'message' => $message,
					'headers' => $this->get_headers(),
					// phpcs:enable
				)
			);
		}

		/**
		 * Hooks after the email is sent
		 *
		 * @since 2.1
		 */
		do_action( 'jet-form-builder/send-email/send-after', $this );
	}

	/**
	 * @throws Action_Exception
	 */
	protected function validate() {
		$this->validate_mail_to();
		$this->validate_reply_to();
	}

	/**
	 * @throws Action_Exception
	 */
	protected function validate_mail_to() {
		foreach ( $this->mail_to as $value ) {
			if ( ! $value || ! is_email( $value ) ) {
				throw new Action_Exception( 'invalid_email' );
			}
		}
	}

	protected function validate_reply_to() {
		$emails = explode( ',', $this->get_reply_to() );

		foreach ( $emails as &$value ) {
			$value = trim( $value );
		}

		$emails = array_filter( $emails, 'is_email' );

		if ( count( $emails ) ) {
			$this->set_reply_to( $emails );

			return;
		}

		$this->set_reply_to( 'noreply@' . Http_Tools::get_site_host() );
	}

	public function get_default_mail_to() {
		$mail_to = ! empty( $this->settings['mail_to'] ) ? $this->settings['mail_to'] : 'admin';

		switch ( $mail_to ) {
			case 'form':
				$field = $this->settings['from_field'] ?? '';
				$email = jet_fb_context()->get_value( $field );

				return $email ?: '';
			case 'custom':
				return ! empty( $this->settings['custom_email'] ) ? $this->settings['custom_email'] : '';
			case 'admin':
			default:
				return get_option( 'admin_email' );
		}
	}

	public function get_default_cc() {
		if ( empty( $this->settings['use_cc_bcc'] ) ) {
			return array();
		}

		$mail_to = ! empty( $this->settings['cc_from'] ) ? $this->settings['cc_from'] : 'admin';

		switch ( $mail_to ) {
			case 'form':
				$field = $this->settings['cc_field'] ?? '';
				$email = jet_fb_context()->get_value( $field );

				return $email ?: '';
			case 'custom':
				return ! empty( $this->settings['cc_email'] ) ? $this->settings['cc_email'] : '';
			case 'admin':
			default:
				return get_option( 'admin_email' );
		}
	}

	public function get_default_bcc() {
		if ( empty( $this->settings['use_cc_bcc'] ) ) {
			return array();
		}

		$mail_to = ! empty( $this->settings['bcc_from'] ) ? $this->settings['bcc_from'] : 'admin';

		switch ( $mail_to ) {
			case 'form':
				$field = $this->settings['bcc_field'] ?? '';
				$email = jet_fb_context()->get_value( $field );

				return $email ?: '';
			case 'custom':
				return ! empty( $this->settings['bcc_email'] ) ? $this->settings['bcc_email'] : '';
			case 'admin':
			default:
				return get_option( 'admin_email' );
		}
	}

	public function get_default_reply_to(): string {
		$reply_to = ! empty( $this->settings['reply_to'] ) ? $this->settings['reply_to'] : 'form';

		switch ( $reply_to ) {
			case 'form':
				$field = $this->settings['reply_from_field'] ?? '';

				return Tools::to_string( jet_fb_context()->get_value( $field ) );
			case 'custom':
				return ! empty( $this->settings['reply_to_email'] ) ? $this->settings['reply_to_email'] : '';
			default:
				return '';
		}
	}

	public function get_default_subject(): string {
		return empty( $this->settings['subject'] )
			? sprintf(
			/* translators: %s - site url */
				__( 'Form on %s Submitted', 'jet-form-builder' ),
				home_url( '' )
			)
			: $this->settings['subject'];
	}

	public function get_default_content_type(): string {
		$type = $this->settings['content_type'] ?? 'text/html';

		return empty( $type ) ? 'text/html' : $type;
	}

	public function get_default_from_name(): string {
		return empty( $this->settings['from_name'] )
			? Tools::get_site_name()
			: $this->settings['from_name'];
	}

	public function get_default_from_address(): string {
		return ! empty( $this->settings['from_address'] ) ? $this->settings['from_address'] : '';
	}

	public function get_default_attachments(): array {
		$fields      = $this->settings['attachments'] ?? array();
		$attachments = array();

		foreach ( $fields as $field ) {
			$value = Request_Tools::get_file( $field );

			if ( ! $value ) {
				continue;
			}

			array_push(
				$attachments,
				...explode( ',', $value->get_attachment_file() )
			);
		}

		return $attachments;
	}

	public function update_headers() {
		$this->set_headers( $this->get_default_headers() );
	}

	/**
	 * Get the email headers
	 *
	 * @since 2.1
	 */
	public function get_default_headers(): string {
		$headers = array(
			"From: {$this->get_from_name()} <{$this->get_from_address()}>",
			"Reply-To: {$this->get_reply_to()}",
			"Content-Type: {$this->get_content_type()}; charset=utf-8",
		);

		$cc_emails  = $this->get_cc();
		$bcc_emails = $this->get_bcc();

		foreach ( $cc_emails as $cc_email ) {
			$headers[] = 'Cc: ' . $cc_email;
		}
		foreach ( $bcc_emails as $bcc_email ) {
			$headers[] = 'Bcc: ' . $bcc_email;
		}

		return implode( "\r\n", $headers );
	}

	/**
	 * @param string|array $email
	 */
	public function set_mail_to( $email ) {
		if ( ! is_array( $email ) && ! is_string( $email ) ) {
			return;
		}

		$this->mail_to = $this->parse_email( $email );
	}

	/**
	 * @param $email
	 *
	 * @return void
	 */
	public function set_cc( $email ): void {
		if ( ! is_array( $email ) && ! is_string( $email ) ) {
			return;
		}

		$this->cc = $this->parse_email( $email );
	}

	/**
	 * @param $email
	 *
	 * @return void
	 */
	public function set_bcc( $email ): void {
		if ( ! is_array( $email ) && ! is_string( $email ) ) {
			return;
		}

		$this->bcc = $this->parse_email( $email );
	}

	/**
	 * @param $email
	 *
	 * @return string[]
	 */
	private function parse_email( $email ): array {
		if ( ! is_array( $email ) ) {
			$email = explode( ',', $email );
		}

		foreach ( $email as &$value ) {
			$value = trim( $value );
		}

		return $email;
	}

	public function set_reply_to( $email ) {
		if ( ! is_string( $email ) && ! is_array( $email ) ) {
			return;
		}

		$this->reply_to = Tools::to_string( $email );
	}

	public function set_content( $content ) {
		if ( ! is_string( $content ) ) {
			return;
		}

		$this->content = $content;
	}

	public function set_subject( $subject ) {
		if ( ! is_string( $subject ) ) {
			return;
		}

		$this->subject = $subject;
	}

	public function set_content_type( string $type ) {
		$this->content_type = $type;
	}

	public function set_from_name( string $name ) {
		$this->from_name = $name;
	}

	public function set_from_address( string $email ) {
		$this->from_email = $email;
	}

	/**
	 * @param array $attachments
	 */
	public function set_attachments( array $attachments ) {
		$this->attachments = $attachments;
	}

	public function set_headers( string $headers ) {
		$this->headers = $headers;
	}

	public function get_attachments(): array {
		return $this->attachments;
	}

	/**
	 * @return array
	 */
	public function get_mail_to(): array {
		return $this->mail_to;
	}

	/**
	 * @return array
	 */
	public function get_cc(): array {
		return $this->cc;
	}

	/**
	 * @return array
	 */
	public function get_bcc(): array {
		return $this->bcc;
	}

	/**
	 * @return string
	 */
	public function get_subject(): string {
		return $this->subject;
	}

	/**
	 * @return string
	 */
	public function get_content(): string {
		return $this->content;
	}

	/**
	 * Get the email from name
	 */
	public function get_from_name(): string {
		return $this->from_name;
	}

	/**
	 * Returns e-mail address to set into Reply-to email header
	 */
	public function get_reply_to(): string {
		return $this->reply_to;
	}

	/**
	 * Get the email from address
	 */
	public function get_from_address(): string {
		return $this->from_email;
	}

	public function is_html(): bool {
		return 'text/html' === $this->get_content_type();
	}

	/**
	 * Get the email content type
	 */
	public function get_content_type(): string {
		return $this->content_type;
	}

	/**
	 * @return string
	 */
	public function get_headers(): string {
		return $this->headers;
	}

}
