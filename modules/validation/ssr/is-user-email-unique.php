<?php


namespace JFB_Modules\Validation\Ssr;

use Jet_Form_Builder\Request\Parser_Context;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Is_User_Email_Unique extends Base_Validation_Callback {

	public function get_id(): string {
		return 'is_user_email_unique';
	}

	public function get_label(): string {
		return __( 'Is user email unique', 'jet-form-builder' );
	}

	public function is_valid( $value, Parser_Context $context ): bool {
		if ( ! is_string( $value ) ) {
			return false;
		}

		$user = get_user_by( 'email', $value );

		return ! (bool) ( $user->ID ?? 0 );
	}
}
