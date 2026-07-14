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
				'value' => 'Log in before deleting this account.',
			),
			'user_not_found'         => array(
				'label' => __( 'User not found', 'jet-form-builder' ),
				'value' => 'User account was not found.',
			),
			'not_enough_cap'         => array(
				'label' => __( 'Not enough permissions', 'jet-form-builder' ),
				'value' => 'You do not have permission to delete this user.',
			),
			'confirmation_required'  => array(
				'label' => __( 'Confirmation required', 'jet-form-builder' ),
				'value' => 'Confirm the deletion before submitting the form.',
			),
		);
	}
}
