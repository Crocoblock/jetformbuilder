<?php
/**
 * Form builder class
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

if ( ! class_exists( 'Jet_Engine_Booking_Forms_Handler' ) ) {

	/**
	 * Define Jet_Engine_Booking_Forms_Handler class
	 */
	class Jet_Engine_Booking_Forms_Handler {

		public $hook_key      = 'jet_engine_action';
		public $hook_val      = 'book';
		public $form          = null;
		public $refer         = null;
		public $manager       = null;
		public $notifcations  = null;
		public $form_data     = array();
		public $response_data = array();
		public $is_ajax       = false;

		/**
		 * Constructor for the class
		 */
		function __construct( $manager ) {

			if ( wp_doing_ajax() ) {

				add_action( 'wp_ajax_jet_engine_form_booking_submit', array( $this, 'process_ajax_form' ) );
				add_action( 'wp_ajax_nopriv_jet_engine_form_booking_submit', array( $this, 'process_ajax_form' ) );

			} else {

				if ( ! isset( $_REQUEST[ $this->hook_key ] ) || $this->hook_val !== $_REQUEST[ $this->hook_key ] ) {
					return;
				}

				add_action( 'wp_loaded', array( $this, 'process_form' ), 0 );

			}

			$this->manager = $manager;

		}

		/**
		 * Is ajax form processing or not
		 *
		 * @return boolean [description]
		 */
		public function is_ajax() {
			return $this->is_ajax;
		}

		/**
		 * Setup form data
		 *
		 * @return [type] [description]
		 */
		public function setup_form() {

			$form_key  = '_jet_engine_booking_form_id';
			$refer_key = '_jet_engine_refer';

			if ( ! $this->is_ajax ) {
				$this->form  = ! empty( $_REQUEST[ $form_key ] ) ? $_REQUEST[ $form_key ] : false;
				$this->refer = ! empty( $_REQUEST[ $refer_key ] ) ? $_REQUEST[ $refer_key ] : false;
			} else {

				$values = ! empty( $_REQUEST['values'] ) ? $_REQUEST['values'] : array();

				foreach ( $values as $data ) {
					if ( $data['name'] === $form_key ) {
						$this->form = $data['value'];
					}
				}

			}
		}

		/**
		 * Check if current form has configured gateway
		 *
		 * @return boolean [description]
		 */
		public function has_gateway() {
			return apply_filters( 'jet-engine/forms/handler/has-gateways', false, $this->form );
		}

		/**
		 * Process form with Ajax
		 *
		 * @return [type] [description]
		 */
		public function process_ajax_form() {
			$this->is_ajax = true;
			$this->process_form();
		}

		/**
		 * Process current form
		 *
		 * @return [type] [description]
		 */
		public function process_form() {

			$this->setup_form();

			$data = $this->get_form_data();

			require_once jet_engine()->modules->modules_path( 'forms/notifications.php' );

			$this->notifcations = new Jet_Engine_Booking_Forms_Notifications(
				$this->form,
				$data,
				$this->manager,
				$this
			);

			do_action( 'jet-engine/forms/handler/before-send', $this );

			$success = $this->notifcations->send();

			do_action( 'jet-engine/forms/handler/after-send', $this, $success );

			if ( true === $success ) {
				$this->redirect( array(
					'status' => 'success',
				) );
			} else {
				$this->redirect( array(
					'status' => 'failed',
				) );
			}

		}

		/**
		 * Add new properties into response data
		 *
		 * @param array $data [description]
		 */
		public function add_response_data( $data = array() ) {
			$this->response_data = array_merge( $this->response_data, $data );
		}

		/**
		 * Redirect back to refer
		 * @param  array  $args [description]
		 * @return [type]       [description]
		 */
		public function redirect( $args = array() ) {

			$args = wp_parse_args( $args, array(
				'status' => 'success',
			) );

			$error_statuses  = array( 'validation_failed', 'invalid_email' );

			if ( $this->notifcations ) {
				$specific_status = $this->notifcations->get_specific_status();
			} else {
				$specific_status = false;
			}

			if ( ! empty( $specific_status ) ) {
				$args['status'] = $specific_status;
			}

			$query_args = array(
				'status' => $args['status'],
			);

			$query_args = array_merge( $query_args, $this->response_data );

			// Clear form-related arguments
			$this->refer = remove_query_arg( array( 'values', 'status', 'fields' ), $this->refer );

			if ( 'validation_failed' === $args['status'] ) {
				if ( $this->is_ajax ) {
					$query_args['fields'] = $args['errors'];
				} else {
					$query_args['fields'] = implode( ',', $args['errors'] );
				}
			}

			$send_values = apply_filters( 'jet-engine/forms/booking/handler/send-values-on-error', true );

			if ( ! $this->is_ajax && $send_values && in_array( $args['status'], $error_statuses ) ) {
				$query_args['values'] = $this->form_data;
			}

			$query_args = apply_filters( 'jet-engine/forms/handler/query-args', $query_args, $args, $this );

			if ( $this->is_ajax ) {

				$messages = jet_engine()->forms->get_messages_builder( $this->form );

				ob_start();
				$messages->set_form_status( $args['status'] );
				$messages->render_messages();
				$query_args['message'] = ob_get_clean();

				if ( 'validation_failed' === $args['status'] ) {
					ob_start();
					$messages->render_empty_field_message();
					$query_args['field_message'] = ob_get_clean();
				}

				wp_send_json( $query_args );

			} else {
				$redirect = add_query_arg( $query_args, $this->refer );
				wp_redirect( $redirect );
				die();
			}

		}

		/**
		 * Get form values from request
		 *
		 * @return [type] [description]
		 */
		public function get_values_from_request() {

			if ( $this->is_ajax ) {

				$prepared = array();
				$raw      = ! empty( $_REQUEST['values'] ) ? $_REQUEST['values'] : array();

				if ( empty( $raw ) ) {
					return $prepared;
				}

				foreach ( $raw as $data ) {

					$name  = $data['name'];
					$value = $data['value'];

					if ( false !== strpos( $name, '[]') ) {

						$name = str_replace( '[]', '', $name );

						if ( empty( $prepared[ $name ] ) ) {
							$prepared[ $name ] = array();
						}

						$prepared[ $name ][] = $value;

					} else {
						$prepared[ $name ] = $value;
					}

				}

				return $prepared;

			} else {
				return $_REQUEST;
			}

		}

		/**
		 * Get submitted form data
		 *
		 * @return [type] [description]
		 */
		public function get_form_data() {

			$fields        = $this->manager->editor->get_form_data( $this->form );
			$data          = array();
			$errors        = array();
			$invalid_email = false;
			$request       = $this->get_values_from_request();

			$skip_fields = array( 'submit', 'page_break', 'heading', 'group_break' );

			foreach ( $fields as $field ) {

				if ( in_array( $field['settings']['name'], $skip_fields ) ) {
					continue;
				}

				if ( in_array( $field['settings']['type'], array( 'heading', 'group_break' ) ) ) {
					continue;
				}

				if ( ! $this->is_field_visible( $field['settings'] ) ) {
					continue;
				}

				$settings = $field['settings'];
				$required = ! empty( $settings['required'] ) ? $settings['required'] : '';
				$name     = $settings['name'];
				$value    = isset( $request[ $name ] ) ? $request[ $name ] : '';

				if ( 'media' === $settings['type'] ) {

					$value = json_decode( wp_unslash( $value ), true );

					if ( ! empty( $settings['insert_attachment'] ) && ! empty( $settings['value_format'] ) && 'id' === $settings['value_format'] ) {
						if ( ! is_array( $value ) ) {
							$value = absint( $value );
						} else {
							$value = implode( ',', $value );
						}
					}

				}

				if ( 'wysiwyg' === $settings['type'] ) {
					$required = false;
					$value = jet_engine_sanitize_wysiwyg( $value );
				}

				$data[ $name ] = $value;

				if ( 'text' === $settings['type'] && 'email' === $settings['field_type'] && ! is_email( $value ) ) {
					$invalid_email = true;
				}

				if ( is_array( $value ) ) {
					$value = implode( ', ', $value );
				}

				if ( $required && '' === $value ) {
					$errors[] = $name;
				}

			}

			$this->form_data = apply_filters( 'jet-engine/forms/handler/form-data', $data, $this->form, $fields );

			if ( ! $this->manager->captcha->verify( $this->form, $this->is_ajax ) ) {
				$this->redirect( array(
					'status' => 'captcha_failed',
					'errors' => $errors,
				) );
			}

			if ( ! empty( $errors ) ) {
				$this->redirect( array(
					'status' => 'validation_failed',
					'errors' => $errors,
				) );
			}

			if ( $invalid_email ) {
				$this->redirect( array(
					'status' => 'invalid_email',
				) );
			}

			return $data;

		}

		/**
		 * Returns true if field is visible
		 *
		 * @param  array   $field [description]
		 * @return boolean        [description]
		 */
		public function is_field_visible( $field = array() ) {

			// For backward compatibility and hidden fields
			if ( empty( $field['visibility'] ) ) {
				return true;
			}

			// If is visible for all - show field
			if ( 'all' === $field['visibility'] ) {
				return true;
			}

			// If is visible for logged in users and user is logged in - show field
			if ( 'logged_id' === $field['visibility'] && is_user_logged_in() ) {
				return true;
			}

			// If is visible for not logged in users and user is not logged in - show field
			if ( 'not_logged_in' === $field['visibility'] && ! is_user_logged_in() ) {
				return true;
			}

			return false;

		}

	}

}
