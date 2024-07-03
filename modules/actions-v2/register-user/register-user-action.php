<?php

namespace JFB_Modules\Actions_V2\Register_User;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Methods\Update_User\User_Meta_Property;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;

/**
 * Define Base_Type class
 */
class Register_User_Action extends Base {

	public function get_name() {
		return __( 'Register User', 'jet-form-builder' );
	}

	public function get_id() {
		return 'register_user';
	}

	/**
	 * @throws Action_Exception
	 */
	public function can_register() {
		$allow_register    = $this->settings['allow_register'] ?? false;
		$role_can_register = $this->settings['role_can_register'] ?? false;

		if ( $allow_register && ! $role_can_register ) {
			throw new Action_Exception( 'failed', '`role_can_register` is empty' );
		}

		if ( is_user_logged_in() ) {
			$user = wp_get_current_user();

			if ( $allow_register && ! in_array( $role_can_register, $user->roles, true ) ) {
				throw new Action_Exception( 'not_enough_cap' );
			}

			if ( ! $allow_register ) {
				if ( isset( $this->settings['add_user_id'] ) && $this->settings['add_user_id'] ) {
					jet_fb_action_handler()->response_data['user_id'] = (int) $user->ID;
					jet_fb_context()->update_request( $user->ID, 'user_id' );
					return false;
				}

				throw new Action_Exception( 'already_logged_in' );
			}
		} elseif ( $allow_register ) {
			throw new Action_Exception( 'not_logged_in' );
		}

		return true;
	}

	/**
	 * @param array $request
	 * @param Action_Handler $handler
	 *
	 * @return mixed|void
	 * @throws Action_Exception
	 */
	public function do_action( array $request, Action_Handler $handler ) {
		if ( ! $this->can_register() ) {
			return;
		}

		$fields_map = ! empty( $this->settings['fields_map'] ) ? $this->settings['fields_map'] : array();

		// Prepare fields
		$username       = false;
		$email          = false;
		$password       = false;
		$fname          = false;
		$lname          = false;
		$user_url       = false;
		$remember_field = $this->settings['remember_me_field'] ?? '';
		$is_remember    = ! empty( $request[ $remember_field ] );

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
				/**
				 * @since 3.1.6
				 */
				if ( in_array( $meta_field, User_Meta_Property::get_restricted_keys(), true ) ) {
					continue;
				}
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

								$item_key = ! empty( $metafields_map[ $item_key ] ) ? Tools::sanitize_text_field( $metafields_map[ $item_key ] ) : $item_key;

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

				$user = wp_signon(
					array(
						'user_login'    => $username,
						'user_password' => $password,
						'remember'      => $is_remember,
					)
				);

				if ( ! is_wp_error( $user ) ) {
					wp_set_current_user( $user->ID );
				}
			}

			if ( ! empty( $this->settings['add_user_id'] ) && $this->settings['add_user_id'] ) {
				$handler->response_data['user_id'] = $user_id;
				jet_fb_context()->update_request( $user_id, 'user_id' );
			}
		} else {
			// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
			throw new Action_Exception( 'failed', $userarr );
		}
	}

}
