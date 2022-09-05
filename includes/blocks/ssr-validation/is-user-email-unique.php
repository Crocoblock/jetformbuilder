<?php


namespace Jet_Form_Builder\Blocks\Ssr_Validation;


class Is_User_Email_Unique extends Base_Validation_Callback {

	public function get_id(): string {
		return 'is_user_email_unique';
	}

	public function get_label(): string {
		return __( 'Is user email unique', 'jet-form-builder' );
	}

	public function is_valid( $value ): bool {
		if ( ! is_string( $value ) ) {
			return false;
		}

		$user = get_user_by( 'email', $value );

		return ! (bool) ( $user->ID ?? 0 );
	}
}