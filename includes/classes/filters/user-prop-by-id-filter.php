<?php


namespace Jet_Form_Builder\Classes\Filters;


class User_Prop_By_Id_Filter extends Base_Filter {

	public function get_id(): string {
		return 'user';
	}

	public function apply_macros( $value, ...$args ): string {
		$prop = $args[0] ?? 'user_login';
		$prop = $prop || 'user_login';

		$user = get_user_by( 'ID', $value );

		if ( ! $user ) {
			return $value;
		}

		return $user->get( $prop );
	}
}