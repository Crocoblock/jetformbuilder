<?php
namespace Jet_Form_Builder\Actions\Types;

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

    public function __construct() {
        add_filter(
            'editable_roles',
            [ $this, 'hide_roles' ]
        );

        parent::__construct();
    }

	public function get_name() {
		return __( 'Register User', 'jet-form-builder' );
	}

	public function get_id() {
		return 'register_user';
	}

	public function do_action( $request )
    {
        throw new Action_Exception( 'password_mismatch' );
    }

    /**
     * Regsiter custom action data for the editor
     *
     * @param $editor
     * @param $handle
     * @return void [type] [description]
     */
	public function action_data( $editor, $handle ) {

		wp_localize_script( $handle, 'jetFormRegisterUserData', array(
			'userRoles'         => Tools::get_user_roles_for_js(),
			'userFields'        => $this->get_user_fields(),
			'labels'            => array(
			    'fields_map'    => __(
			        'Fields Map:',
                    'jet-form-builder'
                ),
                'user_role'     => __(
                    'User Role:',
                    'jet-form-builder'
                ),
                'user_meta'     => __(
                    'User Meta:',
                    'jet-form-builder'
                ),
                'log_in'        => __(
                    'Log In User after Register:',
                    'jet-form-builder'
                ),
                'add_user_id'   => __(
                    'Add User ID to form data:',
                    'jet-from-builder'
                ),
            ),
			'messages'          => $this->messages(),
			'help_messages'     => array(
			    'add_user_id' => __(
			        'Registered user ID will be added to form data. If form is filled by logged 
			        in user - current user ID will be added to form data.',
                    'jet-form-builder'
                ),
            ),
		) );
	}

    public function messages()
    {
        return array(
            'password_mismatch' => array(
                'label' => __( 'Passwords mismatch', 'jet-form-builder' ),
                'value' => 'Passwords don\'t match.',
            ),
            'username_exists' => array(
                'label' => __( 'Username exists', 'jet-form-builder' ),
                'value' => 'This username already taken.',
            ),
            'email_exists' => array(
                'label' => __( 'Email exists', 'jet-form-builder' ),
                'value' => 'This email address is already used.',
            ),
            'sanitize_user' => array(
                'label' => __( 'Incorrect username', 'jet-form-builder' ),
                'value' => 'Username contains not allowed characters.',
            ),
            'empty_username' => array(
                'label' => __( 'Empty username', 'jet-form-builder' ),
                'value' => 'Please set username.',
            ),
            'empty_email' => array(
                'label' => __( 'Empty email', 'jet-form-builder' ),
                'value' => 'Please set user email.',
            ),
            'empty_password' => array(
                'label' => __( 'Empty password', 'jet-form-builder' ),
                'value' => 'Please set user password.',
            ),
            'already_logged_in' => array(
                'label' => __( 'Logged in (appears only if register user is only notification)', 'jet-form-builder' ),
                'value' => 'You already logged in.',
            ),
        );
    }

	public function hide_roles( $all_roles ) {
        unset( $all_roles['administrator'] );

        return $all_roles;
    }

	/**
	 * Returns user fields for user notification
	 *
	 * @return array
	 */
	public function get_user_fields() {
        return array(
            'login'            => __( 'User Login', 'jet-form-builder' ),
            'email'            => __( 'Email', 'jet-engine' ),
            'password'         => __( 'Password', 'jet-engine' ),
            'confirm_password' => __( 'Confirm Password', 'jet-engine' ),
            'first_name'       => __( 'First Name', 'jet-engine' ),
            'last_name'        => __( 'Last Name', 'jet-engine' ),
            'user_url'         => __( 'User URL', 'jet-engine' ),
        );
	}


}


