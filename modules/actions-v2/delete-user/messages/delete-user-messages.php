<?php

namespace JFB_Modules\Actions_V2\Delete_User\Messages;

use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Form_Messages\Actions\Base_Action_Messages;
use JFB_Modules\Actions_V2\Delete_User\Delete_User_Action;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Delete_User_Messages extends Base_Action_Messages {

	public function is_supported( Base $action ): bool {
		return is_a( $action, Delete_User_Action::class );
	}

	protected function messages(): array {
		return array(
			'not_logged_in'          => array(
				'label' => __( 'Not logged in', 'jet-form-builder' ),
				'value' => 'You must be logged in to delete your account.',
			),
			'user_not_found'         => array(
				'label' => __( 'User not found', 'jet-form-builder' ),
				'value' => 'User account was not found.',
			),
			'not_enough_cap'         => array(
				'label' => __( 'Not enough capabilities', 'jet-form-builder' ),
				'value' => 'You are not allowed to delete this account.',
			),
			'confirmation_required'  => array(
				'label' => __( 'Confirmation required', 'jet-form-builder' ),
				'value' => 'Please confirm that you understand this action before deleting the account.',
			),
			'super_admin'            => array(
				'label' => __( 'Super admin account', 'jet-form-builder' ),
				'value' => 'Super administrator accounts cannot be deleted from this form.',
			),
			'last_administrator'     => array(
				'label' => __( 'Last administrator', 'jet-form-builder' ),
				'value' => 'The last administrator account cannot be deleted.',
			),
			'invalid_reassign_user'   => array(
				'label' => __( 'Invalid reassign user', 'jet-form-builder' ),
				'value' => 'Set a valid user ID to reassign trashed posts.',
			),
		);
	}
}
