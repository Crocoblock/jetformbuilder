<?php


namespace JFB_Modules\Actions_V2\Register_User\Messages;

use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Form_Messages\Actions\Base_Action_Messages;
use JFB_Modules\Actions_V2\Register_User\Register_User_Action;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Register_User_Messages extends Base_Action_Messages {

	public function is_supported( Base $action ): bool {
		return is_a( $action, Register_User_Action::class );
	}

	protected function messages(): array {
		return array(
			'username_exists'   => array(
				'label' => __( 'User login exists', 'jet-form-builder' ),
				'value' => 'This user login already taken.',
			),
			'empty_password'    => array(
				'label' => __( 'Empty password', 'jet-form-builder' ),
				'value' => 'Please set user password.',
			),
			'already_logged_in' => array(
				'label' => __( 'Logged in (appears only if register user is only notification)', 'jet-form-builder' ),
				'value' => 'You are already logged in.',
			),
			'not_logged_in'     => array(
				'label' => __(
					'Not Logged in (appears only when the "Allow creating new users by existing users" option is enabled)',
					'jet-form-builder'
				),
				'value' => 'You are not logged in.',
			),
			'not_enough_cap'    => array(
				'label' => __( 'Not enough capabilities', 'jet-form-builder' ),
				'value' => 'Not enough capabilities to register a user.',
			),
		);
	}
}
