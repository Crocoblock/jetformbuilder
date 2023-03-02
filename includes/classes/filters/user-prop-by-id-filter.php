<?php


namespace Jet_Form_Builder\Classes\Filters;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class User_Prop_By_Id_Filter extends Base_Filter {

	public function get_id(): string {
		return 'user';
	}

	public function callback_args(): array {
		return array( 'user_login' );
	}

	public function apply_macros( $value, ...$args ): string {
		list( $prop ) = $args;

		$user = get_user_by( 'ID', $value );

		if ( ! $user ) {
			return $value;
		}

		return $user->get( $prop );
	}
}