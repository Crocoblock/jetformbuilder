<?php


namespace Jet_Form_Builder\Form_Messages\Actions;


use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Actions\Types\Register_User;
use Jet_Form_Builder\Actions\Types\Update_User;

class User_Specific_Messages extends Base_Action_Messages {

	public function is_supported( Base $action ): bool {
		$current = get_class( $action );

		return in_array(
			$current,
			array(
				Register_User::class,
				Update_User::class,
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