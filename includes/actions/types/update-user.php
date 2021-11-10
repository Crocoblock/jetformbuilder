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
class Update_User extends Base {

	public function get_name() {
		return __( 'Update User', 'jet-form-builder' );
	}

	public function get_id() {
		return 'update_user';
	}

	public function action_attributes() {
		return array(
			'fields_map' => array(
				'default' => array(),
			),
			'user_role'  => array(
				'default' => '',
			),
		);
	}

	public function do_action( array $request, Action_Handler $handler ) {
		$fields_map = ! empty( $this->settings['fields_map'] ) ? $this->settings['fields_map'] : array();
		$fields_map = array_filter( $fields_map );
		$data_map   = array();

		foreach ( $request as $field => $field_value ) {
			if ( ! empty( $fields_map[ $field ] ) ) {
				$prop = $fields_map[ $field ];

				$data_map[ $prop ] = ! empty( $field_value ) ? $field_value : '';
			}
		}

		// $data_map  = array_filter( $data_map );
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
			throw new Action_Exception( 'internal_error' );
		}

		if ( empty( $data_map['ID'] ) ) {
			throw new Action_Exception( 'sanitize_user' );
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
			throw new Action_Exception( 'internal_error', $user['ID'] );
		}

		if ( get_current_user_id() !== $user['ID'] && ! current_user_can( 'edit_users' ) ) {
			// Only users with appropriate capabilities can edit other users, also user can edit himself
			throw new Action_Exception( 'internal_error' );
		}

		if ( ! empty( $data_map['email'] ) ) {

			$email = sanitize_email( $data_map['email'] );

			if ( $email !== $data_map['email'] ) {
				throw new Action_Exception( 'empty_email' );
			}

			$email_exists = email_exists( $email );

			if ( $email_exists && $user['ID'] !== $email_exists ) {
				throw new Action_Exception( 'email_exists' );
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
					throw new Action_Exception( 'password_mismatch' );
				}

				$user['user_pass'] = $pass;

				unset( $data_map['password'] );
				unset( $data_map['confirm_password'] );

			} else {
				$user['user_pass'] = wp_check_invalid_utf8( $data_map['password'], true );
				unset( $data_map['password'] );
			}
		}

		wp_update_user( $user );

		if ( ! empty( $this->settings['user_role'] ) && 'administrator' !== $this->settings['user_role'] ) {
			$updated_user->set_role( $this->settings['user_role'] );
		}

		if ( ! empty( $data_map ) ) {
			foreach ( $data_map as $meta_key => $meta_value ) {

				if ( $this->is_repeater_val( $meta_value ) ) {

					$prepared_value = array();

					foreach ( $meta_value as $index => $row ) {

						$prepared_row = array();

						foreach ( $row as $item_key => $item_value ) {

							$item_key = ! empty( $fields_map[ $item_key ] ) ? sanitize_key( $fields_map[ $item_key ] ) : $item_key;

							$prepared_row[ $item_key ] = $item_value;
						}

						$prepared_value[ 'item-' . $index ] = $prepared_row;
					}

					$meta_value = $prepared_value;
				}

				update_user_meta( $user['ID'], $meta_key, $meta_value );
			}
		}
	}

	public function self_script_name() {
		return 'jetFormUpdateUserData';
	}

	public function visible_attributes_for_gateway_editor() {
		return array( 'user_role' );
	}

	public function editor_labels() {
		return array(
			'fields_map' => __( 'Fields Map:', 'jet-form-builder' ),
			'user_role'  => __( 'User Role:', 'jet-form-builder' ),
		);
	}

	/**
	 * Regsiter custom action data for the editor
	 *
	 * @return [type] [description]
	 */
	public function action_data() {
		return array(
			'userRoles'  => Tools::get_user_roles_for_js(),
			'userFields' => $this->get_user_fields(),
		);
	}


	/**
	 * Returns user fields for user notification
	 *
	 * @return array
	 */
	public function get_user_fields() {
		return Tools::with_placeholder(
			array(
				array(
					'value' => 'ID',
					'label' => __( 'User ID (will update this user)', 'jet-form-builder' ),
				),
				array(
					'value' => 'email',
					'label' => __( 'Email', 'jet-form-builder' ),
				),
				array(
					'value' => 'password',
					'label' => __( 'Password', 'jet-form-builder' ),
				),
				array(
					'value' => 'confirm_password',
					'label' => __( 'Confirm Password', 'jet-form-builder' ),
				),
				array(
					'value' => 'first_name',
					'label' => __( 'First Name', 'jet-form-builder' ),
				),
				array(
					'value' => 'last_name',
					'label' => __( 'Last Name', 'jet-form-builder' ),
				),
				array(
					'value' => 'user_url',
					'label' => __( 'User URL', 'jet-form-builder' ),
				),
				array(
					'value' => 'user_meta',
					'label' => __( 'User Meta', 'jet-form-builder' ),
				),
			)
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
		);
	}


}


