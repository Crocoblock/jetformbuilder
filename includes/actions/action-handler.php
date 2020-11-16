<?php
namespace Jet_Form_Builder\Actions;

// If this file is called directly, abort.
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Plugin;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Actions handler class class
 */
class Action_Handler {

	public $form_id             = null;
	public $request_data        = null;
    public $manager             = null;
    public $handler             = null;
    public $log                 = array();
    public $log_status          = false;
    public $specific_status     = false;
    public $form_actions        = array();
    public $is_ajax             = false;

	public $headers;
	public $email_data;

    /**
     * Constructor for the class
     * @param $form_id
     * @param array $request_data
     */
	function __construct( $form_id, $request_data = array() ) {

		$this->form_id      = $form_id;
		$this->request_data = $request_data;

		$this->set_form_actions();
	}

    /**
     * Set form actions,
     * which were saved in form meta
     *
     * @return $this
     */
	public function set_form_actions() {
        $available_actions = Plugin::instance()->actions->get_actions();

        $form_actions = Plugin::instance()->post_type->get_actions( $this->form_id );

        foreach ( $form_actions as $form_action ) {
            $id = $form_action['type'];

            if ( isset( $available_actions[ $id ] ) ) {
                /**
                 * Save action settings to the class field,
                 * it allows to not send action settings
                 * in action hook
                 */
                $available_actions[ $id ]->settings = $form_action['settings'];

                $this->form_actions[] = $available_actions[ $id ];
            }
        }
        return $this;
    }


    /**
     * Unregister notification by id
     *
     * @param   $id [description]
     * @return  void [description]
     */
	public function unregister_action( $id ) {

		if ( isset( $this->form_actions[ $id ] ) ) {
			unset( $this->form_actions[ $id ] );
		}

	}

    /**
     * Returns all registered notifications
     *
     * @return array [description]
     */
	public function get_all() {
		return $this->form_actions;
	}

    /**
     * Send form notifications
     *
     * @return array [type] [description]
     */
	public function do_actions() {

		if ( empty( $this->form_actions ) ) {
            throw new Action_Exception( 'failed' );
		}

		$size_all = sizeof( $this->form_actions );
		$response_data = array();

		foreach ( $this->form_actions as $index => $action ) {
			/**
			 * Process single action
			 */
            $action->do_action( $this->request_data, $index, $size_all, $response_data );

            $response_data = array_merge( $response_data, $action->response_data );
		}

		return $response_data;
	}

	/**
	 * Check if all notifications are successfully processed
	 *
	 * @return boolean [description]
	 */
	public function is_success() {

		if ( empty( $this->log ) ) {
			return false;
		} else {
			return count( $this->log ) === count( array_filter( $this->log ) );
		}

	}

	/**
	 * Perform redirect notification
	 *
	 * @param  [type] $notification [description]
	 * @return [type]               [description]
	 */
	public function do_redirect( $notification ) {

		if ( ! $this->is_success() ) {
			return;
		}

		$type = ! empty( $notification['redirect_type'] ) ? $notification['redirect_type'] : 'static_page';

		if ( 'static_page' === $type ) {
			$to_page = ! empty( $notification['redirect_page'] ) ? $notification['redirect_page'] : false;
			$to_url  = ! empty( $to_page ) ? get_permalink( $to_page ) : false;
		} else {
			$to_url = ! empty( $notification['redirect_url'] ) ? $notification['redirect_url'] : false;

		}

		if ( ! $to_url ) {
			return;
		} else {

			if ( ! empty( $notification['redirect_args'] ) ) {

				$redirect_args = array();

				foreach ( $notification['redirect_args'] as $arg ) {
					$redirect_args[ $arg ] = ! empty( $this->data[ $arg ] ) ? $this->data[ $arg ] : 0;
				}

				$to_url = add_query_arg( $redirect_args, $to_url );

			}

			if ( ! $this->handler->is_ajax() ) {
				wp_safe_redirect( $to_url );
				die();
			} else {
				$this->handler->add_response_data( array( 'redirect' => $to_url ) );
			}
		}

	}

	/**
	 * Call a webhook notification
	 *
	 * @param  [type] $notification [description]
	 * @return [type]               [description]
	 */
	public function webhook( $notification ) {

		$webhook_url = ! empty( $notification['webhook_url'] ) ? esc_url( $notification['webhook_url'] ) : false;

		if ( ! $webhook_url ) {
			return;
		}

		$args = array(
			'body' => $this->data,
		);

		/**
		 * Filter webhook arguments
		 */
		$args = apply_filters(
			'jet-engine/forms/booking/notification/webhook/request-args', $args, $notification, $this
		);

		$response = wp_remote_post( $webhook_url, $args );

		$this->log[] = true;

		/**
		 * Firtes whe webhook response recieved
		 */
		do_action( 'jet-engine/forms/booking/notification/webhook/response', $response, $notification, $this );

	}


	/**
	 * Regsiter new user notification callback
	 *
	 * @return [type] [description]
	 */
	public function register_user( $notification ) {

		if ( is_user_logged_in() ) {

			if ( 1 === count( $this->notifications ) ) {
				$this->log[] = $this->set_specific_status( 'already_logged_in' );
				return;
			} else {
				$this->log[] = true;
			}

			if ( $notification['add_user_id'] ) {
				$this->data['user_id']               = get_current_user_id();
				$this->handler->form_data['user_id'] = get_current_user_id();
			}

			return;
		}

		$fields_map = ! empty( $notification['fields_map'] ) ? $notification['fields_map'] : array();

		// Prepare fields
		$username = false;
		$email    = false;
		$password = false;
		$fname    = false;
		$lname    = false;
		$user_url = false;

		// If fields map for login, password or email is not set - abort but allow submit form (its not user fault)
		if ( empty( $fields_map['login'] ) || empty( $fields_map['email'] ) || empty( $fields_map['password'] ) ) {
			$this->log[] = true;
			return;
		}

		/**
		 * Validate username
		 */
		$raw_username = ! empty( $this->data[ $fields_map['login'] ] ) ? $this->data[ $fields_map['login'] ] : false;

		if ( ! $raw_username ) {
			return $this->set_specific_status( 'empty_username' );
		}

		$username = sanitize_user( $raw_username );

		if ( $username !== $raw_username ) {
			return $this->set_specific_status( 'sanitize_user' );
		}

		if ( username_exists( $username ) ) {
			return $this->set_specific_status( 'username_exists' );
		}
		// username - ok

		/**
		 * Validate email
		 */
		$raw_email = ! empty( $this->data[ $fields_map['email'] ] ) ? $this->data[ $fields_map['email'] ] : false;

		if ( ! $raw_email ) {
			return $this->set_specific_status( 'empty_email' );
		}

		$email = sanitize_email( $raw_email );

		if ( $email !== $raw_email ) {
			return $this->set_specific_status( 'empty_email' );
		}

		if ( email_exists( $email ) ) {
			return $this->set_specific_status( 'email_exists' );
		}
		// email - ok

		/**
		 * Validate password
		 */
		$password = ! empty( $this->data[ $fields_map['password'] ] ) ? $this->data[ $fields_map['password'] ] : false;

		if ( ! $password ) {
			return $this->set_specific_status( 'empty_password' );
		}

		if ( ! empty( $fields_map['confirm_password'] ) ) {
			$confirm_password = ! empty( $this->data[ $fields_map['confirm_password'] ] ) ? $this->data[ $fields_map['confirm_password'] ] : false;

			if ( $confirm_password !== $password ) {
				return $this->set_specific_status( 'password_mismatch' );
			}

		}
		// password - ok

		if ( ! empty( $fields_map['first_name'] ) ) {
			$fname = ! empty( $this->data[ $fields_map['first_name'] ] ) ? $this->data[ $fields_map['first_name'] ] : false;
		}

		if ( ! empty( $fields_map['last_name'] ) ) {
			$lname = ! empty( $this->data[ $fields_map['last_name'] ] ) ? $this->data[ $fields_map['last_name'] ] : false;
		}

		if ( ! empty( $fields_map['user_url'] ) ) {
			$user_url = ! empty( $this->data[ $fields_map['user_url'] ] ) ? $this->data[ $fields_map['user_url'] ] : false;
		}

		$metafields_map = ! empty( $notification['meta_fields_map'] ) ? $notification['meta_fields_map'] : array();
		$metadata       = array();

		if ( ! empty( $metafields_map ) ) {
			foreach ( $metafields_map as $form_field => $meta_field ) {
				$metadata[ $meta_field ] = ! empty( $this->data[ $form_field ] ) ? $this->data[ $form_field ] : false;
			}
		}

		$user_id = wp_insert_user( array(
			'user_pass'  => $password,
			'user_login' => $username,
			'user_email' => $email,
			'first_name' => $fname,
			'last_name'  => $lname,
			'user_url'   => $user_url,
		) );

		if ( ! is_wp_error( $user_id ) ) {

			$this->log[] = true;

			if ( ! empty( $metadata ) ) {
				foreach ( $metadata as $meta_key => $meta_value ) {
					update_user_meta( $user_id, $meta_key, $meta_value );
				}
			}

			if ( ! empty( $notification['log_in'] ) ) {

				wp_signon( array(
					'user_login'    => $username,
					'user_password' => $password,
				) );

				// If form submitted by AJAX - we need to reload page to ensure user is logged in
				if ( $this->handler->is_ajax() ) {
					$this->handler->add_response_data( array( 'reload' => true ) );
				}

			}

			if ( ! empty( $notification['add_user_id'] ) && $notification['add_user_id'] ) {
				$this->data['user_id']               = $user_id;
				$this->handler->form_data['user_id'] = $user_id;
			}

		} else {
			$this->log[] = false;
		}

	}

	/**
	 * Update user notification handler
	 *
	 * @return [type] [description]
	 */
	public function update_user( $notification ) {

		$fields_map = ! empty( $notification['fields_map'] ) ? $notification['fields_map'] : array();
		$fields_map = array_filter( $fields_map );
		$data_map   = array();

		foreach ( $fields_map as $field => $prop ) {
			$data_map[ $prop ] = ! empty( $this->data[ $field ] ) ? $this->data[ $field ] : false;
		}

		$data_map  = array_filter( $data_map );
		$user_meta = array();
		$user      = array(
			'user_nicename' => false,
			'user_url'      => false,
			'display_name'  => false,
			'nickname'      => false,
			'first_name'    => false,
			'last_name'     => false,
			'description'   => false,
		);

		if ( ! is_user_logged_in() ) {
			// Only logged in users can edit other users
			return $this->set_specific_status( 'internal_error' );
		}

		if ( empty( $data_map['ID'] ) ) {
			return $this->set_specific_status( 'sanitize_user' );
		}

		foreach ( $user as $key => $value ) {
			if ( isset( $data_map[ $key ] ) ) {
				$user[ $key ] = $data_map[ $key ];
				unset( $data_map[ $key ] );
			}
		}

		$user['ID']   = absint( $data_map['ID'] );
		$updated_user = get_user_by( 'ID', $user['ID'] );

		unset( $data_map['ID'] );

		if ( ! $updated_user || is_wp_error( $updated_user ) ) {
			return $this->set_specific_status( 'internal_error' );
		}

		if ( get_current_user_id() !== $user['ID'] && ! current_user_can( 'edit_users' ) ) {
			// Only users with appropriate capabilities can edit other users, also user can edit himself
			return $this->set_specific_status( 'internal_error' );
		}

		if ( ! empty( $data_map['email'] ) ) {

			$email = sanitize_email( $data_map['email'] );

			if ( $email !== $data_map['email'] ) {
				return $this->set_specific_status( 'empty_email' );
			}

			$email_exists = email_exists( $email );

			if ( $email_exists && $user['ID'] !== $email_exists ) {
				return $this->set_specific_status( 'email_exists' );
			}

			// Email - ok
			$user['user_email'] = $email;
			unset( $data_map['email'] );

		}

		if ( ! empty( $data_map['password'] ) ) {
			if ( isset( $data_map['confirm_password'] ) ) {

				$pass         = wp_check_invalid_utf8( $data_map['password'], true );
				$confirm_pass = wp_check_invalid_utf8( $data_map['confirm_password'], true );

				if ( $confirm_pass !== $pass ) {
					return $this->set_specific_status( 'password_mismatch' );
				}

				$user['user_pass'] = $pass;

				unset( $data_map['password'] );
				unset( $data_map['confirm_password'] );

			} else {
				$user['user_pass'] = wp_check_invalid_utf8( $data_map['password'], true );
				unset( $data_map['password'] );
			}

		}

		$user = array_filter( $user );

		wp_update_user( $user );

		if ( ! empty( $data_map ) ) {
			foreach ( $data_map as $meta_key => $meta_value ) {
				update_user_meta( $user['ID'], $meta_key, $meta_value );
			}
		}

		$this->log[] = true;

	}

	/**
	 * Set specific form status and return error
	 *
	 * @param [type]  $status [description]
	 * @param boolean $log    [description]
	 */
	public function set_specific_status( $status = null, $log = false ) {
		$this->specific_status = $status;
		$this->log[] = false;
	}

	/**
	 * Returns specific status
	 *
	 * @return [type] [description]
	 */
	public function get_specific_status() {
		return $this->specific_status;
	}

	/**
	 * Insert post notification
	 *
	 * @param  [type] $notification [description]
	 * @return [type]               [description]
	 */
	public function email( $notification ) {

		$mail_to     = ! empty( $notification['mail_to'] ) ? $notification['mail_to'] : 'admin';
		$reply_to    = ! empty( $notification['reply_to'] ) ? $notification['reply_to'] : 'form';
		$email       = false;
		$reply_email = false;

		switch ( $mail_to ) {
			case 'admin':
				$email = get_option( 'admin_email' );
				break;

			case 'form':
				$field = ! empty( $notification['from_field'] ) ? $notification['from_field'] : '';

				if ( $field && ! empty( $this->data[ $field ] ) ) {
					$email = $this->data[ $field ];
				}

				break;

			case 'custom':
				$email = ! empty( $notification['custom_email'] ) ? $notification['custom_email'] : '';
				break;
		}

		switch ( $reply_to ) {

			case 'form':
				$field = ! empty( $notification['reply_from_field'] ) ? $notification['reply_from_field'] : '';

				if ( $field && ! empty( $this->data[ $field ] ) ) {
					$reply_email = $this->data[ $field ];
				}

				break;

			case 'custom':
				$reply_email = ! empty( $notification['reply_to_email'] ) ? $notification['reply_to_email'] : '';
				break;
		}

		if ( ! $email || ! is_email( $email ) ) {
			return;
		}

		$this->email_data = ! empty( $notification['email'] ) ? $notification['email'] : array();

		$this->email_data['reply_email'] = $reply_email;

		$subject = ! empty( $this->email_data['subject'] ) ? $this->email_data['subject'] : sprintf(
			__( 'Form on %s Submitted', 'jet-engine' ),
			home_url( '' )
		);

		$message = ! empty( $this->email_data['content'] ) ? $this->email_data['content'] : '';

		$this->send_mail( $email, $subject, $message );

	}

	/**
	 * Send the email
	 * @param  string  $to      The To address to send to.
	 * @param  string  $subject The subject line of the email to send.
	 * @param  string  $message The body of the email to send.
	 */
	public function send_mail( $to, $subject, $message ) {

		/**
		 * Hooks before the email is sent
		 */
		do_action( 'jet-engine/forms/booking/email/send-before', $this );

		$subject    = $this->parse_macros( $subject );
		$message    = $this->parse_macros( $message );
		$message    = wpautop( $message );
		$message    = make_clickable( $message );
		$message    = str_replace( '&#038;', '&amp;', $message );
		$sent       = wp_mail( $to, $subject, $message, $this->get_headers() );
		$log_errors = apply_filters( 'jet-engine/forms/booking/email/log-errors', true, $to, $subject, $message );

		// Test
		$log_errors = false;

		if( ! $sent && true === $log_errors ) {

			if ( is_array( $to ) ) {
				$to = implode( ',', $to );
			}

			$log_message = sprintf(
				__( "Email from JetEngine Booking Form failed to send.\nSend time: %s\nTo: %s\nSubject: %s\nContent: %s\n\n", 'jet-engine' ),
				date_i18n( 'F j Y H:i:s', current_time( 'timestamp' ) ),
				$to,
				$subject,
				$message
			);

			error_log( $log_message );

			$this->log[] = false;

		} else {
			$this->log[] = true;
		}

		/**
		 * Hooks after the email is sent
		 *
		 * @since 2.1
		 */
		do_action( 'jet-engine/forms/booking/email/send-after', $this );

		return $sent;

	}

	/**
	 * Get the email headers
	 *
	 * @since 2.1
	 */
	public function get_headers() {

		$this->headers  = "From: {$this->get_from_name()} <{$this->get_from_address()}>\r\n";
		$this->headers .= "Reply-To: {$this->get_reply_to()}\r\n";
		$this->headers .= "Content-Type: {$this->get_content_type()}; charset=utf-8\r\n";

		return apply_filters( 'jet-engine/forms/booking/email/headers', $this->headers, $this );
	}

	/**
	 * Parse macros in content
	 *
	 * @param  [type] $content [description]
	 * @return [type]          [description]
	 */
	public function parse_macros( $content ) {

		return preg_replace_callback( '/%(.*?)(\|([a-zA-Z0-9\(\)_-]+))?%/', function( $match ) {

			if ( isset( $this->data[ $match[1] ] ) ) {

				if ( jet_engine()->listings && ! empty( $match[3] ) ) {
					return jet_engine()->listings->filters->apply_filters(
						$this->data[ $match[1] ], $match[3]
					);
				} else {
					if ( is_array( $this->data[ $match[1] ] ) ) {
						return implode( ', ', $this->data[ $match[1] ] );
					} else {
						return $this->data[ $match[1] ];
					}
				}
			} else {
				return $match[0];
			}
		}, $content );

	}

	/**
	 * Run a hook notification
	 *
	 * @param  [type] $notification [description]
	 * @return [type]               [description]
	 */
	public function hook( $notification ) {

		$hook = ! empty( $notification['hook_name'] ) ? $notification['hook_name'] : 'send';

		/**
		 * Fires custom hook. Keep action for backward compatibility.
		 *
		 * @var string
		 */
		do_action( 'jet-engine-booking/' . $hook, $this->data, $this->form, $this );

		/**
		 * Fires custm hook as filter to allow form validation on hook.
		 * Use this to perform an action on the hook and return validation result.
		 *
		 * @var bool
		 */
		$result = apply_filters( 'jet-engine-booking/filter/' . $hook, true, $this->data, $this->form, $this );

		$this->log[] = $result;

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
		$name = ! empty( $this->email_data['from_name'] ) ? $this->email_data['from_name'] : get_bloginfo( 'name' );
		return apply_filters( 'jet-engine/forms/booking/email/from-name', wp_specialchars_decode( $name ), $this );
	}

	/**
	 * Returns e-mail address to set into Reply-to email header
	 *
	 * @return [type] [description]
	 */
	public function get_reply_to() {

		$address = ! empty( $this->email_data['reply_email'] ) ? $this->email_data['reply_email'] : '';

		if ( empty( $address ) || ! is_email( $address ) ) {
			$address = $this->get_from_address();
		}

		return apply_filters( 'jet-engine/forms/booking/email/reply-to', $address, $this );

	}

	/**
	 * Get the email from address
	 */
	public function get_from_address() {

		$address = ! empty( $this->email_data['from_address'] ) ? $this->email_data['from_address'] : '';

		if( empty( $address ) || ! is_email( $address ) ) {
			$address = get_option( 'admin_email' );
		}

		return apply_filters( 'jet-engine/forms/booking/email/from-address', $address, $this );
	}

	/**
	 * Get the email content type
	 */
	public function get_content_type() {
		return apply_filters( 'jet-engine/forms/booking/email/content-type', 'text/html', $this );
	}

	/**
	 * Call a ActiveCampaign notification
	 *
	 * @param  array $notification
	 * @return void
	 */
	public function activecampaign( $notification ) {

		if ( empty( $notification['activecampaign']['api_url'] ) || empty( $notification['activecampaign']['api_key'] ) ) {
			return;
		}

		$api_url = $notification['activecampaign']['api_url'];
		$api_key = $notification['activecampaign']['api_key'];

		$request_url = add_query_arg(
			array(
				'api_action' => 'contact_sync',
				'api_key'    => $api_key,
				'api_output' => 'json',
			),
			esc_url( rtrim( $api_url, '/' ) . '/admin/api.php' )
		);

		$body_args = array();

		$fields_map = ! empty( $notification['activecampaign']['fields_map'] ) ? $notification['activecampaign']['fields_map'] : array();

		foreach ( $fields_map as $param => $field ) {

			if ( empty( $field ) || empty( $this->data[ $field ] ) ) {
				continue;
			}

			$body_args[ $param ] = $this->data[ $field ];
		}

		$list_id = ! empty( $notification['activecampaign']['list_id'] ) ? $notification['activecampaign']['list_id'] : false;

		if ( $list_id ) {
			$body_args[ 'p[' . $list_id . ']' ] = $list_id;
		}

		if ( ! empty( $notification['activecampaign']['tags'] ) ) {
			$body_args['tags'] = $notification['activecampaign']['tags'];
		}

		if ( empty( $body_args['email'] ) ) {
			return;
		}

		$response = wp_remote_post(
			$request_url,
			array(
				'body'    => $body_args,
				'timeout' => 30,
			)
		);

		if ( ! $response || is_wp_error( $response ) ) {
			return;
		}

		$data = wp_remote_retrieve_body( $response );

		if ( ! $data ) {
			return;
		}

		$data = json_decode( $data, true );

		// Error response
		if ( empty( $data['result_code'] ) ) {
			return;
		}

		$this->log[] = true;

	}

	/**
	 * Call a MailChimp notification
	 *
	 * @param  array $notification
	 * @return void
	 */
	public function mailchimp( $notification ) {

		if ( empty( $notification['mailchimp']['api_key'] ) || empty( $notification['mailchimp']['list_id'] ) ) {
			return;
		}

		$api_key = $notification['mailchimp']['api_key'];
		$handler = new Jet_Engine_Forms_MailChimp_Handler( $api_key );

		if ( is_wp_error( $handler ) ) {
			return;
		}

		$status_if_new = isset( $notification['mailchimp']['double_opt_in'] ) && filter_var( $notification['mailchimp']['double_opt_in'], FILTER_VALIDATE_BOOLEAN ) ? 'pending' : 'subscribed';

		$body_args = array(
			'status'        => 'subscribed',
			'status_if_new' => $status_if_new,
		);

		$fields_map = ! empty( $notification['mailchimp']['fields_map'] ) ? $notification['mailchimp']['fields_map'] : array();

		foreach ( $fields_map as $param => $field ) {

			if ( empty( $field ) || empty( $this->data[ $field ] ) ) {
				continue;
			}

			if ( 'email' === $param ) {
				$body_args['email_address'] = $this->data[ $field ];
			} else {
				$body_args['merge_fields'][ $param ] = $this->data[ $field ];
			}
		}

		if ( empty( $body_args['email_address'] ) ) {
			return;
		}

		if ( ! empty( $notification['mailchimp']['groups_ids'] ) && is_array( $notification['mailchimp']['groups_ids'] ) ) {
			foreach ( $notification['mailchimp']['groups_ids'] as $groups_id ) {
				$body_args['interests'][ $groups_id ] = true;
			}
		}

		if ( ! empty( $notification['mailchimp']['tags'] ) ) {
			$body_args['tags'] = explode( ',', trim( $notification['mailchimp']['tags'] ) );
		}

		$end_point = sprintf( 'lists/%1$s/members/%2$s', $notification['mailchimp']['list_id'], md5( strtolower( $body_args['email_address'] ) ) );

		$request_args = array(
			'method'  => 'PUT',
			'body'    => json_encode( $body_args ),
			'headers' => array(
				'Content-Type' => 'application/json; charset=utf-8',
			),
		);

		$response = $handler->request( $end_point, $request_args );

		if ( false === $response ) {
			$this->set_specific_status( 'internal_error' );
			return;
		}

		if ( isset( $response['status'] ) && ! in_array( $response['status'], $handler->success_statuses ) ) {

			if ( isset( $response['title'] ) ) {
				$this->set_specific_status( $response['title'] );
			}

			return;
		}

		// Error response
		if ( empty( $response['id'] ) ) {
			return;
		}

		$this->log[] = true;

	}

	/**
	 * Call a GetResponse notification
	 *
	 * @param  array $notification
	 * @return void
	 */
	public function getresponse( $notification ) {

		if ( empty( $notification['getresponse']['api_key'] ) || empty( $notification['getresponse']['list_id'] ) ) {
			return;
		}

		$api_key = $notification['getresponse']['api_key'];
		$handler = new Jet_Engine_Forms_GetResponse_Handler( $api_key );

		if ( is_wp_error( $handler ) ) {
			return;
		}

		$body_args = array(
			'campaign' => array( 'campaignId' => $notification['getresponse']['list_id'] ),
		);

		if ( isset( $notification['getresponse']['day_of_cycle'] ) ) {
			$body_args['dayOfCycle'] = (int) $notification['getresponse']['day_of_cycle'];
		}

		$fields_map = ! empty( $notification['getresponse']['fields_map'] ) ? $notification['getresponse']['fields_map'] : array();
		$custom_fields_values = array();

		foreach ( $fields_map as $param => $field ) {

			if ( empty( $field ) || empty( $this->data[ $field ] ) ) {
				continue;
			}

			if ( in_array( $param, array( 'email', 'name' ) ) ) {
				$body_args[ $param ] = $this->data[ $field ];
			} else {
				$custom_fields_values[] = array(
					'customFieldId' => $param,
					'value'         => array( $this->data[ $field ] ),
				);
			}
		}

		if ( ! empty( $custom_fields_values ) ) {
			$body_args['customFieldValues'] = $custom_fields_values;
		}

		if ( empty( $body_args['email'] ) ) {
			return;
		}

		$request_args = array(
			'method' => 'POST',
			'body'   => json_encode( $body_args ),
		);

		$response = $handler->request( 'contacts', $request_args );

		if ( false === $response ) {
			$this->set_specific_status( 'internal_error' );
			return;
		}

		// Error response
		if ( isset( $response['httpStatus'] ) && isset( $response['code'] ) ) {
			return;
		}

		$this->log[] = true;

	}


}
