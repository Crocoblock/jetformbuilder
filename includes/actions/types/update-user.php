<?php

namespace Jet_Form_Builder\Actions\Types;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Methods\Update_User\Description_Property;
use Jet_Form_Builder\Actions\Methods\Update_User\Display_Name_Property;
use Jet_Form_Builder\Actions\Methods\Update_User\First_Name_Property;
use Jet_Form_Builder\Actions\Methods\Update_User\Last_Name_Property;
use Jet_Form_Builder\Actions\Methods\Update_User\Nick_Name_Property;
use Jet_Form_Builder\Actions\Methods\Update_User\User_Confirm_Password_Property;
use Jet_Form_Builder\Actions\Methods\Update_User\User_Email_Property;
use Jet_Form_Builder\Actions\Methods\Update_User\User_Id_Property;
use Jet_Form_Builder\Actions\Methods\Update_User\User_Meta_Property;
use Jet_Form_Builder\Actions\Methods\Update_User\User_Nicename_Property;
use Jet_Form_Builder\Actions\Methods\Update_User\User_Password_Property;
use Jet_Form_Builder\Actions\Methods\Update_User\User_Url_Property;
use Jet_Form_Builder\Actions\Methods\Update_User\User_Modifier;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Classes\Arrayable\Collection;
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

	/** @var Collection */
	private $list;

	public function __construct() {
		parent::__construct();

		$this->list = new Collection(
			array(
				new User_Id_Property(),
				new User_Email_Property(),
				new User_Password_Property(),
				new User_Confirm_Password_Property(),
				new First_Name_Property(),
				new Last_Name_Property(),
				new User_Url_Property(),
				new User_Meta_Property(),
				new Display_Name_Property(),
				new Description_Property(),
				new Nick_Name_Property(),
				new User_Nicename_Property(),
			)
		);
	}

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
			->set_properties( $this->list )
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
			'userFields' => Array_Tools::to_array( $this->list->all() ),
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


