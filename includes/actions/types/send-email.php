<?php

namespace Jet_Form_Builder\Actions\Types;

// If this file is called directly, abort.
use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Classes\Http\Http_Tools;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Dev_Mode;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Request\Request_Tools;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
class Send_Email extends Base {

	private $content_type = '';
	private $mail_to      = array();
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

	public function editor_labels_help() {
		return array(
			'custom_email'   => __(
				'To apply multiple mailing addresses, separate them with commas',
				'jet-form-builder'
			),
			'from_field'     => __(
				'To apply multiple mailing addresses, you can select a "Checkbox Field" 
				or a "Select field" with enabled "Is multiple" option.',
				'jet-form-builder'
			),
			'disable_format' => __(
				'By default, each new line in the email content field is changed 
to a separate paragraph element. And each link turns into a clickable hyperlink. 
To prevent this, enable this option.',
				'jet-form-builder'
			),
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
			'mailTo'       => Tools::with_placeholder(
				array(
					array(
						'value' => 'admin',
						'label' => __( 'Admin email', 'jet-form-builder' ),
					),
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

		if ( Dev_Mode\Manager::instance()->active() ) {
			add_action(
				'wp_mail_failed',
				function ( \WP_Error $wp_error ) {
					new Action_Exception( 'failed', $wp_error->get_error_message(), $wp_error->get_error_data() );
				}
			);
		}

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
					'to'      => $this->get_mail_to(),
					'subject' => $this->get_subject(),
					'message' => $message,
					'headers' => $this->get_headers(),
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

		return implode( "\r\n", $headers );
	}

	/**
	 * @param string|array $email
	 *
	 * @throws Action_Exception
	 */
	public function set_mail_to( $email ) {
		if ( ! is_array( $email ) && ! is_string( $email ) ) {
			return;
		}

		if ( ! is_array( $email ) ) {
			$email = explode( ',', $email );
		}

		foreach ( $email as &$value ) {
			$value = trim( $value );

			if ( ! $value || ! is_email( $value ) ) {
				throw new Action_Exception( 'invalid_email' );
			}
		}

		$this->mail_to = $email;
	}

	public function set_reply_to( $email ) {
		if ( ! is_string( $email ) ) {
			return;
		}

		$this->reply_to = $email;
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
