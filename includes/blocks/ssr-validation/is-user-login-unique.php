<?php


namespace Jet_Form_Builder\Blocks\Ssr_Validation;


use Jet_Form_Builder\Request\Parser_Context;

class Is_User_Login_Unique extends Base_Validation_Callback {

	public function get_id(): string {
		return 'is_user_login_unique';
	}

	public function get_label(): string {
		return __( 'Is user login unique', 'jet-form-builder' );
	}

	public function is_valid( $value, Parser_Context $context ): bool {
		if ( ! is_string( $value ) ) {
			return false;
		}

		return ! (bool) username_exists( $value );
	}
}