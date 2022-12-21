<?php

namespace Jet_Form_Builder\Actions\Types;

// If this file is called directly, abort.
use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Classes\Http\Http_Tools;
use Jet_Form_Builder\Classes\Macros_Parser;
use Jet_Form_Builder\Classes\Resources\Media_Block_Value;
use Jet_Form_Builder\Classes\Resources\Uploaded_File_Path;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Dev_Mode;
use Jet_Form_Builder\Exceptions\Action_Exception;

if ( ! defined( 'WPINC' ) ) {
	die;
}

add_filter(
	'jet-form-builder/send-email/message_content',
	function ( $content ) {
		return do_shortcode( $content );
	}
);

/**
 * Define Base_Type class
 */
class Send_Email extends Base {

	private $parser;
	private $content_type;

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
			'content'          => __( 'Content:', 'jet-form-builder' ),
			'attachments'      => __( 'Attachments:', 'jet-form-builder' ),
			'add_attachment'   => __( 'Add form field with attachment', 'jet-form-builder' ),
		);
	}

	public function editor_labels_help() {
		return array(
			'custom_email' => __(
				'To apply multiple mailing addresses, separate them with commas',
				'jet-form-builder'
			),
			'from_field' => __(
				'To apply multiple mailing addresses, you can select a "Checkbox Field" 
				or a "Select field" with enabled "Is multiple" option.',
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
	 * @return mixed|void
	 * @throws Action_Exception
	 */
	public function do_action( array $request, Action_Handler $handler ) {
		$mail_to     = ! empty( $this->settings['mail_to'] ) ? $this->settings['mail_to'] : 'admin';
		$reply_to    = ! empty( $this->settings['reply_to'] ) ? $this->settings['reply_to'] : 'form';
		$email       = false;
		$reply_email = false;

		switch ( $mail_to ) {
			case 'form':
				$field = ! empty( $this->settings['from_field'] ) ? $this->settings['from_field'] : '';

				if ( $field && ! empty( $request[ $field ] ) ) {
					$email = $request[ $field ];
				}

				break;

			case 'custom':
				$email = ! empty( $this->settings['custom_email'] ) ? $this->settings['custom_email'] : '';
				break;

			case 'admin':
			default:
				$email = get_option( 'admin_email' );
				break;
		}

		switch ( $reply_to ) {

			case 'form':
				$field = ! empty( $this->settings['reply_from_field'] ) ? $this->settings['reply_from_field'] : '';

				if ( $field && ! empty( $request[ $field ] ) ) {
					$this->settings['reply_email'] = $request[ $field ];
				}

				break;

			case 'custom':
				$this->settings['reply_email'] = ! empty( $this->settings['reply_to_email'] ) ? $this->settings['reply_to_email'] : '';
				break;
		}

		if ( ! is_array( $email ) ) {
			$email = explode( ',', $email );
		}

		foreach ( $email as $value ) {
			$value = trim( $value );

			if ( ! $value || ! is_email( $value ) ) {
				throw new Action_Exception( 'invalid_email' );
			}
		}

		$this->parser = ( new Macros_Parser() )->set_replacements( $request );

		$subject = ! empty( $this->settings['subject'] ) ? $this->settings['subject'] : sprintf(
			__( 'Form on %s Submitted', 'jet-form-builder' ),
			home_url( '' )
		);

		$message = ! empty( $this->settings['content'] ) ? apply_filters( 'jet-form-builder/send-email/message_content', $this->settings['content'], $this ) : '';

		$this->send_mail( $email, $subject, $message );
	}


	/**
	 * Send the email
	 *
	 * The To address to send to.
	 *
	 * @param $to
	 *
	 * The subject line of the email to send.
	 * @param $subject
	 *
	 * The body of the email to send.
	 * @param $message
	 *
	 * @return void
	 * @throws Action_Exception
	 */
	public function send_mail( $to, $subject, $message ) {

		/**
		 * Hooks before the email is sent
		 */
		$this->send_before();
		do_action( 'jet-form-builder/send-email/send-before', $this );

		$content_type = $this->get_content_type();
		$subject      = $this->parser->parse_macros( $subject );
		$message      = $this->parser->parse_macros( $message );

		if ( 'text/html' === $content_type ) {
			$message = make_clickable( wpautop( $message ) );
		}

		$message = str_replace( '&#038;', '&amp;', $message );
		$message = stripcslashes( $message );

		if ( Dev_Mode\Manager::instance()->active() ) {
			add_action(
				'wp_mail_failed',
				function ( \WP_Error $wp_error ) {
					new Action_Exception( 'failed', $wp_error->get_error_message(), $wp_error->get_error_data() );
				}
			);
		}

		$sent = wp_mail(
			$to,
			$subject,
			$message,
			$this->get_headers(),
			$this->get_attachments()
		);

		if ( ! $sent ) {
			throw new Action_Exception(
				'failed',
				array(
					'to'      => $to,
					'subject' => $subject,
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
		$this->send_after();
		do_action( 'jet-form-builder/send-email/send-after', $this );
	}


	/**
	 * Get the email headers
	 *
	 * @since 2.1
	 */
	public function get_headers(): string {
		$headers = "From: {$this->get_from_name()} <{$this->get_from_address()}>\r\n";
		$headers .= "Reply-To: {$this->get_reply_to()}\r\n";
		$headers .= "Content-Type: {$this->get_content_type()}; charset=utf-8\r\n";

		return apply_filters( 'jet-form-builder/send-email/headers', $headers, $this );
	}

	public function get_attachments(): array {
		$files       = jet_fb_request_handler()->get_files();
		$fields      = $this->settings['attachments'] ?? array();
		$attachments = array();

		foreach ( $fields as $field ) {
			/** @var Uploaded_File_Path $value */
			$value = $files[ $field ] ?? false;

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

	/**
	 * Add filters / actions before the email is sent
	 *
	 * @since 2.1
	 */
	public function send_before() {
		add_filter( 'wp_mail_from', array( $this, 'get_from_address' ) );
		add_filter( 'wp_mail_from_name', array( $this, 'get_from_name' ) );
		add_filter( 'wp_mail_content_type', array( $this, 'get_content_type' ) );
	}

	/**
	 * Remove filters / actions after the email is sent
	 *
	 * @since 2.1
	 */
	public function send_after() {
		remove_filter( 'wp_mail_from', array( $this, 'get_from_address' ) );
		remove_filter( 'wp_mail_from_name', array( $this, 'get_from_name' ) );
		remove_filter( 'wp_mail_content_type', array( $this, 'get_content_type' ) );

		// Reset heading to an empty string
		$this->heading = '';
	}

	/**
	 * Get the email from name
	 */
	public function get_from_name() {
		$name = ! empty( $this->settings['from_name'] ) ? $this->settings['from_name'] : get_bloginfo( 'name' );
		$name = $this->parser->parse_macros( $name );

		return apply_filters( 'jet-form-builder/send-email/from-name', wp_specialchars_decode( $name ), $this );
	}

	/**
	 * Returns e-mail address to set into Reply-to email header
	 *
	 * @return [type] [description]
	 */
	public function get_reply_to() {

		$address = ! empty( $this->settings['reply_email'] ) ? $this->settings['reply_email'] : '';

		if ( empty( $address ) || ! is_email( $address ) ) {
			$address = 'noreply@' . Http_Tools::get_site_host();
		}

		return apply_filters( 'jet-form-builder/send-email/reply-to', $address, $this );

	}

	/**
	 * Get the email from address
	 */
	public function get_from_address() {

		$address = ! empty( $this->settings['from_address'] ) ? $this->settings['from_address'] : '';
		$address = $this->parser->parse_macros( $address );

		if ( empty( $address ) || ! is_email( $address ) ) {
			$address = get_option( 'admin_email' );
		}

		return apply_filters( 'jet-form-builder/send-email/from-address', $address, $this );
	}

	public function is_html(): bool {
		return 'text/html' === $this->get_content_type();
	}

	/**
	 * Get the email content type
	 */
	public function get_content_type(): string {
		if ( $this->content_type ) {
			return $this->content_type;
		}

		$type = $this->settings['content_type'] ?? 'text/html';
		$type = empty( $type ) ? 'text/html' : $type;

		$this->content_type = apply_filters( 'jet-form-builder/send-email/content-type', $type, $this );

		return $this->content_type;
	}

}
