<?php
namespace Jet_Form_Builder\Actions\Types;

use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
class Register_User extends Base {

    public function __construct() {
        $this->do_action();
    }

	public function get_name() {
		return __( 'Register User', 'jet-form-builder' );
	}

	public function get_id() {
		return 'register_user';
	}

	public function do_action() {
        add_filter(
            'editable_roles',
            [ $this, 'hide_roles' ]
        );
	}

	/**
	 * Regsiter custom action data for the editor
	 *
	 * @return [type] [description]
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
			'help_messages'     => array(
			    'add_user_id' => __(
			        'Registered user ID will be added to form data. If form is filled by logged 
			        in user - current user ID will be added to form data.',
                    'jet-form-builder'
                ),
            ),
		) );
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


