<?php


namespace JFB_Modules\Actions_V2\Register_User\Messages;

use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Form_Messages\Actions\Base_Action_Messages;
use JFB_Modules\Actions_V2\Register_User\Register_User_Action;
use JFB_Modules\Actions_V2\Update_User\Update_User_Action;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class User_Specific_Messages extends Base_Action_Messages {

	public function is_supported( Base $action ): bool {
		$current = get_class( $action );

		return in_array(
			$current,
			array(
				Register_User_Action::class,
				Update_User_Action::class,
			),
			true
		);
	}

	protected function messages(): array {
		return array(
			'password_mismatch' => array(
				'label' => __( 'Passwords mismatch', 'jet-form-builder' ),
				'value' => 'Passwords don\'t match.',
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
		);
	}
}
