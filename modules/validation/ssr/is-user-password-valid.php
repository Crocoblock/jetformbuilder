<?php


namespace JFB_Modules\Validation\Ssr;

use Jet_Form_Builder\Request\Parser_Context;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Is_User_Password_Valid extends Base_Validation_Callback {

	public function get_id(): string {
		return 'is_user_password_valid';
	}

	public function get_label(): string {
		return __( 'Compare with Current User Password', 'jet-form-builder' );
	}

	public function is_valid( $value, Parser_Context $context ): bool {
		if ( ! is_user_logged_in() ) {
			return false;
		}

		if ( ! is_string( $value ) ) {
			return false;
		}

		$user = get_user_by( 'ID', get_current_user_id() );

		if ( ! is_a( $user, \WP_User::class ) ) {
			return false;
		}

		if ( ! wp_check_password( $value, $user->user_pass, $user->ID ) ) {
			return false;
		}

		return true;
	}
}