<?php

namespace Jet_Form_Builder\Actions\Types;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
class Register_User extends Base {

	public function get_name() {
		return __( 'Register User', 'jet-form-builder' );
	}

	public function get_id() {
		return 'register_user';
	}

	public function action_attributes() {
		return array(
			'fields_map'      => array(
				'default' => array(),
			),
			'log_in'          => array(
				'default' => array(),
			),
			'add_user_id'     => array(
				'default' => array(),
			),
			'meta_fields_map' => array(
				'default' => array(),
			),
			'user_role'       => array(
				'default' => array(),
			),
		);
	}

	public function self_script_name() {
		return 'jetFormRegisterUserData';
	}

	public function visible_attributes_for_gateway_editor() {
		return array( 'user_role' );
	}

	public function editor_labels() {
		return array(
			'allow_register'    => __( 'Allow create new users by existing users', 'jet-form-builder' ),
			'role_can_register' => __( 'Who can register?', 'jet-form-builder' ),
			'fields_map'        => __( 'Fields Map:', 'jet-form-builder' ),
			'user_role'         => __( 'User Role:', 'jet-form-builder' ),
			'user_meta'         => __( 'User Meta:', 'jet-form-builder' ),
			'log_in'            => __( 'Log In User after Register:', 'jet-form-builder' ),
			'add_user_id'       => __( 'Add User ID to form data:', 'jet-from-builder' ),
		);
	}

	public function editor_labels_help() {
		return array(
			'add_user_id' => __( 'Registered user ID will be added to form data. If form is filled by logged 
			in user - current user ID will be added to form data.', 'jet-form-builder' ),
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
		$allow_register    = $this->settings['allow_register'] ?? false;
		$role_can_register = $this->settings['role_can_register'] ?? false;

		if ( $allow_register && ! $role_can_register ) {
			throw new Action_Exception( 'failed', '`role_can_register` is empty' );
		}

		if ( is_user_logged_in() ) {

			if ( $allow_register && ! current_user_can( $role_can_register ) ) {
				throw new Action_Exception( 'not_enough_cap' );
			}

			if ( ! $allow_register && 1 === $handler->size_all ) {
				throw new Action_Exception( 'already_logged_in' );
			}

			if ( ! $allow_register && isset( $this->settings['add_user_id'] ) && $this->settings['add_user_id'] ) {
				$handler->response_data['user_id'] = get_current_user_id();

				return;
			}

		} elseif ( $allow_register ) {
			throw new Action_Exception( 'not_logged_in' );
		}

		$fields_map = ! empty( $this->settings['fields_map'] ) ? $this->settings['fields_map'] : array();

		// Prepare fields
		$username = false;
		$email    = false;
		$password = false;
		$fname    = false;
		$lname    = false;
		$user_url = false;

		// If fields map for login, password or email is not set - abort but allow submit form (its not user fault)
		if ( empty( $fields_map['login'] ) || empty( $fields_map['email'] ) || empty( $fields_map['password'] ) ) {
			return;
		}

		/**
		 * Validate username
		 */
		$raw_username = ! empty( $request[ $fields_map['login'] ] ) ? $request[ $fields_map['login'] ] : false;

		if ( ! $raw_username ) {
			throw new Action_Exception( 'empty_username' );
		}

		$username = sanitize_user( $raw_username );

		if ( $username !== $raw_username ) {
			throw new Action_Exception( 'sanitize_user' );
		}

		if ( username_exists( $username ) ) {
			throw new Action_Exception( 'username_exists' );
		}
		// username - ok

		/**
		 * Validate email
		 */
		$raw_email = ! empty( $request[ $fields_map['email'] ] ) ? $request[ $fields_map['email'] ] : false;

		if ( ! $raw_email ) {
			throw new Action_Exception( 'empty_email' );
		}

		$email = sanitize_email( $raw_email );

		if ( $email !== $raw_email ) {
			throw new Action_Exception( 'empty_email' );
		}

		if ( email_exists( $email ) ) {

			throw new Action_Exception( 'email_exists' );
		}
		// email - ok

		/**
		 * Validate password
		 */
		$password = ! empty( $request[ $fields_map['password'] ] ) ? $request[ $fields_map['password'] ] : false;

		if ( ! $password ) {
			throw new Action_Exception( 'empty_password' );
		}

		if ( ! empty( $fields_map['confirm_password'] ) ) {
			$confirm_password = ! empty( $request[ $fields_map['confirm_password'] ] ) ? $request[ $fields_map['confirm_password'] ] : false;

			if ( $confirm_password !== $password ) {
				throw new Action_Exception( 'password_mismatch' );
			}

		}
		// password - ok

		if ( ! empty( $fields_map['first_name'] ) ) {
			$fname = ! empty( $request[ $fields_map['first_name'] ] ) ? $request[ $fields_map['first_name'] ] : false;
		}

		if ( ! empty( $fields_map['last_name'] ) ) {
			$lname = ! empty( $request[ $fields_map['last_name'] ] ) ? $request[ $fields_map['last_name'] ] : false;
		}

		if ( ! empty( $fields_map['user_url'] ) ) {
			$user_url = ! empty( $request[ $fields_map['user_url'] ] ) ? $request[ $fields_map['user_url'] ] : false;
		}

		$metafields_map = ! empty( $this->settings['meta_fields_map'] ) ? $this->settings['meta_fields_map'] : array();
		$metadata       = array();

		if ( ! empty( $metafields_map ) ) {
			foreach ( $metafields_map as $form_field => $meta_field ) {
				if ( ! empty( $request[ $form_field ] ) ) {
					$metadata[ $meta_field ] = $request[ $form_field ];
				}
			}
		}

		$userarr = array(
			'user_pass'  => $password,
			'user_login' => $username,
			'user_email' => $email,
			'first_name' => $fname,
			'last_name'  => $lname,
			'user_url'   => $user_url,
		);

		if ( ! empty( $this->settings['user_role'] ) && 'administrator' !== $this->settings['user_role'] ) {
			$userarr['role'] = $this->settings['user_role'];
		}

		$user_id = wp_insert_user( $userarr );

		if ( ! is_wp_error( $user_id ) ) {

			if ( ! empty( $metadata ) ) {
				foreach ( $metadata as $meta_key => $meta_value ) {

					if ( $this->is_repeater_val( $meta_value ) ) {

						$prepared_value = array();

						foreach ( $meta_value as $index => $row ) {

							$prepared_row = array();

							foreach ( $row as $item_key => $item_value ) {

								$item_key = ! empty( $metafields_map[ $item_key ] ) ? esc_attr( $metafields_map[ $item_key ] ) : $item_key;

								$prepared_row[ $item_key ] = $item_value;
							}

							$prepared_value[ 'item-' . $index ] = $prepared_row;
						}

						$meta_value = $prepared_value;
					}

					update_user_meta( $user_id, $meta_key, $meta_value );
				}
			}

			if ( ! empty( $this->settings['log_in'] ) ) {

				wp_signon( array(
					'user_login'    => $username,
					'user_password' => $password,
				) );

				// If form submitted by AJAX - we need to reload page to ensure user is logged in
				if ( $request['__is_ajax'] ) {
					$handler->response_data['reload'] = true;
				}

			}

			if ( ! empty( $this->settings['add_user_id'] ) && $this->settings['add_user_id'] ) {
				$handler->response_data['user_id'] = $user_id;
			}

		} else {
			throw new Action_Exception( 'failed', $userarr );
		}
	}



	/**
	 * Regsiter custom action data for the editor
	 *
	 * @return array [type] [description]
	 */
	public function action_data() {
		return array(
			'userRoles'    => Tools::get_user_roles_for_js(),
			'allUserRoles' => Tools::get_user_roles_for_js( array() ),
			'userFields'   => $this->get_user_fields(),
		);
	}

	public function messages() {
		return array(
			'password_mismatch' => array(
				'label' => __( 'Passwords mismatch', 'jet-form-builder' ),
				'value' => 'Passwords don\'t match.',
			),
			'username_exists'   => array(
				'label' => __( 'Username exists', 'jet-form-builder' ),
				'value' => 'This username already taken.',
			),
			'email_exists'      => array(
				'label' => __( 'Email exists', 'jet-form-builder' ),
				'value' => 'This email address is already used.',
			),
			'sanitize_user'     => array(
				'label' => __( 'Incorrect username', 'jet-form-builder' ),
				'value' => 'Username contains not allowed characters.',
			),
			'empty_username'    => array(
				'label' => __( 'Empty username', 'jet-form-builder' ),
				'value' => 'Please set username.',
			),
			'empty_email'       => array(
				'label' => __( 'Empty email', 'jet-form-builder' ),
				'value' => 'Please set user email.',
			),
			'empty_password'    => array(
				'label' => __( 'Empty password', 'jet-form-builder' ),
				'value' => 'Please set user password.',
			),
			'already_logged_in' => array(
				'label' => __( 'Logged in (appears only if register user is only notification)', 'jet-form-builder' ),
				'value' => 'You already logged in.',
			),
			'not_logged_in'     => array(
				'label' => __( "Not Logged in (appears only when the \"{$this->editor_labels()['allow_register']}\" option is enabled)", 'jet-form-builder' ),
				'value' => 'You are not logged in.',
			),
			'not_enough_cap'    => array(
				'label' => __( 'Not enough capabilities' ),
				'value' => 'Not enough capabilities to register a user.'
			)
		);
	}

	/**
	 * Returns user fields for user notification
	 *
	 * @return array
	 */
	public function get_user_fields() {
		return array(
			'login'            => array(
				'label'    => __( 'User Login', 'jet-form-builder' ),
				'required' => true
			),
			'email'            => array(
				'label'    => __( 'Email', 'jet-form-builder' ),
				'required' => true
			),
			'password'         => array(
				'label'    => __( 'Password', 'jet-form-builder' ),
				'required' => true
			),
			'confirm_password' => array(
				'label'    => __( 'Confirm Password', 'jet-form-builder' ),
				'required' => true
			),
			'first_name'       => __( 'First Name', 'jet-form-builder' ),
			'last_name'        => __( 'Last Name', 'jet-form-builder' ),
			'user_url'         => __( 'User URL', 'jet-form-builder' ),
		);
	}


}


