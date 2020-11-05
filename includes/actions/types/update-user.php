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
class Update_User extends Base {

	public function get_name() {
		return __( 'Update User', 'jet-form-builder' );
	}

	public function get_id() {
		return 'update_user';
	}

	public function do_action($request)
    {
        // TODO: Implement do_action() method.
    }


    /**
	 * Regsiter custom action data for the editor
	 *
	 * @return [type] [description]
	 */
	public function action_data( $editor, $handle ) {

		wp_localize_script( $handle, 'jetFormUpdateUserData', array(
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
            ),
		) );
	}


	/**
	 * Returns user fields for user notification
	 *
	 * @return array
	 */
	public function get_user_fields() {
        return array(
            array(
                'value' => 'ID',
                'label' => __( 'User ID (will update this user)', 'jet-form-builder' ),
            ),
            array(
                'value' => 'login',
                'label' => __( 'User Login', 'jet-form-builder' ),
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
        );
	}


}


