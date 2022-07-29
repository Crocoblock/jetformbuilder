<?php

namespace Jet_Form_Builder\Actions\Types;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Methods\Update_User\User_Modifier;
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

	/**
	 * @param array $request
	 * @param Action_Handler $handler
	 *
	 * @return void
	 * @throws Action_Exception
	 */
	public function do_action( array $request, Action_Handler $handler ) {
		( new User_Modifier() )
			->set_request( $request )
			->set_fields_map( $this->settings['fields_map'] ?? array() )
			->set_user_role( $this->settings['user_role'] ?? false )
			->run();
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



}


