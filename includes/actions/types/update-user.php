<?php

namespace Jet_Form_Builder\Actions\Types;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Methods\Update_User\User_Modifier;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
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
			->set( 'role', $this->settings['user_role'] ?? false )
			->run();
	}

	public function self_script_name() {
		return 'jetFormUpdateUserData';
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
			'properties' => Tools::with_placeholder(
				Array_Tools::to_array( ( new User_Modifier() )->properties->all() )
			),
		);
	}



}


